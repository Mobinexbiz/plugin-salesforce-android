/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/
package org.apache.cordova;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;
import java.util.List;

@Deprecated // Deprecated in 3.1. To be removed in 4.0.
public class JSONUtils {
    public static List<String> toStringList(JSONArray array) throws JSONException {
        if (array == null) {
            return null;
        } else {
            List<String> list = new ArrayList<String>();

            for (int i = 0; i < array.length(); i++) {
                list.add(array.get(i).toString());
            }

            return list;
        }
    }
}