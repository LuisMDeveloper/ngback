﻿backand.options.ajax = function (url, data, verb, successCallback, erroCallback, forToken) {
    $.ajax({
        url: url,
        async: false,
        type: verb,
        beforeSend: function (xhr) {
            if (!forToken)
                xhr.setRequestHeader('Authorization', localStorage.getItem('Authorization'));
        },
        data: data,
        dataType: 'json', // should be jsonp
        cache: false,
        error: function (xhr, textStatus, err) { if (xhr, textStatus, err) erroCallback(xhr, textStatus, err); },
        success: function (data, textStatus, xhr) { if (successCallback) successCallback(data, textStatus, xhr); }
    });
}