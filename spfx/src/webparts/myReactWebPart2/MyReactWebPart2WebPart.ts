import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import MyReactWebPart2 from './components/MyReactWebPart2'; // Import your React component

export interface IMyWebPartProps {
  description: string;
}

export default class MyReactWebPart extends BaseClientSideWebPart<IMyWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMyWebPartProps> = React.createElement(
      MyReactWebPart2,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "My Web Part"
          },
          groups: [
            {
              groupName: "Settings",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Description"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
