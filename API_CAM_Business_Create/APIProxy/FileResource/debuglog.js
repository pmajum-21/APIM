//Array Variables containing list of variables to be read
var reqvars = ["request.url", "request.verb", "request.headers.names", "request.queryparams.names", "request.querystring", "request.content", "request.formparams.names", "request.formstring"];
var resvars = ["target.host", "target.ip", "target.port", "response.status.code", "response.reason.phrase", "response.headers.names", "response.formparams.names", "response.content"];
var errvars = ["error.state", "error.status.code", "error.reason.phrase", "error.message", "error.content"];

//Function to Read Request Variables
function getreqVars(reqvars) {

    for (i = 0; i < reqvars.length; i++) {

        var tem = context.getVariable(reqvars[i]);

        if (reqvars[i] == "request.headers.names" && tem != null) {
            var hed = tem.toString().replace("[", "").replace("]", "");
            var hed_arr = hed.split(",");
            for (j = 0; j < hed_arr.length; j++)
                context.getVariable("request.header." + hed_arr[j].toString().trim() + ".values");
        }

        if (reqvars[i] == "request.formparams.names" && tem != null) {
            var form = tem.toString().replace("[", "").replace("]", "");
            var form_arr = form.split(",");
            for (j = 0; j < form_arr.length; j++)
                context.getVariable("request.formparam." + form_arr[j].toString().trim() + ".values");
        }

        if (reqvars[i] == "request.queryparams.names" && tem != null) {
            var qry = tem.toString().replace("[", "").replace("]", "");
            var qry_arr = qry.split(",");
            for (j = 0; j < qry_arr.length; j++)
                context.getVariable("request.queryparam." + qry_arr[j].toString().trim() + ".values");
        }
    }

}
//Function to Read Response Variables
function getresVars(resvars) {

    for (i = 0; i < resvars.length; i++) {

        var tem = context.getVariable(resvars[i]);

        if (resvars[i] == "response.headers.names" && tem != null) {
            var hed = tem.toString().replace("[", "").replace("]", "");
            var hed_arr = hed.split(",");
            for (j = 0; j < hed_arr.length; j++)
                context.getVariable("response.header." + hed_arr[j].toString().trim() + ".values");
        }

        if (resvars[i] == "response.formparams.names" && tem != null) {
            var form = tem.toString().replace("[", "").replace("]", "");
            var form_arr = form.split(",");
            for (j = 0; j < form_arr.length; j++)
                context.getVariable("response.formparam." + form_arr[j].toString().trim() + ".values");
        }
    }

}

//Function to Read Error Variables
function geterrVars(errvars) {

    for (i = 0; i < errvars.length; i++) {

        var tem = context.getVariable(errvars[i]);

    }
}

getreqVars(reqvars);
getresVars(resvars);
geterrVars(errvars);