//This code was originally written as a Tableua tutorial for WDCs
//Our team modified the schema and url based on our data and Flask App structure

(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {

        var cols = [{
            id: "school",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "sex",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "age",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "address",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "famsize",
            alias: "family size",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Pstatus",
            alias: "parent cohabitation status",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Medu",
            alais: "mother's education",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Fedu",
            alias: "father's education",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Mjob",
            alias: "mother's job",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "Fjob",
            alias: "father's job",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "reason", 
            dataType: tableau.dataTypeEnum.string
        }, {
           id: "guardian",
           dataType: tableau.dataTypeEnum.string 
        }, {
            id: "traveltime",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "studytime",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "failures",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "schoolsup", 
            alias: "Extra educational support",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "famsup",
            alias: "family educatational support",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "paid",
            alias: "extra paid classes",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "activities",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "nursery",
            alias: "attended nursery school",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "internet", 
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "romantic",
            alias: "has a romantic partner",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "famrel",
            alais: "quality of family relations",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "freetime",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "goout", 
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Dalc",
            alias: "weekday alcohol consumption",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "Walc",
            alias: "weekend alcohol cunsumption",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "health",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "absences",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "G1",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "G2",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "G3",
            dataType: tableau.dataTypeEnum.int
        }];
    
        var tableSchema = {
            id: "StudentData",
            alias: "Reading Scores",
            columns: cols
        };
    
        schemaCallback([tableSchema]);

    };

    myConnector.getData = function (table, doneCallback) {
        $.getJSON("https://htp-proj3.herokuapp.com/portuguese", function(resp) {
        var feat = resp,
            tableData = [];

        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            tableData.push({
                "school": feat[i].school,
                "sex": feat[i].sex,
                "age": feat[i].age,
                "address": feat[i].address,
                "famsize": feat[i].famsize,
                "Pstatus": feat[i].Pstatus,
                "Medu": feat[i].Medu,
                "Fedu": feat[i].Fedu,
                "Mjob": feat[i].Mjob,
                "Fjob": feat[i].Fjob,
                "reason": feat[i].reason, 
                "guardian": feat[i].guardian,
                "traveltime": feat[i].traveltime,
                "studytime": feat[i].studytime,
                "failures": feat[i].failures,
                "schoolsup": feat[i].schoolsup, 
                "famsup": feat[i].famsup,
                "paid": feat[i].paid,
                "activities": feat[i].activities,
                "nursery": feat[i].nursery,
                "internet": feat[i].internet, 
                "romantic": feat[i].romantic,
                "famrel": feat[i].famrel,
                "freetime": feat[i].freetime,
                "goout": feat[i].goout, 
                "Dalc": feat[i].Dalc,
                "Walc": feat[i].Walc,
                "health": feat[i].health,
                "absences": feat[i].absences,
                "G1": feat[i].G1,
                "G2": feat[i].G2,
                "G3": feat[i].G3
            });
        }

        table.appendRows(tableData);
        doneCallback();
    });
    };

    tableau.registerConnector(myConnector);

    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "Student Success Data";
            tableau.submit();
        });
    });

})();