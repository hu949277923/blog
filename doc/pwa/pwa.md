【 PWA 】 参考链接：https://blog.csdn.net/qq_19238139/article/details/77531191

        今天开始 Research 一个新的前端技术，PWA（ 全称：Progressive Web App ）也就是说这是个渐进式的网页应用程序。这个技术的呢是 Google 公司于2015 年提出的，2016 年 6 月才推广的项目。针对这一项技术目前在国外似乎已经很流行了，目前应用这项技术最火热的应用是在印度（ 大家或许会疑惑为什么是在印度最流行呢吧，下文中会告诉大家哦 ），既然 PWA 这项技术在国外已经非常的流行了，那么在国内或许会不远了（ Angular 5 中新增的功能中，重点在于能够更轻松的构建渐进式网络应用程序，也就是 PWA 了。作为Google 和 mozilla 的产物，肯定会越来越重视啦 ）我引用一下关于PWA技术的一篇最早的博客文中的一句话吧： “ escaping tabs without losing our soul “（ 翻译一下哈：逃避选项卡而不丢失我们的灵魂 ）。

        官网上给出 PWA 的宣传是 ： Reliable （ 可靠的 ）、Fast（ 快速的 ）、Engaging（ 可参与的 ）（ 官网：https://developers.google.com/web/progressive-web-apps/     ps：需要翻墙哦  ）。简单的说一下这三个特性：

                 Reliable ： 为什么他是可靠的呢，当用户从手机主屏幕启动时，不用考虑网络的状态是如何，都可以立刻加载出 PWA。

      
                                                                

                 Fast：这一点应该都很熟悉了吧，站在用户的角度来考虑，如果一个网页加载速度有点长的话，那么我们会放弃浏览该网站，所以 PWA 在这一点上做的很好，他的加载速度是很快的。



                                                              
                                    
        
                 Engaging ： PWA 可以添加在用户的主屏幕上，不用从应用商店进行下载（ 似乎省了下载流量哦！）他们通过网络应用程序 Manifest file 提供类似于 APP 的使用体验（ 在 Android 上可以设置全屏显示哦，由于 Safari 支持度的问题，所以在 IOS 上并不可以 ），并且还能进行 ”推送通知” 。

                                               


         这三个主特性似乎能解释我在前言中所说的 ”在印度最流行“ 。小小的普及一下，根据2016年第三季度的 IDC统计数据显示，印度的智能手机的出货量达到了3亿，同时也超过了美国，成为了全球第二大只能手机市场。皮尤斯数据报告 2015 年曾统计过“全球智能手机拥有率”。印度只有 17% 的人口用的是智能手机。虽然绝大部分人有手机用，但为非智能机，另有 22% 的人没有手机。针对印度的移动网络流量来说，网络状况是非常不佳的，根据16年的 GSMA 印度移动经济报告显示，网络覆盖率为34.8% 。主要集中在城镇，印度广大的农村还处于网络盲区，城乡数字化鸿沟很大。在印度，2G/3G 最主流，且 2G 占比还远高于 3G ， 所以针对这种状态来说，PWA 技术最适合不过了。 

        在我对 PWA 技术的研究中发现 PWA 其中有三个关键的技术：

                Service Worker（ ps：就叫做服务工厂吧，文章最后一条 URL 是 SW 的全面进阶，可以研究研究哦 ）
               
                Manifest （应用清单）

                Push Notification（推送通知）

        下面我一一介绍着三个关键的技术：

                Service Worker（ 以下用SW来代替 ） ：

                SW 是什么呢？这个是离线缓存文件。我们 PWA 技术使用的就是它！SW 是浏览器在后台独立于网页运行的脚本，它打开了通向不需要网页或用户交互的功能的大门，因为使用了它，才会有的那个 Reliable 特性吧，SW 作用于 浏览器于服务器之间，相当于一个代理服务器（ 用一张图来表示一下他的位置 ）。
                        
                                          

                为什么会用到 SW 呢？原声 App 拥有Web应用通常所不具备的富离线体验，定时默认更新，消息推送等功能，而 SW 标准让在 Web App 上拥有这些功能成为可能！
                跟 SW 相同的 API 还有 App Cache ，为什么不使用它呢？ App Cache 是有局限性的，比如说：它很容易得解决 single web page application （ 单页面应用 ）的问题，但是在多页面应用上会很麻烦， SW 解决的这个 App Cache 的缺点！

         下面我简单而详细的说一下 SW ：

              1、 浏览器支持
                        
                        顺便带一句：目前只能在 HTTPS 环境下才能使用SW，因为SW 的权利比较大，能够直接截取和返回用户的请求，所以要考虑一下安全性问题。

                         

               2、事件机制
                                                    
               3、 功能
                     SW的功能还是比较逆天的！
                     
