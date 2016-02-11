package io.smartface.salestest;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    Button bn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        bn = (Button) findViewById(R.id.button);
        bn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {


                SMFSFManager mySales = new SMFSFManager();
                mySales.setConnectedAppCallbackUri("sfdc://success.");
                mySales.setConnectedAppId("3MVG9Rd3qC6oMalX_wW9inaa1Yg2RY6_mZmaETwHUfNqYYuiOLJTSGooYzTzobXP9EuXdxyUBarf2qxotoGN5");
                String[] OauthScopes = {"api"};
                mySales.setAuthScopes(OauthScopes);
                mySales.launch(MainActivity.this);
            }
        });

    }


}
