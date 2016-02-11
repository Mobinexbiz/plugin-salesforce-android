<WEBCLIENT AddUserInfo="0" ContentType="json"
    HostUrl="http://services.smartface.io/SmartfaceInAction/News?page=${pagenumber}&amp;rowNumber=${rowNumber}"
    ID="BE326890-073A-4F1D-9C9C-2FB3FA46B4B4" MaxReceiveCount="0" Method="0" Name="wcListView"
    NotifyUpdateStatus="1" RequestRawBodyContentType="application/json" RequestRawBodyEnabled="0"
    TimeOutInterval="60" WriteMode="1">
    <SendParams>
        <Params>
            <Param Name="rowNumber" Parent="URL" SROffset="0"
                Value="Data.wcListView_InDSet.rowNumber" />
            <Param Name="pagenumber" Parent="URL" SROffset="1"
                Value="Data.wcListView_InDSet.pagenumber" />
        </Params>
    </SendParams>
    <ReceiveParams>
        <Params>
            <Param Parent="BODY" Value="Data.wcListView_OutDSetnews.news" XPath="$.news" />
            <Param Parent="BODY" Value="Data.wcListView_OutDSetnews.title" XPath="$.news.title" />
            <Param Parent="BODY" Value="Data.wcListView_OutDSetnews.id" XPath="$.news.id" />
            <Param Parent="BODY" Value="Data.wcListView_OutDSetnews.type" XPath="$.news.type" />
            <Param Parent="BODY" Value="Data.wcListView_OutDSetnews.description"
                XPath="$.news.description" />
            <Param Parent="BODY" Value="Data.wcListView_OutDSetnews.id1" XPath="$.news.image.id" />
            <Param Parent="BODY" Value="Data.wcListView_OutDSetnews.url" XPath="$.news.image.url" />
        </Params>
    </ReceiveParams>
    <CustomRequestHeaders></CustomRequestHeaders>
    <ONSYNDICATIONSUCCESS script="Project_wcListView_OnSyndicationSuccess(e);" />
</WEBCLIENT>