后台数据的同步
从其他域获取资源请求
接受计算密集型数据的更新，多页面共享该数据
客户端编译与依赖管理
后端服务的hook机制
根据URL模式，自定义模板
性能优化
消息推送
定时默认更新
地理围栏
        
               4、 生命周期

                           
            
                      Parsed （ 解析成功 ）： 首次注册 SW 时，浏览器解决脚本并获得入口点，如果解析成功，就可以访问到 SW 注册对象，在这一点中我们需要在 HTML 页面中添加一个判断，判断该浏览器是否支持 SW 。
    
                      Installing （ 正在安装 ）：SW 脚本解析完成之后，浏览器会尝试进行安装，installing 中 install 事件被执行，如果其中有 event.waitUntil ( ) 方法，则 installing 事件会一直等到该方法中的 Promise 完成之后才会成功，如果 Promise 被拒绝，则安装失败，SW会进入 Redundant（ 废弃 ）状态。

                      Installed / Waiting （安装成功/等待中）：如果安装成功，SW 将会进入这个状态。

                      Activating （ 正在激活 ）：处于 waiting 状态的 SW 发生以下情况，将会进入 activating 状态中：
                                
                              当前已无激活状态的 worker 、 SW脚本中的 self.skipWaiting（）方法被调用 （ ps： self 是 SW 中作用于全局的对象，这个方法根据英文翻译过来也能明白什么意思啦，跳过等待状态 ）、用户已关闭 SW 作用域下的所有页面，从而释放了当前处于激活状态的 worker、超出指定时间，从而释放当前处于激活状态的 worker 

                      Activated （ 激活成功 ）：该状态，其成功接收了 document 全面控制的激活态 worker 。

                      Redundant （ 废弃 ）：这个状态的出现时有原因的，如果 installing 事件失败或者 activating 事件失败或者新的 SW 替换其成为激活态 worker 。installing 事件失败和 activating 事件失败的信息我们可以在 Chrome 浏览器的 DevTools 中查看：
    
                                                         （ ps：我这个是正常的状态下的 ，错误的话会有 error 提示的 ）
                        

              5、主要依赖

                    SW 作为现代浏览器的高级特性，依赖于 fetch 、promise 、CacheStorage、Cache、等浏览器的基础能力， Cache 提供了 Request / Response 对象对的存储机制。CacheStorage 则提供了存储 Cache 对象的机制。

                                                    

            6、安全性问题

                 跨域请求支持：  SW 可以拦截它作用域内的所有请求，跨域资源也不例外，但是浏览器默认对跨域资源发起的是 no-cors 请求，得到的 response 是 opaque 的， 所以会导致我们无法判断跨域请求是否成功，以便进行缓存，因此我们需要修改 fetch 请求头部信息，添加 mode：’cors’ 标记。

                （ 名词解释一下喽，这部分知识是关于 fetch API 的，想了解更多的同学，自行搜索相关的知识哈 ）
                no-cors：该模式允许来自 CDN 的脚本、其他域的图片和其他一些跨域资源，但是首先有个前提条件，就是请求的 method 只能是 HEAD 、GET 、POST 。此外，如果 ServiceWorkers 拦截了这些请求，它不能随意添加或者修改除这些之外 Header 属性。第三，JS 不能访问 Response 对象中的任何属性，这确保了跨域时 ServiceWorkers 的安全和隐私信息泄漏问题。
                opaque：Response 对象中 type 属性的值 ， 在 ‘no-cors’ 模式下请求了跨域资源，依靠服务端来做限制。

            分享给大家一个 SW 全面进阶的博文：

        Manifest （ 应用清单 ）

              Web App Manifest 是一个 W3C 规范，它定义了一个基于 JSON 的 List 。Manifest 在 PWA 中的作用有：
                   
                  能够将你浏览的网页添加到你的手机屏幕上
                  在 Android 上能够全屏启动，不显示地址栏 （ 由于 Iphone 手机的浏览器是 Safari ，所以不支持哦）
                  控制屏幕 横屏 / 竖屏 展示
                  定义启动画面
                  可以设置你的应用启动是从主屏幕启动还是从 URL 启动
                  可以设置你添加屏幕上的应用程序图标、名字、图标大小

        Push Notification （ 消息通知 ）

              Push 和 Notification 是两个不同的功能，涉及到两个 API 。

              Notification 是浏览器发出的通知消息。
            
              Push 和 Notification 的关系，Push：服务器端将更新的信息传递给 SW ，Notification： SW 将更新的信息推送给用户。

        缺点：
                
              1、浏览器的支持度问题，尤其是 Safari 浏览器，这样就会导致我们在 IOS 系统手机上没办法体验 PWA 。（ 谁让 ‘ 果果 ’ 不是开源的呢 ）
                
              2、根据国情来看哈，目前 Native App 的使用用户都已经习惯了，虽然会下载一下，但是现在 WiFi 到处都是了，毕竟 WiFi 的普及太快了。让用户使用 PWA 来替代 Native App 短时间会不适应的。
            
              3、消息推送问题，PWA的消息推送走的是 GCM（ FCM ）通道。而国内 Google 是无法访问的。（只能翻墙了，但是工信部已经禁止使用 VPN 了。） 
              总体来说：
                    Google 的技术在国内推进比较缓慢，所以 PWA 在国内的发展是有多困难吧。

