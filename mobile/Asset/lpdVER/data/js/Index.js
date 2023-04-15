$(function () {


    //set custom bio tracking sessionId and contextname when login page loads
    var mtbAppSessionId = $("#MtbAppSessionId").val();
    if (mtbAppSessionId) {
        cdApi.setCustomerSessionId(mtbAppSessionId);
        //context_name hardcoded for login page
        cdApi.changeContext("OLB:Login:Index");
    }

    $('#userId').focus();

    if (/OLBRememberUserId/.test(document.cookie) === true) {
        $('#userId').val(getCookie('OLBRememberUserId'));
        $('#RememberUserId').prop("checked", true);
    } else {
        $('#RememberUserId').prop("checked", false);
    }

    function validateCredentials() {
        var userId = $("#userId");
        var passcode = $("#Passcode");

        userId.val($.trim(userId.val()));

        if (userId.val() == "" || passcode.val() == "") {
            event.preventDefault();
            $(".js-pgLevelMsg").removeClass("hide");
            $(".js-pgLevelMsg").focus();
            TagCheckBox(analyticsTag);
            var analyticsTag = "ProvideUserIDandPasscode";
            s.eVar188 = "ProvideUserIDandPasscode";
            s.linkTrackEvents = s.events = "event188";
            s.eVar16 = "LogInToOnlineBanking";
            s.eVar30 = s.prop30 = "OLB:Login:Index";
            s.linkTrackVars = "eVar27,eVar30,prop30,pageName,eVar41,eVar16,prop41,channel";
            s.eVar27 = s.pageName = "OLB:Login:Index";
            s.eVar41 = s.prop41 = "OLB";
            s.channel = "Anonymous";
            s.tl(this, "o", analyticsTag);
            return false;
        } else {
            $(".js-pgLevelMsg").addClass("hide");
            return true;
        }
    }

    $(document).on("input", "#Passcode", function() {
        if ($(this).val().length) {
            $("#Show").removeClass("hide");
        } else {
            $("#Show").addClass("hide");
        }
    });

    $(document).on("click", ".js-showHide", function () {
        if ($(this).text() === "Show") {
            $("#Passcode").attr("type", "tel");
            $(this).text("Hide");
        } else {
            $("#Passcode").attr("type", "password");
            $(this).text("Show");
        }
    });

    $(document).on('click', '#btnSubmit', function () {
        event.preventDefault();
        if (validateCredentials()) {
            $("#UnMaskedUserId").val($("#userId").val());
            if ($('#RememberUserId').is(':checked')) {
                TagCheckBox();
                $('#RememberUserId').val('true');
            } else {
                $('#RememberUserId').val('false');
                deleteCookie('OLBRememberUserId');
            }
            $("#Passcode").attr("type", "password");
            $("form").submit();
        }
    });

    function TagCheckBox() {
        if ($('#RememberUserId').is(':checked') === true) {
            var analyticsTag = "OLB";
            s.linkTrackEvents = s.events = "event193";
            s.eVar53 = "RememberUserIDCheckbox";
            s.linkTrackVars = "eVar27,eVar41,eVar53,events,prop41,channel";
            s.eVar27 = s.prop41 = analyticsTag;
            s.pageName = "OLB:Login:Index";
            s.channel = "Anonymous";
            s.tl(this, "o", analyticsTag);
        }
    }

    function getCookie(cookieKeyName) {
        var name = cookieKeyName + "=";
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function deleteCookie(name) {
        if (getCookie(name)) {
            // Expires to yesterday and from all paths
            var d = new Date;
            d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * -1);
            document.cookie = name + "=" + '' + ";path=/;domain=mtb.com;expires=" + d.toGMTString();
        }
    }
});