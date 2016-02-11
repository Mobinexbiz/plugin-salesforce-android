<WEBCLIENT AddUserInfo="0" ContentType="json"
    HostUrl="http://services.smartface.io/SmartfaceInAction/News?page=${pageNumber}&amp;rowNumber=${rowNumber}"
    ID="61F1A29C-FF96-4451-922E-608F42B1D058" MaxReceiveCount="0" Method="0" Name="wcSquareView"
    NotifyUpdateStatus="1" RequestRawBodyContentType="application/json" RequestRawBodyEnabled="0"
    TimeOutInterval="60" WriteMode="1">
    <SendParams>
        <Params>
            <Param Name="rowNumber" Parent="URL" SROffset="0"
                Value="Data.wcSquareView_InDSet.rowNumber" />
            <Param Name="pageNumber" Parent="URL" SROffset="1"
                Value="Data.wcSquareView_InDSet.pageNumber" />
        </Params>
    </SendParams>
    <ReceiveParams>
        <Params>
            <Param Parent="BODY" Value="Data.wcSquareView_OutDSetnews.news" XPath="$.news" />
            <Param Parent="BODY" Value="Data.wcSquareView_OutDSetnews.title" XPath="$.news.title" />
            <Param Parent="BODY" Value="Data.wcSquareView_OutDSetnews.id" XPath="$.news.id" />
            <Param Parent="BODY" Value="Data.wcSquareView_OutDSetnews.type" XPath="$.news.type" />
            <Param Parent="BODY" Value="Data.wcSquareView_OutDSetnews.description"
                XPath="$.news.description" />
            <Param Parent="BODY" Value="Data.wcSquareView_OutDSetnews.id1"
                XPath="$.news.image.id" />
            <Param Parent="BODY" Value="Data.wcSquareView_OutDSetnews.url"
                XPath="$.news.image.url" />
        </Params>
    </ReceiveParams>
    <CustomRequestHeaders></CustomRequestHeaders>
    <ONSYNDICATIONSUCCESS script="Project_wcSquareView_OnSyndicationSuccess(e);" />
</WEBCLIENT>