【 Demo 】

           首先呢，我们用到有 Node 和 Ngrok 。Node 的使用以及安装我就不说啦，作为一名前端开发工程师肯定会使用的啦。不会使用也米有关系啦，我们有度娘呢，Ngrok 的安装以及使用我就直接共享一个URl吧：http://blog.csdn.net/tomcat_2014/article/details/68944066（ ps：我就偷懒一下 ）
           对了，我使用的是 Mac 本（我司配的啦），所以我接下来的流程和截图都是 Mac 本上的。
           
           我们先创建一个关于 PWA 的项目文件夹，
                   
                进入文件夹下我们准备一张 120x120的图片一张，作为我们的应用程序图标。
                创建一个 index.html  文件
                创建一个 index.css 文件
                创建一个 manifest.json 文件
                创建一个 sw.js 文件
                利用终端，安装一下 http-server 服务
                下面我们看一下每个文件中的代码是什么吧：

                index.html
       
        
                index.css
                 

                manifest.json
                    
                    short_name: “ " 用户主屏幕上的应用名字
                    display : “standalone"  设置启动样式，让您的网络应用隐藏浏览器的 URL 地址栏
                    start_url : “/“ 设置启动网址，如果不提供的话，默认是使用当前页面
                    theme_color : “ “  用来告知浏览器用什么颜色来为地址栏等 UI 元素着色
                    background_color: “ ” 设置启动页面的背景颜色
                    icons：””  就是添加到主屏幕之后的图标

                

                sw.js

                处理静态缓存，首先定义需要缓存的路径，以及需要缓存的静态文件的列表。
                借助 SW 注册完成安装 SW 时，抓取资源写入缓存中。使用了一个方法那就是 self.skipWaiting( ) 这个方法我在前边介绍的时候也说了，为了在页面更新的过程当中，新的 SW 脚本能够立刻激活和生效。

                
                
                 处理动态缓存，我们监听 fetch 事件，在 caches 中去 match 事件的 request ，如果 response 不为空的话就返回 response ，最后返回 fetch 请求，在 fetch 事件中我们可以手动生成 response 返回给页面。
                 更新静态资源，缓存的资源会跟随着版本的更新会过期的，所以会根据缓存的字符串名称清除旧缓存。在新安装的 SW 中通过调用 self.clients.claim( ) 取得页面的控制权，这样之后打开页面都会使用版本更新的缓存。旧的 SW 脚本不在控制着页面之后会被停止，也就是会进入 Redundant 期。
 
                

                以上截图中最左侧是我文件下的列表喽，下面我们来运行一下，终端启动 http-server 服务，我们以关闭缓存的方式进行启动。

                

                接下来我们使用 ngrok 这个工具，进行内网穿透。在上边启动 http-server 服务的时候我们使用默认的端口号 8080 。所以我们在 ngrok 中我们绑定 端口 8080 。输入命令 ： ./ngrok http 8080 之后我们看一下。（记得再打开一个终端哦，在另一个终端中进行操作）

                

                我们看到绿色的字母 online 表示内网穿透成功了，我们看最后一个 Forwarding     https:// 的，因为我们在上边介绍了，SW 的权利比较大，为了保证信息的安全性，我们使用 https 协议来进行访问。我们把它复制下来在 chrom 浏览器中打开，-> 符号后边的就不用复制了哈。（ 每个人的 ‘隧道’ 都是不一样的哦，这一点同学们可以在 ngrok 官网中进行查询哦 ）。
                 我们打开 chrom 的调试工具，打开 application ，点击 service workers 之后我们会发现 sw.js 脚本已经存到了 SW 中 。

                

                我们打开 Network 刷新页面一下，看看，我们的页面资源来自 SW 而不是其他的地方，在 Console 中也打印出了我们在 index.html 中判断的语句，浏览器支持就会打印出这一句话哦。

                

                接下来我们断网操作，在 Application 中给 Offline 打上对勾就行啦。然后刷新页面，我们仍然能看到之前的页面，原因就是我们在上图看到，他的资源是从 SW 上获得到的。当我们第一次打开这个页面的时候，Resopnse 对象被存到了 Cache Storage （ 定义在 SW 规范中 ，相关资料请同学们自行查询啦 ）中，我们看下图：

                
                
                通过存放到 Cache Storage 中，我们下次访问的时候如果是弱网或者断网的情况下，就可以不走网络请求，而直接就能将本地缓存的内容展示给用户，优化用户的弱网及断网体验。

                这个时候肯定会有同学在想，如果内容更新了，那么页面展示的内容是新内容呢还是旧内容呢？下面我们操作一下，打开 index.html 文件，我们在 body 中添加一个 p 标签 ，然后回到页面刷新。

                
                

                我们看到，页面上的内容并没有显示出我刚刚添加的那个 p 标签。这说明了，我们拿到的数据还是从 Cache Storage 中获取到的，Cache Storage中的内容并没有更新，那么我们怎么才能让我刚刚添加的那个 p 标签显示出来呢。
                我们打开 sw.js 脚本文件，我们修改一下 cacheStorageKey。

                
                
                我们关闭一下浏览器，然后再次打开该网址，页面出现了我们刚刚添加的那个 p 标签。我们再看一下 Cache Storage 中的缓存名字，已经被修改。

                

