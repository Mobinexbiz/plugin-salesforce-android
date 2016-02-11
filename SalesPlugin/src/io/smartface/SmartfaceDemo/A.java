package io.smartface.SmartfaceDemo;

import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.View;
import android.widget.Button;

import io.smartface.salestest.R;
import io.smartface.salestest.SMFSFManager;


public class A extends ActionBarActivity {

    Button bn;
    SMFSFManager mySales;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mySales = new SMFSFManager();
        mySales.setConnectedAppCallbackUri("sfdc://success.");
        mySales.setConnectedAppId("3MVG9Rd3qC6oMalX_wW9inaa1Yg2RY6_mZmaETwHUfNqYYuiOLJTSGooYzTzobXP9EuXdxyUBarf2qxotoGN5");
        String[] OauthScopes = {"api"};
        mySales.setAuthScopes(OauthScopes);
        mySales.launch(A.this);


        bn = (Button) findViewById(R.id.button);
        bn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {


                //mySales.logout(A.this);


                //SFRestAPI my = new SFRestAPI();

                mySales.requestForQuery("SELECT Name FROM Account");
                //mySales.requestForRest(0, "/services/apexrest/v1/INF_AccountSearch", "{\"downloadAccounts\":\"001U000000f4AJlIAM\"}");


            }
        });

    }

}
