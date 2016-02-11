<WEBCLIENT AddUserInfo="0" ContentType="json"
    HostUrl="http://services.smartface.io/SmartfaceInAction/Maps"
    ID="18D8B820-57A9-4DD6-B70E-D5073B0D25D5" MaxReceiveCount="0" Method="0" Name="wcMap"
    NotifyUpdateStatus="1" RequestRawBodyContentType="application/json" RequestRawBodyEnabled="0"
    TimeOutInterval="60" WriteMode="1">
    <SendParams></SendParams>
    <ReceiveParams>
        <Params>
            <Param Parent="BODY" Value="Data.wcMap_OutDSetwcMap.wcMap" XPath="$" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetpins.pins" XPath="$.pins" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetpins.title" XPath="$.pins.title" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetpins.id" XPath="$.pins.id" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetpins.type" XPath="$.pins.type" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetpins.subtitle" XPath="$.pins.subtitle" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetpins.latitude" XPath="$.pins.latitude" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetpins.address" XPath="$.pins.address" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetpins.longitude"
                XPath="$.pins.longitude" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetwcMap.success" XPath="$.success" />
            <Param Parent="BODY" Value="Data.wcMap_OutDSetwcMap.error" XPath="$.error" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.wcMap" XPath="$" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Cache_Control"
                XPath="$.Cache-Control" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Pragma" XPath="$.Pragma" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Transfer_Encoding"
                XPath="$.Transfer-Encoding" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Content_Type"
                XPath="$.Content-Type" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Content_Encoding"
                XPath="$.Content-Encoding" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Expires"
                XPath="$.Expires" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Vary" XPath="$.Vary" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Server" XPath="$.Server" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.X_AspNet_Version"
                XPath="$.X-AspNet-Version" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.X_Powered_By"
                XPath="$.X-Powered-By" />
            <Param Parent="HEADER" Value="Data.wcMap_HeaderOutDSetwcMap.Date" XPath="$.Date" />
        </Params>
    </ReceiveParams>
    <CustomRequestHeaders></CustomRequestHeaders>
    <ONSYNDICATIONSUCCESS script="Project_wcMap_OnSyndicationSuccess(e);" />
</WEBCLIENT>
