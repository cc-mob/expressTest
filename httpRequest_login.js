var http = require("http");



var body =  '<?xml version="1.0" encoding="UTF-8"?>'+
        '<request>'+
        '<transaction>'+
        '<id>skcc.om.EXTIF.EXTIFMgr#svcs30001</id>'+
        '</transaction>'+
        '<attributes/>'+
        '<dataSet>'+
        '<fields>'+
        '<sys_key><![CDATA[AbPouitAqpTjLVhMrsBR+w==]]></sys_key>'+
        '<svc_id><![CDATA[svcs30001]]></svc_id>'+
        '<os_cust_co_id><![CDATA[5]]></os_cust_co_id>'+
		'<lgin_id><![CDATA[05578]]></lgin_id>'+
		'<lgin_pwd><![CDATA[1]]></lgin_pwd>'+
		'<locale><![CDATA[utf-8]]></locale>'+
        '</fields>'+
        '</dataSet>'+
        '</request>';


var postRequest = {
    host: "203.235.210.94",
    path: "/web/xml.xmd",
    port: 9280,
    method: "POST",
    headers: {
        'Cookie': "cookie",
        'Content-Type': 'text/xml',
        'Content-Length': Buffer.byteLength(body)
    }
};

var buffer = "";

var req = http.request(postRequest, function( res )    {

   console.log( res.statusCode );
   var buffer = "";
   res.on( "data", function( data ) { buffer = buffer + data; } );
   res.on( "end", function( data ) {
        console.log( buffer );
        var DOMParser = require('xmldom').DOMParser;
        var parser = new DOMParser();
        var xml = parser.parseFromString(buffer, "text/xml");
        var jsonText = JSON.stringify(xmlToJson(xml));
       // console.log(jsonText);



   } );

});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.write( body );
req.end();



// Changes XML to JSON
function xmlToJson(xml) {

	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};
