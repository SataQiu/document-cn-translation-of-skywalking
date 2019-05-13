(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{237:function(t,e,a){"use strict";a.r(e);var _=a(0),n=Object(_.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("agent发行包包含在Apache"),a("a",{attrs:{href:"http://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方发行版"),a("OutboundLink")],1),t._v("中。最新的agent包结构如下。")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("SkyWalking agent已经对多种中间件、框架和库进行了支持。\n通过"),a("router-link",{attrs:{to:"./Supported-list.html"}},[t._v("支持列表")]),t._v("可以了解对哪些进行了支持以及支持了哪些版本。\n如果插件被标注为"),a("strong",[t._v("可选²")]),t._v("，请到"),a("a",{attrs:{href:"#optional-plugins"}},[t._v("可选的插件")]),t._v(" 章节去学习如何激活插件。")],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("目前，我们提供了如下的可选插件。")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"./agent-optional-plugins/Spring-annotation-plugin.html"}},[t._v("追踪Spring注解的bean")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"./agent-optional-plugins/Oracle-Resin-plugins.html"}},[t._v("追踪Oracle和Resin")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"./agent-optional-plugins/trace-ignore-plugin.html"}},[t._v("通过指定endpoint模式来过滤trace")])],1),t._v(" "),a("li",[t._v("Gson序列化库")]),t._v(" "),a("li",[t._v("Lettuce 5.x(JRE1.8+)")]),t._v(" "),a("li",[t._v("Zookeeper 3.4.x。 将此插件定为可选插件的原因在于：会生成大量的业务不相关的trace，对agent和后端产生了额外的负载。并且，这些trace数据可能仅仅是心跳数据。")]),t._v(" "),a("li",[a("router-link",{attrs:{to:"./Customize-enhance-trace.html"}},[t._v("自定义增强")]),t._v(" 基于描述文件对方法进行追踪，而不是通过写插件或修改源代码。")],1)]),t._v(" "),t._m(19),t._v(" "),a("ul",[a("li",[t._v("可通过设置系统属性覆盖配置文件中的配置。请见"),a("router-link",{attrs:{to:"./Setting-override.html"}},[t._v("配置覆盖")]),t._v(".")],1),t._v(" "),a("li",[t._v("可使用gRPC TLS将后端连接起来。请见"),a("router-link",{attrs:{to:"./TLS.html"}},[t._v("open TLS")])],1),t._v(" "),a("li",[t._v("通过不同的SkyWalking服务实现对大集群的监控。使用"),a("router-link",{attrs:{to:"./Namespace.html"}},[t._v("命令空间")]),t._v("隔离上下文传播。")],1),t._v(" "),a("li",[t._v("如果后端开启了"),a("router-link",{attrs:{to:"./../../backend/backend-token-auth.html"}},[t._v("token鉴权")]),t._v("，客户端可设置"),a("router-link",{attrs:{to:"./Token-auth.html"}},[t._v("token")]),t._v("。")],1),t._v(" "),a("li",[t._v("应用工具包。应用工具包，是Skywalking提供的一些库的集合。通过这些库，可以将你的应用同Skywalking agent联系起来。\n"),a("ul",[a("li",[t._v("如果你想使用OpenTracing的Java API，可以试试"),a("router-link",{attrs:{to:"./Opentracing.html"}},[t._v("兼容OpenTracing的Skywalking tracer")]),t._v(". 更多细节可以查看http://opentracing.io")],1),t._v(" "),a("li",[t._v("如果你想在你的日志中打印trace上下文（比如traceId），选择你使用的日志框架"),a("router-link",{attrs:{to:"./Application-toolkit-log4j-1.x.html"}},[t._v("log4j")]),t._v(",\n"),a("router-link",{attrs:{to:"./Application-toolkit-log4j-2.x.html"}},[t._v("log4j2")]),t._v(", "),a("router-link",{attrs:{to:"./Application-toolkit-logback-1.x.html"}},[t._v("logback")])],1),t._v(" "),a("li",[t._v("如果你想使用注解或者SkyWalking本地API读取trace上下文，试一下"),a("router-link",{attrs:{to:"./Application-toolkit-trace.html"}},[t._v("SkyWalking manual APIs")]),t._v("吧。")],1),t._v(" "),a("li",[t._v("如果你想通过手动的方式实现trace跨线程传递，可以使用"),a("router-link",{attrs:{to:"./Application-toolkit-trace-cross-thread.html"}},[t._v("跨线程传递API")]),t._v("。")],1)])]),t._v(" "),a("li",[t._v("如果你想指定你的agent.config文件的路径，请见"),a("router-link",{attrs:{to:"./Specified-agent-config.html"}},[t._v("通过系统属性设置配置文件路径")])],1)]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("SkyWalking java agent支持插件的开发以扩展"),a("router-link",{attrs:{to:"./Supported-list.html"}},[t._v("支持列表")]),t._v("。如果你想开发java agent插件，请阅读"),a("router-link",{attrs:{to:"./../../../guides/Java-Plugin-Development-Guide.html"}},[t._v("插件开发指南")]),t._v("。")],1),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("如果你对插件的兼容性测试或agent的性能感兴趣，可以阅读下面的测试报告。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/SkyAPMTest/agent-integration-test-report",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plugin Test"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://skyapmtest.github.io/Agent-Benchmarks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java Agent Performance Test"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"安装java-agent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装java-agent","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装Java agent")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("在SkyWalking发行包中找到"),a("code",[t._v("agent")]),t._v("文件夹")]),t._v(" "),a("li",[t._v("配置"),a("code",[t._v("config/agent.config")]),t._v("中的"),a("code",[t._v("agent.service_name")]),t._v("。可以是任意的英文字符串。")]),t._v(" "),a("li",[t._v("配置"),a("code",[t._v("config/agent.config")]),t._v("中的"),a("code",[t._v("collector.backend_service")]),t._v("。默认指向"),a("code",[t._v("127.0.0.1:11800")]),t._v("，表示仅作用于本地后端。")]),t._v(" "),a("li",[t._v("JVM参数中添加"),a("code",[t._v("-javaagent:/path/to/skywalking-package/agent/skywalking-agent.jar")]),t._v("，并且确保这个参数在"),a("code",[t._v("-jar")]),t._v("参数之前。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("+-- agent\n    +-- activations\n         apm-toolkit-log4j-1.x-activation.jar\n         apm-toolkit-log4j-2.x-activation.jar\n         apm-toolkit-logback-1.x-activation.jar\n         ...\n    +-- config\n         agent.config  \n    +-- plugins\n         apm-dubbo-plugin.jar\n         apm-feign-default-http-9.x.jar\n         apm-httpClient-4.x-plugin.jar\n         .....\n    skywalking-agent.jar\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("启动你的应用。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"支持的中间件、框架和库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的中间件、框架和库","aria-hidden":"true"}},[this._v("#")]),this._v(" 支持的中间件、框架和库")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"高级特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级特性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("所有的插件都在"),e("code",[this._v("/plugins")]),this._v("文件夹下。当某个插件的jar包在此文件夹下，表示此插件已被激活；从这个文件夹下移除后，表示插件不可用.")]),this._v(" "),e("li",[this._v("默认的日志输出文件夹为"),e("code",[this._v("/logs")]),this._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"关于安装java-agent的faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于安装java-agent的faq","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于安装java agent的FAQ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Linux Tomcat 7, Tomcat 8"),e("br"),this._v("\n修改"),e("code",[this._v("tomcat/bin/catalina.sh")]),this._v("的第一行。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('CATALINA_OPTS="$CATALINA_OPTS -javaagent:/path/to/skywalking-agent/skywalking-agent.jar"; export CATALINA_OPTS\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Windows Tomcat 7, Tomcat 8"),e("br"),this._v("\n修改"),e("code",[this._v("tomcat/bin/catalina.bat")]),this._v("的第一行。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('set "CATALINA_OPTS=-javaagent:/path/to/skywalking-agent/skywalking-agent.jar"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("JAR包\n使用命令行启动应用时，添加"),e("code",[this._v("-javaagent")]),this._v("参数。比如：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("java -javaagent:/path/to/skywalking-agent/skywalking-agent.jar -jar yourApp.jar\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"agent的可配置属性列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#agent的可配置属性列表","aria-hidden":"true"}},[this._v("#")]),this._v(" Agent的可配置属性列表")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这里是"),e("code",[this._v("agent/config/agent.config")]),this._v("中支持的属性列表。")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("agent.namespace")])]),t._v(" "),a("td",[t._v("命名空间，用于隔离跨进程传播的header。如果进行了配置，header将为"),a("code",[t._v("HeaderName:Namespace")]),t._v(".")]),t._v(" "),a("td",[t._v("未设置")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.service_name")])]),t._v(" "),a("td",[t._v("在SkyWalking UI中展示的服务名。5.x版本对应Application，6.x版本对应Service。 建议：为每个服务设置个唯一的名字，服务的多个服务实例为同样的服务名")]),t._v(" "),a("td",[a("code",[t._v("Your_ApplicationName")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.sample_n_per_3_secs")])]),t._v(" "),a("td",[t._v("负数或0表示不采样，默认不采样。SAMPLE_N_PER_3_SECS表示每3秒采样N条。")]),t._v(" "),a("td",[t._v("未设置")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.authentication")])]),t._v(" "),a("td",[t._v("鉴权是否开启取决于后端的配置，可查看application.yml的详细描述。对于大多数的场景，需要后端对鉴权进行扩展。目前仅实现了基本的鉴权功能。")]),t._v(" "),a("td",[t._v("未设置")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.span_limit_per_segment")])]),t._v(" "),a("td",[t._v("单个segment中的span的最大个数。通过这个配置项，Skywalking可评估应用程序内存使用量。")]),t._v(" "),a("td",[t._v("未设置")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.ignore_suffix")])]),t._v(" "),a("td",[t._v("如果这个集合中包含了第一个span的操作名，这个segment将会被忽略掉。")]),t._v(" "),a("td",[t._v("未设置")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.is_open_debugging_class")])]),t._v(" "),a("td",[t._v("如果为true，skywalking会将所有经Instrument转换过的类文件保存到"),a("code",[t._v("/debugging")]),t._v("文件夹下。Skywalking团队会要求你提供这些类文件以解决兼容性问题。")]),t._v(" "),a("td",[t._v("未设置")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.active_v2_header")])]),t._v(" "),a("td",[t._v("是否默认使用v2版本的header。")]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.instance_uuid")])]),t._v(" "),a("td",[t._v("实例id。skywalking会将实例id相同的看做一个实例。如果为空，skywalking agent会生成一个32位的uuid。")]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("agent.active_v1_header")])]),t._v(" "),a("td",[t._v("是否默认使用v1版本的header。")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("collector.grpc_channel_check_interval")])]),t._v(" "),a("td",[t._v("检查grpc的channel状态的时间间隔。")]),t._v(" "),a("td",[a("code",[t._v("30")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("collector.app_and_service_register_check_interval")])]),t._v(" "),a("td",[t._v("检查应用和服务的注册状态的时间间隔。")]),t._v(" "),a("td",[a("code",[t._v("3")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("collector.backend_service")])]),t._v(" "),a("td",[t._v("接收skywalking trace数据的后端地址")]),t._v(" "),a("td",[a("code",[t._v("127.0.0.1:11800")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("logging.level")])]),t._v(" "),a("td",[t._v("日志级别。默认为debug。")]),t._v(" "),a("td",[a("code",[t._v("DEBUG")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("logging.file_name")])]),t._v(" "),a("td",[t._v("日志文件名")]),t._v(" "),a("td",[a("code",[t._v("skywalking-api.log")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("logging.dir")])]),t._v(" "),a("td",[t._v('日志目录。默认为空串，表示使用"system.out"输出日志。')]),t._v(" "),a("td",[a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("logging.max_file_size")])]),t._v(" "),a("td",[t._v("日志文件的最大大小。当日志文件大小超过这个数，归档当前的日志文件，将日志写入到新文件。")]),t._v(" "),a("td",[a("code",[t._v("300 * 1024 * 1024")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("jvm.buffer_size")])]),t._v(" "),a("td",[t._v("收集JVM信息的buffer的大小。")]),t._v(" "),a("td",[a("code",[t._v("60 * 10")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("buffer.channel_size")])]),t._v(" "),a("td",[t._v("buffer的channel大小。")]),t._v(" "),a("td",[a("code",[t._v("5")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("buffer.buffer_size")])]),t._v(" "),a("td",[t._v("buffer的大小")]),t._v(" "),a("td",[a("code",[t._v("300")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dictionary.service_code_buffer_size")])]),t._v(" "),a("td",[t._v("The buffer size of application codes and peer")]),t._v(" "),a("td",[a("code",[t._v("10 * 10000")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dictionary.endpoint_name_buffer_size")])]),t._v(" "),a("td",[t._v("The buffer size of endpoint names and peer")]),t._v(" "),a("td",[a("code",[t._v("1000 * 10000")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("plugin.mongodb.trace_param")])]),t._v(" "),a("td",[t._v("如果为true，记录所有访问MongoDB的参数信息。默认为false，表示仅记录操作名，不记录参数信息。")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("plugin.elasticsearch.trace_dsl")])]),t._v(" "),a("td",[t._v("如果为true，记录所有访问ElasticSearch的DSL信息。默认为false。")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("plugin.springmvc.use_qualified_name_as_endpoint_name")])]),t._v(" "),a("td",[t._v("如果为true，endpoint的name为方法的全限定名，而不是请求的URL。默认为false。")]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("plugin.toolit.use_qualified_name_as_operation_name")])]),t._v(" "),a("td",[t._v("如果为true，operation的name为方法的全限定名，而不是给定的operation name。默认为false。")]),t._v(" "),a("td",[a("code",[t._v("false")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"可选的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可选的插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 可选的插件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Java agent的所有插件都是可插拔的。在agent或第三方仓库的"),e("code",[this._v("optional-plugins")]),this._v(" 文件夹下提供了可选的插件。\n想要使用可选插件，你需要将对应插件移动到"),e("code",[this._v("/plugins")]),this._v("文件夹下。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"高级特性-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级特性-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级特性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"插件开发指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件开发指南","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件开发指南")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试")])}],!1,null,null,null);e.default=n.exports}}]);