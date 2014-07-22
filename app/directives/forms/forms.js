'use strict';

/* Directives */

angular.module('backAnd.directives')
  .directive('myform', function ($compile) {
    return {
      restrict: 'A',
      transclude : false,
      template: '\
      <form role="form">\
        <div class="form-group" ng-repeat="field in formSchema.fields">\
          <label>{{field.name}}\
            <input type="text" class="form-control" placeholder="type: {{field.type}}">\
          </label>\
        </div>\
        <div>\
          <ul class="nav nav-tabs" role="tablist">\
            <li ng-repeat="category in formSchema.categories" ng-class="{active : $first}">\
              <a href="#{{category.catName}}" ng-click="toggleActive(category.catName, $event)" role="tab" data-toggle="tab">{{category.catName}}</a>\
            </li>\
          </ul>\
          <div class="tab-content">\
            <div class="tab-pane fade in" ng-class="{active : $first}" ng-repeat="category in formSchema.categories" id="{{category.catName}}">\
              <div class="form-group" ng-repeat="field in category.fields">\
                 <label>{{field.name}}\
                  <input type="text" class="form-control" placeholder="type: {{field.type}}">\
                </label>\
              </div>\
            </div>\
          </div>\
        </div>\
        <button type="submit" class="btn btn-default">Submit</button>\
      </form>',
      link: function(scope, el, attrs) {
        var formSchema = {
          fields: [],
          categories: {}
        };
    
        function processForm(data) {
          angular.forEach(data.fields, function (field) {
            var f = {
              name : field.name,
              type : field.type
            };
            if (field.categoryName) {
              if (!formSchema.categories[field.categoryName]) {
                formSchema.categories[field.categoryName] = {
                  catName : field.categoryName,
                  fields: []
                };
              }
              formSchema.categories[field.categoryName].fields.push(f);
            } else {
              formSchema.fields.push(f);
            }
          })
        };
        processForm(test1);
        console.log(formSchema)
        scope.formSchema = formSchema;
        scope.toggleActive = function(ind, $event){
          $event.preventDefault();
          el.find('a[href="#' + ind + '"]').tab('show');
        };
      }
    };
  });

