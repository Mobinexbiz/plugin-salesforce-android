<?xml version="1.0" ?>
<SMARTFACEPROJECT xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="SmartfaceProjectPlayerUpdated.xsd">
    <PROJECT AppID="1701667150" AppName="Smartface Demo" CID="0" Dpi="326" FacebookAppSecret=""
        FacebookAppUID="" SID="-1" ScreenH="1136" ScreenW="640" TwitterConsumerKey=""
        TwitterConsumerSecret="" Ver="1.1.4" WS="http://www.smartface.biz"
        dateLastResourceUpdated="010101000000">
        <MAPAPI AndroidMapKey="" IosGeocodingKey="" />
        <ADMOB AdMobPublisherId="" AdMobTestUsage="0" />
        <DEVICEORIENTATIONS DeviceOrientationLandscapeLeft="0" DeviceOrientationLandscapeRight="0"
            DeviceOrientationPortrait="1" DeviceOrientationUpsideDown="0" />
        <ANDROIDPRODUCTKEY AndroidProductKey="" />
        <ANDROIDSENDERID AndroidSenderID="" />
        <APPLICATIONCACHESIZE ApplicationCacheSize="50" />
        <APPLICATIONNAME ApplicationName="Smartface" />
        <NAVIGATIONBARUPDATE NavigationBarUpdate="1" />
        <RESOURCES></RESOURCES>
        <LOGGING LogDebug="0" LogError="0" LogServerUrl="" LogWarning="0" MaxLogSize="30"></LOGGING>
        <PAGES>
            <PG BgClr="ffffff" BgPicName="defaultsplash.png" BgTparent="0" Blr="0"
                DefFoc="00000000-0000-0000-0000-100000000001" EnableTabBar="0"
                ID="00000000-0000-0000-0000-000000000002" IsSplashScreen="1" IsTemplatePage="0"
                LockOrientation="0" Nm="SplashPage" PageOrientation="0" ShwActionBar="0"
                ShwNavigationBar="0" ShwStatusBar="0" SldEase="0" SldEffect="0"
                StatusBarTransparent="0" TemplatePageID="00000000-0000-0000-0000-100000000001"
                TouchEnabled="1" Type="0" UsesTemplatePage="0">
                <EDGE H="1136" W="640" X="0" Y="0" />
                <POS Pos="3" SMode="2" />
                <BODY>
                    <CONTAINER AutoSize="0" ID="18B0EC3F-CC01-4138-9CFF-1A79FCB2F53A"
                        Nm="Container1" TouchEnabled="1" Vsb="1">
                        <LCT Anc="3" H="1000%" W="1000%" X="0%" Y="0%" Z="0" />
                        <Layout LayoutAlignment="0" LayoutHorizontalGap="-1" LayoutOrientation="0"
                            LayoutType="0" LayoutVerticalGap="-1" />
                        <STYLE BgClr="eff3ef" BgTparent="1" BrClr="313031" BrW="0" />
                        <ITEMS>
                            <PIC Alpha="100" ID="30018EB8-AE70-481E-854D-47DF98F03296" Nm="Image1"
                                TouchEnabled="1" Vsb="1">
                                <LCT Anc="3" H="635%" W="1000%" X="0%" Y="0%" Z="0" />
                                <POS EnableCache="1" EnableScroll="0" EnableZoom="0" Pos="15"
                                    SMode="1" />
                                <DATA>
                                    <PRM Nm="Bind" Val="resources://smfsplash.png" />
                                </DATA>
                            </PIC>
                        </ITEMS>
                    </CONTAINER>
                </BODY>
                <EVENTS>
                    <ONSHOW script="SplashPage_Self_OnShow(e);" />
                </EVENTS>
            </PG>
        </PAGES>
    </PROJECT>
</SMARTFACEPROJECT>