【 总结 】
        
        总结一下吧，在研究这个 PWA 的过程中，搜索了相关的一大部分知识，就怕自己的脑洞不够大。感觉 PWA 涉及到的 API 比较多。要想研究透彻 PWA 还需要研究它所涉及到的 API ，慢慢研究吧。npm 中已经有这个包了哦。想真实的对 PWA 做深入研究的同学，可以应用到实际项目中。（ 我感觉，会有很多坑 ），不过呢，作为一名前端开发工程师，对于这种技术研究来说，当然是有坑就补，没坑挖坑补。我会在接下来的日子中，抽出时间对 PWA 进行深入研究的。当然也会共享给大家。

参考URL（ 有的是需要翻墙的哦 ）：

                https://developers.google.com/web/progressive-web-apps/
                http://foio.github.io/service-worker-cache/
                http://bubkoo.com/2015/05/08/introduction-to-fetch/
                http://www.dongcoder.com/detail-437618.html
                http://imweb.io/topic/56592b8a823633e31839fc01
                https://75team.com/post/lifecycle.html
                https://segmentfault.com/a/1190000006061528
                https://www.w3ctech.com/topic/866
                http://dongcoder.com/detail-397355.html
                https://www.npmjs.com/package/web-pwa
                https://www.villainhr.com/tag/SW