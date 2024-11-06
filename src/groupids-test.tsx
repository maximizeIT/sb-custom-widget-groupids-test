/*!
 * Copyright 2024, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement, useEffect, useState } from "react";
import { BlockAttributes, SBUserProfile, WidgetApi } from "widget-sdk";

/**
 * React Component
 */
export interface GroupidsTestProps extends BlockAttributes {
  widgetApi: WidgetApi;
}

export const GroupidsTest = ({ widgetApi }: GroupidsTestProps): ReactElement => {

  const [user, setUser] = useState<SBUserProfile | null>(null);

  useEffect(() => {
    widgetApi.getUserInformation().then((user) => {
      setUser(user);
    });
  }, []);

  return <>
    {
      user ? (
        <div>
          <p style={{ marginBottom: 10 }}>All user attributes:</p>
          <ul style={{ listStyle: "disc", marginLeft: 20, lineHeight: 1.25 }}>
            {Object.entries(user).map(([key, value]) => (
              <li key={key}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        </div>
      ) : null
    }
  </>
};