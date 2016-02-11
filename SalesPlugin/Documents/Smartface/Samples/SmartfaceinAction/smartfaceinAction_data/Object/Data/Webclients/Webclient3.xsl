<WEBCLIENT AddUserInfo="0" ContentType="json"
    HostUrl="https://api.twitter.com/1.1/statuses/user_timeline.json?count=${count}&amp;screen_name=smartface_io"
    ID="CD0225BA-CAB8-4055-9C2B-04682307F74A" MaxReceiveCount="0" Method="0" Name="wcTwitter"
    NotifyUpdateStatus="1" RequestRawBodyContentType="application/xml" RequestRawBodyEnabled="0"
    TimeOutInterval="60" WriteMode="1">
    <SendParams></SendParams>
    <ReceiveParams>
        <Params>
            <Param Parent="BODY" Value="" XPath="plain" />
            <Param Parent="BODY" Value="Data.wcTwitter_OutDSetwcTwitter.wcTwitter" XPath="$" />
        </Params>
    </ReceiveParams>
    <CustomRequestHeaders>
        <Params>
            <Param Name="Authorization" Value="Data.wcTwitter_RequestHeadersDSet.Authorization" />
        </Params>
    </CustomRequestHeaders>
    <ONSYNDICATIONSUCCESS script="Project_wcTwitter_OnSyndicationSuccess(e);" />
</WEBCLIENT>