var test1 = {
    "__metadata": {
        "id": "17"
    },
    "columnsInDialog": 2,
    "rowView": "Tabs",
    "securityWorkspace": 0,
    "captionText": "test1",
    "name": "test1",
    "openDialoginMaximaize": false,
    "newButtonName": "New",
    "dataDisplayType": "Table",
    "allowAdd": true,
    "overrideinheritable": false,
    "databaseName": "test1",
    "newButtonDescription": "",
    "filterType": "Excel",
    "allowEdit": true,
    "editableTableName": "test1",
    "editButtonName": "Edit",
    "chooselayout": "BasicGrid",
    "sortingType": "Excel",
    "allowDuplicate": true,
    "cardsItemHeight(px)": "",
    "cardsItemWidth(px)": "",
    "chooseSkin": "DefaultSkin",
    "columnsWidth": "BasedOnColumnWidth",
    "applytheskintoalltheviews": false,
    "rowHeight[Pixels]": "",
    "editButtonDescription": "",
    "allowDelete": true,
    "columnDisplayinTitle": "מרכז_רפואי",
    "enableTableDisplay": false,
    "controller": "Home",
    "multiSelect": false,
    "duplicateButtonName": "Duplicate",
    "rowsperPage": 20,
    "enableCardsDisplay": false,
    "openSingleRow": false,
    "viewOwner": "Developer,Admin,View Owner",
    "indexAction": "Index",
    "duplicateButtonDescription": "",
    "permanentFilter": "",
    "hideFilter": false,
    "enablePreviewDisplay": false,
    "checkListAction": "CheckList",
    "promoteButtonName": "Promote",
    "hideSearchBox": false,
    "defaultSort": "",
    "groupFilterDisplayLabel": false,
    "openasPopup": true,
    "refreshOnClose": false,
    "setLanguageAction": "SetLanguage",
    "cachetheTab": true,
    "promoteButtonDescription": "",
    "hideToolbar": false,
    "createAction": "Create",
    "addItemsButtonName": "",
    "background1": "",
    "hasChildrenRow": false,
    "hideFooter": false,
    "refreshAction": "Refresh",
    "addItemsButtonDescription": "",
    "text1": "",
    "denyCreate": "",
    "sendEmail": true,
    "createOnlyAction": "CreateOnly",
    "deleteButtonName": "Delete",
    "background2": "",
    "useOrderForCreate": false,
    "denyEdit": "",
    "openFilterasCollapsed": true,
    "editAction": "Edit",
    "insertButtonName": "Insert",
    "text2": "",
    "useOrderForEdit": false,
    "denyDelete": "",
    "hoverBackground": "",
    "hoverText": "",
    "duplicateAction": "Duplicate",
    "exportToExcel": true,
    "border": "",
    "denyRead": "",
    "editRichAction": "EditRich",
    "importFromExcel": true,
    "background": "",
    "getRichAction": "GetRich",
    "text": "",
    "saveHistory": true,
    "editOnlyAction": "EditOnly",
    "showPrint": false,
    "getJsonViewAction": "GetJsonView",
    "gridEditable": true,
    "getSelectListAction": "GetSelectList",
    "gridEditableEnabled": true,
    "inlineAddingDialogAction": "InlineAddingDialog",
    "inlineEditingDialogAction": "InlineEditingDialog",
    "applythecolordesigntoalltheviews": false,
    "inlineAddingCreateAction": "InlineAddingCreate",
    "inlineEditingEditAction": "InlineEditingEdit",
    "inlineDuplicateDialogAction": "InlineDuplicateDialog",
    "inlineDuplicateAction": "InlineDuplicate",
    "inlineSearchDialogAction": "InlineSearchDialog",
    "deleteAction": "Delete",
    "deleteSelectionAction": "DeleteSelection",
    "editSelectionAction": "EditSelection",
    "filterAction": "Filter",
    "allFilterValuesAction": "GetAllFilterValues",
    "uploadAction": "Upload",
    "exportToCsvAction": "ExportToCsv",
    "printAction": "Print",
    "autoCompleteAction": "AutoComplete",
    "autoCompleteController": "Home",
    "anotherRowLinkText": "",
    "anotherRowLinkFunction": "",
    "javaScripts": "",
    "styleSheets": "",
    "showUpDown": false,
    "historyNotifyList": "",
    "maxSubGridHeight": 400,
    "reloadPage": "Ajax",
    "treeType": "Adjacency",
    "treeViewName": "",
    "treeRelatedFieldName": "",
    "treeRoot": "",
    "workFlowStepsFieldName": "",
    "columnsInDialogPerCategory": "",
    "showDisabledSteps": false,
    "baseView": "",
    "duplicationMethod": "Shallow",
    "duplicateMessage": "",
    "counterBaseTableName": "",
    "containerGraphic": "",
    "notificationMessageKey": "",
    "notificationSubjectKey": "",
    "isImageTable": false,
    "ordinalColumnName": "",
    "rowColorColumnName": "",
    "imageSrcColumnName": "Image",
    "groupingFields": "",
    "cacheinMemory": false,
    "addItemsFieldName": "",
    "createDateColumnName": "CreateDate",
    "modifiedDateColumnName": "ModifiedDate",
    "createdByColumnName": "CreateUserId",
    "modifiedByColumnName": "ModifiedUserId",
    "baseViewName": "",
    "displayType": "Table",
    "to": "",
    "cC": "",
    "subject": "",
    "message": "",
    "xmlElement": "",
    "systemView": false,
    "createOverrideByWorkflow": false,
    "deleteOverrideByWorkflow": false,
    "inAddItemsaddAllItems": false,
    "fields": [{
        "__metadata": {
            "id": "161"
        },
        "columnSpanInDialog": 1,
        "displayName": "monkeys",
        "overrideinheritable": false,
        "textAlignment": "inherit",
        "name": "monkeys",
        "internalName": "FK_test1_monkeys_Children",
        "formCSSClass": "",
        "order": 40,
        "displayColumnTitle": true,
        "databaseName": "Id",
        "hideFilter": false,
        "orderForCreate": 40,
        "required": false,
        "type": "MultiSelect",
        "excludeInInsert": false,
        "disableInFilter": false,
        "orderForEdit": 40,
        "hideInCreate": true,
        "excludeInUpdate": false,
        "displayFormat": "Grid",
        "delete": false,
        "relatedViewName": "monkeys",
        "hideInEdit": true,
        "defaultValue": "",
        "formula": "",
        "disableInEdit": false,
        "enableSort": "",
        "defaultFilter": "",
        "hideHyperlink": true,
        "donotDisplayinGrid": true,
        "disableInCreate": false,
        "minimumValue": 0,
        "displayinPreview": false,
        "gridEditable": true,
        "includeInDuplicate": false,
        "maximumValue": 0,
        "disableInDuplicate": false,
        "denyCreate": "",
        "tooltip": "",
        "searchable": false,
        "displayinCards": false,
        "denyEdit": "",
        "width(pixels)": 200,
        "groupFilterDisplayLabel": "Inherit",
        "addhorizontallineabouvethefield": false,
        "seperatorTitle": "",
        "denyRead": "",
        "preLabel": "",
        "postLabel": "",
        "editInTableView": false,
        "gridCSSClass": "d_fieldContainer",
        "inlineSearch": false,
        "groupFilterWidth": 80,
        "fieldType": "Children",
        "allowDuplication": true,
        "preventCacheonTab": false,
        "hideInDerivation": false,
        "attributesNames": "",
        "exportToXml": true,
        "specialColumn": "None",
        "dependenciesData": "",
        "isUnique": false,
        "mustMatchAutocomplete": "StartsWith",
        "autocompleteFilter": false,
        "containerGraphicField": "",
        "nullString": "",
        "hideInTableMobile": false,
        "updateParentInGrid": false,
        "minWidth": 80,
        "import": true,
        "tableCellMinWidth": 0,
        "labelContentLayout": "Horizontal",
        "refresh": false,
        "uniqueforDuplicate": false,
        "partFromUniqueIndex": false,
        "saveHistory": true,
        "searchFilter": "",
        "format": "",
        "cloneViewName": "",
        "originalFieldName": "FK_test1_monkeys_Children",
        "originalParentRelatedFieldName": "",
        "autoIncrement": false,
        "autoIncrementSequanceName": "",
        "dependencyFieldName": "",
        "insideTriggerFieldName": "",
        "checkListInTableLimit": 0,
        "xmlElement": "",
        "counterInitiated": false,
        "subGridExport": false,
        "subGridPlacement": 0,
        "subgridInstructions": "To add new {0}, Please fill the required fields and save it first",
        "updateParent": "No",
        "counter": false,
        "includeinWordtemplate": false,
        "relatedParentFieldName": "FK_test1_monkeys_Parent",
        "categoryName": ""
    }, {
        "__metadata": {
            "id": "146"
        },
        "columnSpanInDialog": 1,
        "displayName": "Id",
        "overrideinheritable": false,
        "textAlignment": "inherit",
        "name": "Id",
        "internalName": "Id",
        "formCSSClass": "",
        "order": 1010,
        "displayColumnTitle": true,
        "databaseName": "Id",
        "hideFilter": false,
        "orderForCreate": 10,
        "required": true,
        "type": "Numeric",
        "excludeInInsert": true,
        "disableInFilter": false,
        "orderForEdit": 10,
        "hideInCreate": false,
        "excludeInUpdate": true,
        "displayFormat": "None",
        "delete": false,
        "booleanHtmlControlType": "Check",
        "advancedFilter": true,
        "relatedViewName": "",
        "hideInEdit": false,
        "defaultValue": "",
        "textHtmlControlType": "Text",
        "formula": "",
        "disableInEdit": false,
        "enableSort": true,
        "defaultFilter": "",
        "radioOrientation": "Horizontal",
        "hideHyperlink": true,
        "donotDisplayinGrid": true,
        "disableInCreate": false,
        "minimumValue": -2147483648,
        "displayinPreview": false,
        "rich": false,
        "gridEditable": true,
        "includeInDuplicate": true,
        "maximumValue": 2147483647,
        "browserAutocomplete": true,
        "disableInDuplicate": false,
        "denyCreate": "",
        "tooltip": "",
        "searchable": true,
        "displayinCards": false,
        "denyEdit": "",
        "width(pixels)": 200,
        "richeditongrid": true,
        "groupFilterDisplayLabel": "Inherit",
        "addhorizontallineabouvethefield": false,
        "longtextlength(letters)": 50,
        "seperatorTitle": "",
        "denyRead": "",
        "preLabel": "",
        "postLabel": "",
        "editInTableView": false,
        "gridCSSClass": "d_fieldContainer",
        "inlineSearch": false,
        "enumType": "",
        "groupFilterWidth": 80,
        "fieldType": "Column",
        "autocompleteColumn": "",
        "autocompleteTable": "",
        "autocompleteSql": "",
        "dropDownDisplayField": "",
        "hideInDerivation": false,
        "dropDownValueField": "",
        "trimSpaces": true,
        "custom": false,
        "dropDownParentViewName": "",
        "multiValueAdditionals": "",
        "encrypt": false,
        "encrypted": false,
        "certificateName": "",
        "symmetricKeyName": "",
        "symmetricKeyAlgorithm": "DES",
        "attributesNames": "",
        "exportToXml": true,
        "specialColumn": "None",
        "dependenciesData": "",
        "isUnique": false,
        "mustMatchAutocomplete": "StartsWith",
        "autocompleteFilter": false,
        "containerGraphicField": "",
        "nullString": "",
        "hideInTableMobile": false,
        "updateParentInGrid": false,
        "minWidth": 0,
        "import": true,
        "tableCellMinWidth": 0,
        "labelContentLayout": "Horizontal",
        "refresh": false,
        "uniqueforDuplicate": false,
        "partFromUniqueIndex": false,
        "saveHistory": true,
        "searchFilter": "",
        "format": "",
        "cloneViewName": "",
        "originalFieldName": "Column",
        "originalParentRelatedFieldName": "",
        "autoIncrement": false,
        "autoIncrementSequanceName": "",
        "categoryName": "General"
    }, {
        "__metadata": {
            "id": "147"
        },
        "columnSpanInDialog": 1,
        "displayName": "מרכז רפואי",
        "overrideinheritable": false,
        "textAlignment": "inherit",
        "name": "מרכז_רפואי",
        "internalName": "מרכז_רפואי",
        "formCSSClass": "",
        "order": 1020,
        "displayColumnTitle": true,
        "databaseName": "מרכז_רפואי",
        "hideFilter": false,
        "orderForCreate": 20,
        "required": false,
        "type": "ShortText",
        "excludeInInsert": false,
        "disableInFilter": false,
        "orderForEdit": 20,
        "hideInCreate": true,
        "excludeInUpdate": false,
        "displayFormat": "None",
        "delete": false,
        "booleanHtmlControlType": "Check",
        "advancedFilter": true,
        "relatedViewName": "",
        "hideInEdit": true,
        "defaultValue": "",
        "textHtmlControlType": "Text",
        "formula": "",
        "disableInEdit": false,
        "enableSort": true,
        "defaultFilter": "",
        "radioOrientation": "Horizontal",
        "hideHyperlink": true,
        "donotDisplayinGrid": true,
        "disableInCreate": false,
        "minimumValue": 0,
        "displayinPreview": false,
        "rich": false,
        "gridEditable": true,
        "includeInDuplicate": true,
        "maximumValue": 0,
        "browserAutocomplete": true,
        "disableInDuplicate": false,
        "denyCreate": "",
        "tooltip": "",
        "searchable": true,
        "displayinCards": false,
        "denyEdit": "",
        "width(pixels)": 200,
        "richeditongrid": true,
        "groupFilterDisplayLabel": "Inherit",
        "addhorizontallineabouvethefield": false,
        "longtextlength(letters)": 50,
        "seperatorTitle": "",
        "denyRead": "",
        "preLabel": "",
        "postLabel": "",
        "editInTableView": false,
        "gridCSSClass": "d_fieldContainer",
        "inlineSearch": false,
        "enumType": "",
        "groupFilterWidth": 80,
        "fieldType": "Column",
        "autocompleteColumn": "",
        "autocompleteTable": "",
        "autocompleteSql": "",
        "dropDownDisplayField": "",
        "hideInDerivation": false,
        "dropDownValueField": "",
        "trimSpaces": true,
        "custom": false,
        "dropDownParentViewName": "",
        "multiValueAdditionals": "",
        "encrypt": false,
        "encrypted": false,
        "certificateName": "",
        "symmetricKeyName": "",
        "symmetricKeyAlgorithm": "DES",
        "attributesNames": "",
        "exportToXml": true,
        "specialColumn": "None",
        "dependenciesData": "",
        "isUnique": false,
        "mustMatchAutocomplete": "StartsWith",
        "autocompleteFilter": false,
        "containerGraphicField": "",
        "nullString": "",
        "hideInTableMobile": false,
        "updateParentInGrid": false,
        "minWidth": 0,
        "import": true,
        "tableCellMinWidth": 0,
        "labelContentLayout": "Horizontal",
        "refresh": false,
        "uniqueforDuplicate": false,
        "partFromUniqueIndex": false,
        "saveHistory": true,
        "searchFilter": "",
        "format": "",
        "cloneViewName": "",
        "originalFieldName": "Column",
        "originalParentRelatedFieldName": "",
        "autoIncrement": false,
        "autoIncrementSequanceName": "",
        "categoryName": "General"
    }, {
        "__metadata": {
            "id": "148"
        },
        "columnSpanInDialog": 1,
        "displayName": "ישוב",
        "overrideinheritable": false,
        "textAlignment": "inherit",
        "name": "ישוב",
        "internalName": "ישוב",
        "formCSSClass": "",
        "order": 1030,
        "displayColumnTitle": true,
        "databaseName": "ישוב",
        "hideFilter": false,
        "orderForCreate": 30,
        "required": false,
        "type": "ShortText",
        "excludeInInsert": false,
        "disableInFilter": false,
        "orderForEdit": 30,
        "hideInCreate": true,
        "excludeInUpdate": false,
        "displayFormat": "None",
        "delete": false,
        "booleanHtmlControlType": "Check",
        "advancedFilter": true,
        "relatedViewName": "",
        "hideInEdit": true,
        "defaultValue": "",
        "textHtmlControlType": "Text",
        "formula": "",
        "disableInEdit": false,
        "enableSort": true,
        "defaultFilter": "",
        "radioOrientation": "Horizontal",
        "hideHyperlink": true,
        "donotDisplayinGrid": true,
        "disableInCreate": false,
        "minimumValue": 0,
        "displayinPreview": false,
        "rich": false,
        "gridEditable": true,
        "includeInDuplicate": true,
        "maximumValue": 0,
        "browserAutocomplete": true,
        "disableInDuplicate": false,
        "denyCreate": "",
        "tooltip": "",
        "searchable": true,
        "displayinCards": false,
        "denyEdit": "",
        "width(pixels)": 200,
        "richeditongrid": true,
        "groupFilterDisplayLabel": "Inherit",
        "addhorizontallineabouvethefield": false,
        "longtextlength(letters)": 50,
        "seperatorTitle": "",
        "denyRead": "",
        "preLabel": "",
        "postLabel": "",
        "editInTableView": false,
        "gridCSSClass": "d_fieldContainer",
        "inlineSearch": false,
        "enumType": "",
        "groupFilterWidth": 80,
        "fieldType": "Column",
        "autocompleteColumn": "",
        "autocompleteTable": "",
        "autocompleteSql": "",
        "dropDownDisplayField": "",
        "hideInDerivation": false,
        "dropDownValueField": "",
        "trimSpaces": true,
        "custom": false,
        "dropDownParentViewName": "",
        "multiValueAdditionals": "",
        "encrypt": false,
        "encrypted": false,
        "certificateName": "",
        "symmetricKeyName": "",
        "symmetricKeyAlgorithm": "DES",
        "attributesNames": "",
        "exportToXml": true,
        "specialColumn": "None",
        "dependenciesData": "",
        "isUnique": false,
        "mustMatchAutocomplete": "StartsWith",
        "autocompleteFilter": false,
        "containerGraphicField": "",
        "nullString": "",
        "hideInTableMobile": false,
        "updateParentInGrid": false,
        "minWidth": 0,
        "import": true,
        "tableCellMinWidth": 0,
        "labelContentLayout": "Horizontal",
        "refresh": false,
        "uniqueforDuplicate": false,
        "partFromUniqueIndex": false,
        "saveHistory": true,
        "searchFilter": "",
        "format": "",
        "cloneViewName": "",
        "originalFieldName": "Column",
        "originalParentRelatedFieldName": "",
        "autoIncrement": false,
        "autoIncrementSequanceName": "",
        "categoryName": "General"
    }, {
        "__metadata": {
            "id": "149"
        },
        "columnSpanInDialog": 1,
        "displayName": "עיר",
        "overrideinheritable": false,
        "textAlignment": "inherit",
        "name": "עיר",
        "internalName": "עיר",
        "formCSSClass": "",
        "order": 1040,
        "displayColumnTitle": true,
        "databaseName": "עיר",
        "hideFilter": false,
        "orderForCreate": 40,
        "required": false,
        "type": "ShortText",
        "excludeInInsert": false,
        "disableInFilter": false,
        "orderForEdit": 40,
        "hideInCreate": true,
        "excludeInUpdate": false,
        "displayFormat": "None",
        "delete": false,
        "booleanHtmlControlType": "Check",
        "advancedFilter": true,
        "relatedViewName": "",
        "hideInEdit": true,
        "defaultValue": "",
        "textHtmlControlType": "Text",
        "formula": "",
        "disableInEdit": false,
        "enableSort": true,
        "defaultFilter": "",
        "radioOrientation": "Horizontal",
        "hideHyperlink": true,
        "donotDisplayinGrid": true,
        "disableInCreate": false,
        "minimumValue": 0,
        "displayinPreview": false,
        "rich": false,
        "gridEditable": true,
        "includeInDuplicate": true,
        "maximumValue": 0,
        "browserAutocomplete": true,
        "disableInDuplicate": false,
        "denyCreate": "",
        "tooltip": "",
        "searchable": true,
        "displayinCards": false,
        "denyEdit": "",
        "width(pixels)": 200,
        "richeditongrid": true,
        "groupFilterDisplayLabel": "Inherit",
        "addhorizontallineabouvethefield": false,
        "longtextlength(letters)": 50,
        "seperatorTitle": "",
        "denyRead": "",
        "preLabel": "",
        "postLabel": "",
        "editInTableView": false,
        "gridCSSClass": "d_fieldContainer",
        "inlineSearch": false,
        "enumType": "",
        "groupFilterWidth": 80,
        "fieldType": "Column",
        "autocompleteColumn": "",
        "autocompleteTable": "",
        "autocompleteSql": "",
        "dropDownDisplayField": "",
        "hideInDerivation": false,
        "dropDownValueField": "",
        "trimSpaces": true,
        "custom": false,
        "dropDownParentViewName": "",
        "multiValueAdditionals": "",
        "encrypt": false,
        "encrypted": false,
        "certificateName": "",
        "symmetricKeyName": "",
        "symmetricKeyAlgorithm": "DES",
        "attributesNames": "",
        "exportToXml": true,
        "specialColumn": "None",
        "dependenciesData": "",
        "isUnique": false,
        "mustMatchAutocomplete": "StartsWith",
        "autocompleteFilter": false,
        "containerGraphicField": "",
        "nullString": "",
        "hideInTableMobile": false,
        "updateParentInGrid": false,
        "minWidth": 0,
        "import": true,
        "tableCellMinWidth": 0,
        "labelContentLayout": "Horizontal",
        "refresh": false,
        "uniqueforDuplicate": false,
        "partFromUniqueIndex": false,
        "saveHistory": true,
        "searchFilter": "",
        "format": "",
        "cloneViewName": "",
        "originalFieldName": "Column",
        "originalParentRelatedFieldName": "",
        "autoIncrement": false,
        "autoIncrementSequanceName": "",
        "categoryName": "General"
    }],
    "categories": [{
        "name": "General",
        "columnsInDialog": 2
    }, {
        "name": "monkeys",
        "columnsInDialog": 2
    }]
};
