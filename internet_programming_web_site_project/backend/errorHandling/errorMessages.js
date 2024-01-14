const errorMessages={
    "BadFileRequest":"The specified url was not found.",
    "Unauthorized":"Unauthorized access request denied.",
    "AccessDenied":"Access denied.",
    "FileNotFound":"Sunucu istediğiniz dosyayı bulamıyor. ",
    "RequestTimeOut":"İstemci, sunucu almayı bitirmeden isteği durdurdu. ",
    "InternalError":"Couldn’t retrieve the HTML document because of server-configuration problems.",
    "NotImplemented":"Web server doesn't support a requested feature.",
    "ServiceTemporarilyOverloaded":"Server congestion; too many connections; high traffic. Keep trying until the page loads.",
    "ServiceUnavailable":"Server busy, site may have moved ,or you lost your dial-up Internet connection.",
    "ConnectionRefusedByHost":"Either you do not have permission to access the site or your password is incorrect.",
    "FileContainsNoData":"Error occurs in the document. ",
    "FailedDNSLookup":"The Domain Name Server can’t translate your domain request into a valid Internet address. Server may be busy or down, or incorrect URL was entered.",
    "HostUnavailable":"Host server down. Hit reload or go to the site later.",
    "UnableToLocateHost":"Host server is down, Internet connection is lost, or URL typed incorrectly.",
    "NetworkConnectionRefusedByTheServer":"The Web server is busy.",
    "ProductNotFount":"Product not found"
}
module.exports=errorMessages