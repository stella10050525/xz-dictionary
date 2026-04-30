// 《藏海传》剧集数据
// 自动从剧情助记文本提取、去重生成

window.DRAMA_ZHZ = {
    id: 'zhz',
    title: '《藏海传》',
    subtitle: '跟着奴奴速记单词',
    cover: 'images/zhz.jpg',
    description: '故事基于电视剧藏海传，词汇覆盖到大学四六级。',
    totalEpisodes: 40,
    totalWords: 740,
    releasedEpisodes: 6,
    episodes: [
        {
            id: 1,
            title: '第 1 集',
            banner: 'images/zhz1集.png',
            wordCount: 135,
            words: [
                {id:1, en:"army", ph:"/ˈɑːrmi/", cn:"n. 军队", ex:'大雍<em>army</em>横扫冬夏国。'},
                {id:2, en:"surrender", ph:"/səˈrendər/", cn:"v. 投降", ex:'冬夏只能举国<em>surrender</em>。'},
                {id:3, en:"border", ph:"/ˈbɔːrdər/", cn:"n. 边境", ex:'大雍随即在<em>border</em>驻军。'},
                {id:4, en:"construct", ph:"/kənˈstrʌkt/", cn:"v. 建造", ex:'选定丹翠山<em>construct</em>封禅台。'},
                {id:5, en:"declare", ph:"/dɪˈkler/", cn:"v. 宣告", ex:'想向天下<em>declare</em>自己的功业。'},
                {id:6, en:"harsh", ph:"/hɑːrʃ/", cn:"adj. 严酷的", ex:'<em>harsh</em>寒冬降临，大雪漫天。'},
                {id:7, en:"frost", ph:"/frɔːst/", cn:"n. 霜", ex:'工匠们浑身是<em>frost</em>、手脚冻僵。'},
                {id:8, en:"supervise", ph:"/ˈsuːpərvaɪz/", cn:"v. 监督", ex:'蒯铎奉旨在此<em>supervise</em>工程。'},
                {id:9, en:"finish", ph:"/ˈfɪnɪʃ/", cn:"v. 完成", ex:'封禅台即将<em>finish</em>时突发事故。'},
                {id:10, en:"accident", ph:"/ˈæksɪdənt/", cn:"n. 事故", ex:'突发<em>accident</em>，工匠倒地。'},
                {id:11, en:"cave", ph:"/keɪv/", cn:"n. 洞穴", ex:'凿出一个冒出瘴气的<em>cave</em>。'},
                {id:12, en:"rope", ph:"/roʊp/", cn:"n. 绳索", ex:'蒯铎顺着<em>rope</em>下去。'},
                {id:13, en:"complex", ph:"/ˈkɑːmpleks/", cn:"adj. 复杂的", ex:'洞底是一座<em>complex</em>迷宫。'},
                {id:14, en:"carve", ph:"/kɑːrv/", cn:"v. 雕刻", ex:'癸玺上<em>carve</em>着蛇眉铜鱼纹路。'},
                {id:15, en:"evil", ph:"/ˈiːvl/", cn:"adj. 邪恶的", ex:'癸玺透着<em>evil</em>气息。'},
                {id:16, en:"inspect", ph:"/ɪnˈspekt/", cn:"v. 检查；细看", ex:'蒯铎上前想要<em>inspect</em>。'},
                {id:17, en:"revive", ph:"/rɪˈvaɪv/", cn:"v. 复活；苏醒", ex:'陪葬尸骸突然<em>revive</em>。'},
                {id:18, en:"roar", ph:"/rɔːr/", cn:"v. 咆哮；嘶吼", ex:'尸骸<em>roar</em>着围住众人。'},
                {id:19, en:"combat", ph:"/ˈkɑːmbæt/", cn:"n./v. 战斗；厮杀", ex:'一番<em>combat</em>后，封禅台坍塌。'},
                {id:20, en:"collapse", ph:"/kəˈlæps/", cn:"v. 坍塌；崩溃", ex:'封禅台轰然<em>collapse</em>。'},
                {id:21, en:"bustling", ph:"/ˈbʌslɪŋ/", cn:"adj. 热闹的；繁忙的", ex:'此时的京城十分<em>bustling</em>。'},
                {id:22, en:"suppress", ph:"/səˈpres/", cn:"v. 镇压；平定", ex:'庄芦隐<em>suppress</em>冬夏国。'},
                {id:23, en:"triumph", ph:"/ˈtraɪʌmf/", cn:"n./v. 胜利；凯旋", ex:'大军<em>triumph</em>归来。'},
                {id:24, en:"pour", ph:"/pɔːr/", cn:"v. 涌；倾泻", ex:'百姓<em>pour</em>上街头庆贺。'},
                {id:25, en:"talent", ph:"/ˈtælənt/", cn:"n. 天赋；才能", ex:'稚奴<em>talent</em>极高。'},
                {id:26, en:"dig", ph:"/dɪɡ/", cn:"v. 挖掘", ex:'他在府里<em>dig</em>了一条密道。'},
                {id:27, en:"lead", ph:"/liːd/", cn:"v. 通向；引导", ex:'密道<em>lead</em>直通厨房。'},
                {id:28, en:"tunnel", ph:"/ˈtʌnl/", cn:"n. 通道；隧道", ex:'一条秘密<em>tunnel</em>通向厨房。'},
                {id:29, en:"exhibit", ph:"/ɪɡˈzɪbɪt/", cn:"v. 展示；展览", ex:'等着父亲回来<em>exhibit</em>地道。'},
                {id:30, en:"delighted", ph:"/dɪˈlaɪtɪd/", cn:"adj. 欣喜的", ex:'稚奴十分<em>delighted</em>。'},
                {id:31, en:"squeeze", ph:"/skwiːz/", cn:"v. 挤；压榨", ex:'稚奴<em>squeeze</em>在人群里找父亲。'},
                {id:32, en:"climb", ph:"/klaɪm/", cn:"v. 攀爬", ex:'稚奴<em>climb</em>上了一辆马车。'},
                {id:33, en:"carriage", ph:"/ˈkærɪdʒ/", cn:"n. 马车；车厢", ex:'稚奴爬上了一辆<em>carriage</em>。'},
                {id:34, en:"rude", ph:"/ruːd/", cn:"adj. 粗鲁的；失礼的", ex:'稚奴知道这有些<em>rude</em>。'},
                {id:35, en:"deliberate", ph:"/dɪˈlɪbərət/", cn:"adj. 故意的；蓄意的", ex:'郡主认定他是<em>deliberate</em>的。'},
                {id:36, en:"whip", ph:"/wɪp/", cn:"n. 鞭子 v. 抽打", ex:'郡主扬起<em>whip</em>就打。'},
                {id:37, en:"bloody", ph:"/ˈblʌdi/", cn:"adj. 血红的；血腥的", ex:'留下<em>bloody</em>鞭痕。'},
                {id:38, en:"grab", ph:"/ɡræb/", cn:"v. 抓取；捡起", ex:'稚奴<em>grab</em>地上的石子还击。'},
                {id:39, en:"strike", ph:"/straɪk/", cn:"v. 击打；砸中", ex:'石子正好<em>strike</em>旁边的马车。'},
                {id:40, en:"frighten", ph:"/ˈfraɪtn/", cn:"v. 使惊吓", ex:'烈马<em>frighten</em>后失控了。'},
                {id:41, en:"crash", ph:"/kræʃ/", cn:"v. 猛撞；坠毁", ex:'烈马狠狠<em>crash</em>另一辆马车。'},
                {id:42, en:"overturn", ph:"/ˌoʊvərˈtɜːrn/", cn:"v. 翻倒；推翻", ex:'马车<em>overturn</em>，庄之行摔在地上。'},
                {id:43, en:"chaos", ph:"/ˈkeɪɑːs/", cn:"n. 混乱；混沌", ex:'长街上一片<em>chaos</em>。'},
                {id:44, en:"arrive", ph:"/əˈraɪv/", cn:"v. 到达", ex:'观风、狗剩及时<em>arrive</em>。'},
                {id:45, en:"flee", ph:"/fliː/", cn:"v. 逃跑；脱身", ex:'护着稚奴<em>flee</em>。'},
                {id:46, en:"bandage", ph:"/ˈbændɪdʒ/", cn:"n./v. 绷带；包扎", ex:'给稚奴<em>bandage</em>鞭伤。'},
                {id:47, en:"stagger", ph:"/ˈstæɡər/", cn:"v. 踉跄；蹒跚", ex:'庄之行<em>stagger</em>着找了过来。'},
                {id:48, en:"eagerly", ph:"/ˈiːɡərli/", cn:"adv. 急切地", ex:'稚奴<em>eagerly</em>问父亲的下落。'},
                {id:49, en:"return", ph:"/rɪˈtɜːrn/", cn:"v. 归来；返回", ex:'蒯铎为何未随大军<em>return</em>？'},
                {id:50, en:"affirm", ph:"/əˈfɜːrm/", cn:"v. 断言；肯定", ex:'庄之行<em>affirm</em>道：无人生还。'},
                {id:51, en:"bury", ph:"/ˈberi/", cn:"v. 埋葬", ex:'蒯监正早已<em>bury</em>于乱石之下。'},
                {id:52, en:"shake", ph:"/ʃeɪk/", cn:"v. 摇动；摇头", ex:'稚奴连连<em>shake</em>头。'},
                {id:53, en:"proudly", ph:"/ˈpraʊdli/", cn:"adv. 骄傲地", ex:'他<em>proudly</em>展示自己挖的地道。'},
                {id:54, en:"praise", ph:"/preɪz/", cn:"v./n. 夸赞；赞扬", ex:'父亲连声<em>praise</em>自己。'},
                {id:55, en:"qualified", ph:"/ˈkwɑːlɪfaɪd/", cn:"adj. 合格的；有资格的", ex:'能不能当个<em>qualified</em>五官分朔郎？'},
                {id:56, en:"dawn", ph:"/dɔːn/", cn:"n. 黎明；清晨", ex:'第二天<em>dawn</em>，月奴听到声音。'},
                {id:57, en:"groan", ph:"/ɡroʊn/", cn:"v./n. 呻吟", ex:'密道里有<em>groan</em>的声音。'},
                {id:58, en:"inform", ph:"/ɪnˈfɔːrm/", cn:"v. 告知；通知", ex:'月奴急忙<em>inform</em>母亲。'},
                {id:59, en:"enter", ph:"/ˈentər/", cn:"v. 进入", ex:'母亲<em>enter</em>密道。'},
                {id:60, en:"seal", ph:"/siːl/", cn:"v. 密封；封死", ex:'让稚奴立刻<em>seal</em>所有密道。'},
                {id:61, en:"punish", ph:"/ˈpʌnɪʃ/", cn:"v. 惩罚；责罚", ex:'母亲<em>punish</em>了观风、狗剩。'},
                {id:62, en:"stubborn", ph:"/ˈstʌbərn/", cn:"adj. 固执的；执拗的", ex:'母亲见稚奴很是<em>stubborn</em>。'},
                {id:63, en:"slap", ph:"/slæp/", cn:"n./v. 耳光；掌掴", ex:'扬手给了他一记<em>slap</em>。'},
                {id:64, en:"scold", ph:"/skoʊld/", cn:"v. 训斥；责骂", ex:'稚奴<em>scold</em>妹妹：你这个告状精！'},
                {id:65, en:"silent", ph:"/ˈsaɪlənt/", cn:"adj. 寂静的；沉默的", ex:'深夜很是<em>silent</em>。'},
                {id:66, en:"longing", ph:"/ˈlɔːŋɪŋ/", cn:"n. 思念；渴望", ex:'满心都是对父亲的<em>longing</em>。'},
                {id:67, en:"anxiety", ph:"/æŋˈzaɪəti/", cn:"n. 焦虑；不安", ex:'满心都是<em>anxiety</em>。'},
                {id:68, en:"figure", ph:"/ˈfɪɡjər/", cn:"n. 身影；人物", ex:'一道<em>figure</em>进来，正是蒯铎！'},
                {id:69, en:"hug", ph:"/hʌɡ/", cn:"v./n. 拥抱", ex:'稚奴赶紧上前<em>hug</em>父亲。'},
                {id:70, en:"husband", ph:"/ˈhʌzbənd/", cn:"n. 丈夫", ex:'见<em>husband</em>无恙，瞬间哽咽。'},
                {id:71, en:"choke", ph:"/tʃoʊk/", cn:"v. 哽咽；窒息", ex:'瞬间<em>choke</em>得说不出话。'},
                {id:72, en:"urgently", ph:"/ˈɜːrdʒəntli/", cn:"adv. 急迫地", ex:'蒯铎<em>urgently</em>说：快！收拾行装！'},
                {id:73, en:"pack", ph:"/pæk/", cn:"v. 打包；收拾", ex:'立刻<em>pack</em>，连夜离开！'},
                {id:74, en:"awaken", ph:"/əˈweɪkən/", cn:"v. 唤醒；叫醒", ex:'<em>awaken</em>月奴和所有弟子。'},
                {id:75, en:"delay", ph:"/dɪˈleɪ/", cn:"v./n. 耽搁；延迟", ex:'一刻也不能<em>delay</em>！'},
                {id:76, en:"explain", ph:"/ɪkˈspleɪn/", cn:"v. 解释", ex:'他来不及<em>explain</em>。'},
                {id:77, en:"urgency", ph:"/ˈɜːrdʒənsi/", cn:"n. 紧迫；急迫", ex:'眼里满是<em>urgency</em>。'},
                {id:78, en:"gather", ph:"/ˈɡæðər/", cn:"v. 聚集；集合", ex:'众人刚<em>gather</em>在院中。'},
                {id:79, en:"flame", ph:"/fleɪm/", cn:"n. 火焰；火光", ex:'<em>flame</em>冲天，蒯府已被包围！'},
                {id:80, en:"besiege", ph:"/bɪˈsiːdʒ/", cn:"v. 包围；围困", ex:'蒯府已被<em>besiege</em>！'},
                {id:81, en:"yard", ph:"/jɑːrd/", cn:"n. 院子", ex:'快！带妹妹去后<em>yard</em>！'},
                {id:82, en:"haystack", ph:"/ˈheɪstæk/", cn:"n. 草垛；干草堆", ex:'把月奴藏进<em>haystack</em>。'},
                {id:83, en:"kick", ph:"/kɪk/", cn:"v./n. 踢；踹", ex:'院门被一脚<em>kick</em>开。'},
                {id:84, en:"bodyguard", ph:"/ˈbɑːdiɡɑːrd/", cn:"n. 保镖；侍卫", ex:'身后跟着<em>bodyguard</em>瞿蛟。'},
                {id:85, en:"hand", ph:"/hænd/", cn:"v. 交出 n. 手", ex:'<em>hand</em>出来，可保你全家。'},
                {id:86, en:"stir", ph:"/stɜːr/", cn:"v. 搅动；激起", ex:'那枚能<em>stir</em>风云的癸玺。'},
                {id:87, en:"straighten", ph:"/ˈstreɪtn/", cn:"v. 挺直；弄直", ex:'蒯铎脊背<em>straighten</em>。'},
                {id:88, en:"safety", ph:"/ˈseɪfti/", cn:"n. 安全", ex:'此物关乎天下<em>safety</em>。'},
                {id:89, en:"ambitious", ph:"/æmˈbɪʃəs/", cn:"adj. 有野心的", ex:'绝不交于<em>ambitious</em>之人！'},
                {id:90, en:"sneer", ph:"/snɪr/", cn:"v./n. 冷笑；嘲笑", ex:'庄芦隐<em>sneer</em>一声。'},
                {id:91, en:"blade", ph:"/bleɪd/", cn:"n. 刀刃；刀片", ex:'<em>blade</em>光闪过，弟子倒下。'},
                {id:92, en:"fall", ph:"/fɔːl/", cn:"v. 倒下；落下", ex:'弟子接连<em>fall</em>在血泊中。'},
                {id:93, en:"blood", ph:"/blʌd/", cn:"n. 血", ex:'弟子倒在<em>blood</em>泊之中。'},
                {id:94, en:"mercy", ph:"/ˈmɜːrsi/", cn:"n. 怜悯；仁慈", ex:'声音没有半分<em>mercy</em>。'},
                {id:95, en:"search", ph:"/sɜːrtʃ/", cn:"v. 搜查；搜索", ex:'官兵<em>search</em>出了草垛中的月奴。'},
                {id:96, en:"drag", ph:"/dræɡ/", cn:"v. 拖拽；拉", ex:'将孩子<em>drag</em>到院中。'},
                {id:97, en:"threaten", ph:"/ˈθretn/", cn:"v. 威胁", ex:'用女儿的性命<em>threaten</em>蒯铎。'},
                {id:98, en:"yield", ph:"/jiːld/", cn:"v. 屈服；让步", ex:'蒯铎依旧不肯<em>yield</em>。'},
                {id:99, en:"hunt", ph:"/hʌnt/", cn:"v. 搜捕；打猎", ex:'官兵四处<em>hunt</em>蒯家人。'},
                {id:100, en:"discover", ph:"/dɪˈskʌvər/", cn:"v. 发现", ex:'眼看就要<em>discover</em>密道。'},
                {id:101, en:"shout", ph:"/ʃaʊt/", cn:"v. 喊叫", ex:'狗剩<em>shout</em>：爹！娘！'},
                {id:102, en:"sacrifice", ph:"/ˈsækrɪfaɪs/", cn:"v./n. 牺牲", ex:'他选择<em>sacrifice</em>来保护稚奴。'},
                {id:103, en:"viciously", ph:"/ˈvɪʃəsli/", cn:"adv. 恶毒地；狠辣地", ex:'瞿蛟<em>viciously</em>下手。'},
                {id:104, en:"heartbroken", ph:"/ˈhɑːrtbroʊkən/", cn:"adj. 心碎的", ex:'蒯铎<em>heartbroken</em>。'},
                {id:105, en:"desperate", ph:"/ˈdespərət/", cn:"adj. 绝望的；拼命的", ex:'赵上弦<em>desperate</em>，拔出匕首。'},
                {id:106, en:"dagger", ph:"/ˈdæɡər/", cn:"n. 匕首", ex:'拔出<em>dagger</em>扑向瞿蛟。'},
                {id:107, en:"kill", ph:"/kɪl/", cn:"v. 杀死", ex:'被对方反手<em>kill</em>。'},
                {id:108, en:"hopeless", ph:"/ˈhoʊpləs/", cn:"adj. 绝望的；无望的", ex:'<em>hopeless</em>的蒯铎仰天悲啸。'},
                {id:109, en:"hide", ph:"/haɪd/", cn:"v. 隐藏", ex:'此物我已<em>hide</em>于天地之间。'},
                {id:110, en:"forever", ph:"/fərˈevər/", cn:"adv. 永远", ex:'你<em>forever</em>也寻不到！'},
                {id:111, en:"sword", ph:"/sɔːrd/", cn:"n. 剑", ex:'他夺过兵士的<em>sword</em>。'},
                {id:112, en:"suicide", ph:"/ˈsuːɪsaɪd/", cn:"n./v. 自杀", ex:'当场<em>suicide</em>。'},
                {id:113, en:"direction", ph:"/dəˈrekʃn/", cn:"n. 方向", ex:'目光望向密道的<em>direction</em>。'},
                {id:114, en:"remind", ph:"/rɪˈmaɪnd/", cn:"v. 提醒；叮嘱", ex:'蒯铎用口型<em>remind</em>稚奴：活下去。'},
                {id:115, en:"survive", ph:"/sərˈvaɪv/", cn:"v. 幸存；活下去", ex:'蒯铎叮嘱稚奴：<em>survive</em>。'},
                {id:116, en:"depart", ph:"/dɪˈpɑːrt/", cn:"v. 离去；出发", ex:'庄芦隐带人<em>depart</em>。'},
                {id:117, en:"scene", ph:"/siːn/", cn:"n. 现场；场景", ex:'留下手下清理<em>scene</em>。'},
                {id:118, en:"property", ph:"/ˈprɑːpərti/", cn:"n. 财产；财物", ex:'洗劫了蒯府所有<em>property</em>。'},
                {id:119, en:"fire", ph:"/ˈfaɪər/", cn:"n. 火 v. 点燃", ex:'放<em>fire</em>焚宅。'},
                {id:120, en:"mansion", ph:"/ˈmænʃn/", cn:"n. 府邸；大厦", ex:'大火吞噬整座<em>mansion</em>。'},
                {id:121, en:"corpse", ph:"/kɔːrps/", cn:"n. 尸体", ex:'<em>corpse</em>尽被焚烧。'},
                {id:122, en:"forge", ph:"/fɔːrdʒ/", cn:"v. 伪造；锻造", ex:'<em>forge</em>出盗匪灭门的假象。'},
                {id:123, en:"illusion", ph:"/ɪˈluːʒn/", cn:"n. 幻觉；假象", ex:'伪造出纵火灭门的<em>illusion</em>。'},
                {id:124, en:"tragedy", ph:"/ˈtrædʒədi/", cn:"n. 悲剧；惨状", ex:'稚奴将院中<em>tragedy</em>尽收眼底。'},
                {id:125, en:"powerless", ph:"/ˈpaʊərləs/", cn:"adj. 无能为力的", ex:'稚奴却<em>powerless</em>。'},
                {id:126, en:"hatred", ph:"/ˈheɪtrɪd/", cn:"n. 仇恨", ex:'心中满是<em>hatred</em>。'},
                {id:127, en:"thick", ph:"/θɪk/", cn:"adj. 浓的；厚的", ex:'<em>thick</em>烟顺着密道涌入。'},
                {id:128, en:"dizzy", ph:"/ˈdɪzi/", cn:"adj. 头晕的", ex:'他开始变得<em>dizzy</em>。'},
                {id:129, en:"faint", ph:"/feɪnt/", cn:"v. 晕厥 adj. 微弱的", ex:'渐渐<em>faint</em>过去。'},
                {id:130, en:"mask", ph:"/mæsk/", cn:"n. 面具；口罩", ex:'一个戴着<em>mask</em>的神秘身影。'},
                {id:131, en:"mysterious", ph:"/mɪˈstɪriəs/", cn:"adj. 神秘的", ex:'一个<em>mysterious</em>身影出现在黑暗中。'},
                {id:132, en:"vanish", ph:"/ˈvænɪʃ/", cn:"v. 消失", ex:'抱起稚奴，<em>vanish</em>在夜色里。'},
                {id:133, en:"perish", ph:"/ˈperɪʃ/", cn:"v. 死亡；覆灭", ex:'蒯氏满门<em>perish</em>。'},
                {id:134, en:"alone", ph:"/əˈloʊn/", cn:"adj./adv. 独自的", ex:'唯有稚奴<em>alone</em>存活。'},
                {id:135, en:"revenge", ph:"/rɪˈvendʒ/", cn:"n./v. 复仇", ex:'一场关乎<em>revenge</em>的棋局，自此开篇。'}
            ],
            story: `<div class="episode-banner"><img src="images/zhz1集.png" alt="藏海传第1集" style="width:100%;border-radius:12px;margin-bottom:16px"></div>
<h2>🏯 藏海传 · 第 1 集</h2>

<span class="story-chapter">【第一幕：封禅惊变】</span>
<p>贞顺六年，大雍<span class="vocab-highlight" data-word="army">army</span>（军队）横扫冬夏国，冬夏只能举国<span class="vocab-highlight" data-word="surrender">surrender</span>（投降）。大雍随即在<span class="vocab-highlight" data-word="border">border</span>（边境）驻军，选定丹翠山<span class="vocab-highlight" data-word="construct">construct</span>（建造）封禅台，想向天下<span class="vocab-highlight" data-word="declare">declare</span>（宣告）自己的功业。</p>
<p>到了贞顺九年，<span class="vocab-highlight" data-word="harsh">harsh</span>（严酷的）寒冬降临，大雪漫天。封禅台日夜赶工修建，工匠们浑身是<span class="vocab-highlight" data-word="frost">frost</span>（霜）、手脚冻僵，也不敢停下工作。钦天监监正蒯铎奉旨在此<span class="vocab-highlight" data-word="supervise">supervise</span>（监督）。就在封禅台即将<span class="vocab-highlight" data-word="finish">finish</span>（完工）时，突发<span class="vocab-highlight" data-word="accident">accident</span>（事故）。</p>
<p>工匠们凿出一个冒出诡异瘴气的<span class="vocab-highlight" data-word="cave">cave</span>（洞），数十名工匠当场倒地。蒯铎得知后顺着<span class="vocab-highlight" data-word="rope">rope</span>（绳索）下去。洞底是一座<span class="vocab-highlight" data-word="complex">complex</span>（复杂的）迷宫，尽头的石台上，放着一枚通体莹绿、<span class="vocab-highlight" data-word="carve">carve</span>（刻着）蛇眉铜鱼纹路的癸玺，泛着幽光，透着<span class="vocab-highlight" data-word="evil">evil</span>（邪恶的）气息。蒯铎正上前想要<span class="vocab-highlight" data-word="inspect">inspect</span>（细看），地宫两侧的陪葬尸骸却突然<span class="vocab-highlight" data-word="revive">revive</span>（苏醒），开始<span class="vocab-highlight" data-word="roar">roar</span>（嘶吼）着围住众人。一番<span class="vocab-highlight" data-word="combat">combat</span>（厮杀）后，封禅台轰然<span class="vocab-highlight" data-word="collapse">collapse</span>（坍塌），很多人丧命，蒯铎拼死拿走了癸玺，一路奔向京城。</p>

<span class="story-chapter">【第二幕：长街邂逅】</span>
<p>此时的京城十分<span class="vocab-highlight" data-word="bustling">bustling</span>（热闹），是平津侯庄芦隐<span class="vocab-highlight" data-word="suppress">suppress</span>（平定）冬夏国，带着大胜的军队<span class="vocab-highlight" data-word="triumph">triumph</span>（凯旋）归来，百姓<span class="vocab-highlight" data-word="pour">pour</span>（涌上）街头庆贺。</p>
<p>人群中有个孩子就是蒯铎的儿子，稚奴。他从小跟着父亲学习，<span class="vocab-highlight" data-word="talent">talent</span>（天赋）极高。前阵子，他刚刚在府里<span class="vocab-highlight" data-word="dig">dig</span>（挖）了一条<span class="vocab-highlight" data-word="lead">lead</span>（直通）厨房的秘密<span class="vocab-highlight" data-word="tunnel">tunnel</span>（通道），就等着父亲回来<span class="vocab-highlight" data-word="exhibit">exhibit</span>（展示）。听说大军凯旋，稚奴十分<span class="vocab-highlight" data-word="delighted">delighted</span>（欣喜），上街<span class="vocab-highlight" data-word="squeeze">squeeze</span>（挤）在人群里找父亲。</p>
<p>稚奴慌忙中<span class="vocab-highlight" data-word="climb">climb</span>（爬上）了一辆<span class="vocab-highlight" data-word="carriage">carriage</span>（马车），车里坐着一个女孩，正是冬夏郡主。稚奴知道这有些<span class="vocab-highlight" data-word="rude">rude</span>（失礼），慌忙下车，郡主却认定他是<span class="vocab-highlight" data-word="deliberate">deliberate</span>（故意的），一怒之下扬起<span class="vocab-highlight" data-word="whip">whip</span>（鞭子）就打，抽在稚奴后背，留下<span class="vocab-highlight" data-word="bloody">bloody</span>（血红的）鞭痕。稚奴又疼又气，<span class="vocab-highlight" data-word="grab">grab</span>（捡起）地上的石子还击，石子正好<span class="vocab-highlight" data-word="strike">strike</span>（砸中）旁边的马车。烈马<span class="vocab-highlight" data-word="frighten">frighten</span>（受惊）后失控了，狠狠<span class="vocab-highlight" data-word="crash">crash</span>（撞向）另一辆马车，车里坐着的，是庄芦隐的儿子庄之行。马车<span class="vocab-highlight" data-word="overturn">overturn</span>（翻倒），庄之行摔在地上。</p>
<p>长街上一片<span class="vocab-highlight" data-word="chaos">chaos</span>（混乱）。蒯铎的两个弟子观风、狗剩及时<span class="vocab-highlight" data-word="arrive">arrive</span>（赶到），护着受伤的稚奴<span class="vocab-highlight" data-word="flee">flee</span>（脱身）。</p>

<span class="story-chapter">【第三幕：噩耗传来】</span>
<p>两人正给稚奴<span class="vocab-highlight" data-word="bandage">bandage</span>（包扎）鞭伤的时候，苏醒了的庄之行<span class="vocab-highlight" data-word="stagger">stagger</span>（踉跄）着找了过来。</p>
<p>稚奴<span class="vocab-highlight" data-word="eagerly">eagerly</span>（急切地）问："蒯铎为何未随大军<span class="vocab-highlight" data-word="return">return</span>（归来）？"</p>
<p>庄之行<span class="vocab-highlight" data-word="affirm">affirm</span>（断言）道："丹翠山封禅台<span class="vocab-highlight" data-word="collapse">collapse</span>（坍塌），无人生还，蒯监正早已<span class="vocab-highlight" data-word="bury">bury</span>（葬身）乱石之下，你不必再等了。"</p>
<p>稚奴连连<span class="vocab-highlight" data-word="shake">shake</span>（摇）头，怎么都不肯相信。他清晰记得，父亲临行前夜，他还拉着父亲，<span class="vocab-highlight" data-word="proudly">proudly</span>（骄傲地）展示自己挖的地道，父亲还连声<span class="vocab-highlight" data-word="praise">praise</span>（夸赞）自己。他明明还说了："等爹回来，看我能不能当个<span class="vocab-highlight" data-word="qualified">qualified</span>（合格的）五官分朔郎了"。他不相信父亲会回不来了。</p>

<span class="story-chapter">【第四幕：父归惊变】</span>
<p>第二天<span class="vocab-highlight" data-word="dawn">dawn</span>（清晨），妹妹月奴听到密道里有<span class="vocab-highlight" data-word="groan">groan</span>（呻吟）的声音，急忙<span class="vocab-highlight" data-word="inform">inform</span>（告知）母亲赵上弦。母亲<span class="vocab-highlight" data-word="enter">enter</span>（进入）密道，又惊又怒，训斥了稚奴，让他立刻<span class="vocab-highlight" data-word="seal">seal</span>（封死）所有密道，还<span class="vocab-highlight" data-word="punish">punish</span>（责罚）了观风、狗剩。母亲见稚奴很是<span class="vocab-highlight" data-word="stubborn">stubborn</span>（执拗），甚至扬手给了他一记<span class="vocab-highlight" data-word="slap">slap</span>（耳光）。稚奴又委屈又生气，<span class="vocab-highlight" data-word="scold">scold</span>（训斥）妹妹说："你这个告状精!"</p>
<p>深夜很是<span class="vocab-highlight" data-word="silent">silent</span>（寂静），稚奴睡不着，满心都是对父亲的<span class="vocab-highlight" data-word="longing">longing</span>（思念）与<span class="vocab-highlight" data-word="anxiety">anxiety</span>（不安）。忽然，院门响了，一道<span class="vocab-highlight" data-word="figure">figure</span>（身影）进来，正是蒯铎！</p>
<p>稚奴赶紧上前<span class="vocab-highlight" data-word="hug">hug</span>（抱住）父亲，赵上弦也闻声出来，见<span class="vocab-highlight" data-word="husband">husband</span>（丈夫）无恙，瞬间<span class="vocab-highlight" data-word="choke">choke</span>（哽咽）得说不出话。</p>
<p>蒯铎却神色凝重，<span class="vocab-highlight" data-word="urgently">urgently</span>（急促地）说："快！立刻<span class="vocab-highlight" data-word="pack">pack</span>（收拾行装），<span class="vocab-highlight" data-word="awaken">awaken</span>（叫醒）月奴，还有所有弟子，我们要连夜离开，一刻也不能<span class="vocab-highlight" data-word="delay">delay</span>（耽搁）！"他来不及<span class="vocab-highlight" data-word="explain">explain</span>（解释），眼里满是<span class="vocab-highlight" data-word="urgency">urgency</span>（急迫）。</p>

<span class="story-chapter">【第五幕：灭门之祸】</span>
<p>可众人刚<span class="vocab-highlight" data-word="gather">gather</span>（聚）在院中，就听见院外一阵躁动，<span class="vocab-highlight" data-word="flame">flame</span>（火光）冲天，蒯府已被<span class="vocab-highlight" data-word="besiege">besiege</span>（包围）！</p>
<p>赵上弦心头一紧，急忙对稚奴说："快！带妹妹去后<span class="vocab-highlight" data-word="yard">yard</span>（院），快！" 稚奴把月奴藏进<span class="vocab-highlight" data-word="haystack">haystack</span>（草垛），自己扒开了密道。</p>
<p>院门被一脚<span class="vocab-highlight" data-word="kick">kick</span>（踹）开，平津侯庄芦隐走入，身后跟着杀气腾腾的<span class="vocab-highlight" data-word="bodyguard">bodyguard</span>（侍卫）瞿蛟，逼近蒯铎："蒯监正，你拿了不该拿的东西。<span class="vocab-highlight" data-word="hand">hand</span>（交）出来，可保你全家。"</p>
<p>他们想要的，就是那枚能<span class="vocab-highlight" data-word="stir">stir</span>（搅动）风云的癸玺。</p>
<p>蒯铎脊背<span class="vocab-highlight" data-word="straighten">straighten</span>（挺直）："此物关乎天下<span class="vocab-highlight" data-word="safety">safety</span>（安危），绝不交于<span class="vocab-highlight" data-word="ambitious">ambitious</span>（野心的）之人！"</p>
<p>庄芦隐<span class="vocab-highlight" data-word="sneer">sneer</span>（冷笑）一声，<span class="vocab-highlight" data-word="blade">blade</span>（刀刃）光闪过，蒯铎门下弟子接连<span class="vocab-highlight" data-word="fall">fall</span>（倒下）在<span class="vocab-highlight" data-word="blood">blood</span>（血）泊之中。</p>
<p>"交，还是不交？" 庄芦隐声音没有半分<span class="vocab-highlight" data-word="mercy">mercy</span>（怜悯）。</p>
<p>就在此时，官兵<span class="vocab-highlight" data-word="search">search</span>（搜）出了草垛中的月奴，将孩子<span class="vocab-highlight" data-word="drag">drag</span>（拖拽）到院中，用女儿的性命<span class="vocab-highlight" data-word="threaten">threaten</span>（威胁）蒯铎。</p>
<p>蒯铎悲愤嘶吼，却依旧不肯<span class="vocab-highlight" data-word="yield">yield</span>（松口）。</p>
<p>官兵四处<span class="vocab-highlight" data-word="hunt">hunt</span>（搜捕）蒯家人，眼看就要<span class="vocab-highlight" data-word="discover">discover</span>（发现）密道，狗剩却大步踏出，冲着蒯铎夫妇，<span class="vocab-highlight" data-word="shout">shout</span>（喊道）："爹！娘！"他选择了<span class="vocab-highlight" data-word="sacrifice">sacrifice</span>（牺牲）来保护稚奴。</p>
<p>庄芦隐只是冷冷示意，瞿蛟上前<span class="vocab-highlight" data-word="viciously">viciously</span>（狠辣）下手，杀了这个孩子。</p>
<p>徒弟和家人接连被杀害，蒯铎<span class="vocab-highlight" data-word="heartbroken">heartbroken</span>（痛彻心扉）。赵上弦也是<span class="vocab-highlight" data-word="desperate">desperate</span>（悲愤欲绝），拔出<span class="vocab-highlight" data-word="dagger">dagger</span>（匕首）扑向瞿蛟，却被对方反手<span class="vocab-highlight" data-word="kill">kill</span>（斩杀），也倒在血泊之中。</p>

<span class="story-chapter">【第六幕：英魂永诀】</span>
<p>眼看到了这个地步，<span class="vocab-highlight" data-word="hopeless">hopeless</span>（万念俱灰的）蒯铎，仰天悲啸："庄芦隐！此物我已<span class="vocab-highlight" data-word="hide">hide</span>（藏）于天地之间，我死之后，你<span class="vocab-highlight" data-word="forever">forever</span>（永世）也寻不到！"话音落下，他夺过身旁兵士的<span class="vocab-highlight" data-word="sword">sword</span>（剑），当场<span class="vocab-highlight" data-word="suicide">suicide</span>（自戕）。弥留之际，他目光望向密道的<span class="vocab-highlight" data-word="direction">direction</span>（方向），稚奴正在那里、满眼泪水，蒯铎只用口型<span class="vocab-highlight" data-word="remind">remind</span>（叮嘱）稚奴：<span class="vocab-highlight" data-word="survive">survive</span>（活下去）。</p>
<p>庄芦隐命人<span class="vocab-highlight" data-word="search">search</span>（搜）遍蒯铎全身，瞿蛟只从他怀中搜出一枚蛇眉铜鱼，始终没有找到癸玺。</p>
<p>天快亮时，庄芦隐带人<span class="vocab-highlight" data-word="depart">depart</span>（离去），留下手下清理<span class="vocab-highlight" data-word="scene">scene</span>（现场）。官兵洗劫了蒯府所有<span class="vocab-highlight" data-word="property">property</span>（财物），随后放<span class="vocab-highlight" data-word="fire">fire</span>（火）焚宅，熊熊大火吞噬整座<span class="vocab-highlight" data-word="mansion">mansion</span>（府邸），<span class="vocab-highlight" data-word="corpse">corpse</span>（尸骸）尽被焚烧，<span class="vocab-highlight" data-word="forge">forge</span>（伪造）出了盗匪洗劫、灭门纵火的<span class="vocab-highlight" data-word="illusion">illusion</span>（假象）。</p>
<p>密道之中，稚奴透过地道的缝隙，将院中<span class="vocab-highlight" data-word="tragedy">tragedy</span>（惨状）尽收眼底，却<span class="vocab-highlight" data-word="powerless">powerless</span>（无能为力），心中满是<span class="vocab-highlight" data-word="hatred">hatred</span>（仇恨）。<span class="vocab-highlight" data-word="thick">thick</span>（浓浓的）烟顺着密道涌入，他开始变得<span class="vocab-highlight" data-word="dizzy">dizzy</span>（意识模糊），渐渐<span class="vocab-highlight" data-word="faint">faint</span>（晕厥）过去。</p>
<p>就在这时，一个戴着<span class="vocab-highlight" data-word="mask">mask</span>（面具）的<span class="vocab-highlight" data-word="mysterious">mysterious</span>（神秘的）身影出现在黑暗中，抱起昏迷的稚奴，<span class="vocab-highlight" data-word="vanish">vanish</span>（消失）在夜色里。</p>
<p>就是这一夜之间，蒯氏满门<span class="vocab-highlight" data-word="perish">perish</span>（覆灭），唯有稚奴<span class="vocab-highlight" data-word="alone">alone</span>（独自）存活。</p>
<p>一场关乎<span class="vocab-highlight" data-word="revenge">revenge</span>（复仇）棋局，自此开篇。</p>

<p style="text-align:center;color:#c9a84c;margin-top:32px;font-weight:700">—— 第 1 集完 · 共 135 词 ——</p>`
        },
        {
            id: 2,
            title: '第 2 集',
            banner: '',
            wordCount: 110,
            words: [
                {id:1, en:"wake", ph:"/weɪk/", cn:"v. 醒来", ex:'稚奴从昏迷中<em>wake</em>。'},
                {id:2, en:"boat", ph:"/boʊt/", cn:"n. 船", ex:'发现自己躺在一艘小<em>boat</em>上。'},
                {id:3, en:"fear", ph:"/fɪr/", cn:"n. 恐惧", ex:'面具人察觉到他的<em>fear</em>。'},
                {id:4, en:"acquaintance", ph:"/əˈkweɪntəns/", cn:"n. 相识；熟人", ex:'自称是蒯铎的旧<em>acquaintance</em>。'},
                {id:5, en:"burst", ph:"/bɜːrst/", cn:"v. 爆发", ex:'悲痛与恐惧彻底<em>burst</em>。'},
                {id:6, en:"encounter", ph:"/ɪnˈkaʊntər/", cn:"n. 遭遇", ex:'诉说着家中的<em>encounter</em>。'},
                {id:7, en:"witness", ph:"/ˈwɪtnəs/", cn:"v. 目睹", ex:'亲眼<em>witness</em>父母被杀害。'},
                {id:8, en:"orphan", ph:"/ˈɔːrfn/", cn:"n. 孤儿", ex:'沦为无家可归的<em>orphan</em>。'},
                {id:9, en:"calm", ph:"/kɑːm/", cn:"v./adj. 平复；平静的", ex:'待稚奴情绪<em>calm</em>。'},
                {id:10, en:"receive", ph:"/rɪˈsiːv/", cn:"v. 收到", ex:'他<em>receive</em>了蒯铎的书信。'},
                {id:11, en:"flame", ph:"/fleɪm/", cn:"n. 火焰；火海", ex:'那里早已是一片<em>flame</em>。'},
                {id:12, en:"survive", ph:"/sərˈvaɪv/", cn:"v. 幸免；存活", ex:'蒯府上下无一人<em>survive</em>。'},
                {id:13, en:"rescue", ph:"/ˈreskjuː/", cn:"v. 救出；营救", ex:'才得以将他<em>rescue</em>。'},
                {id:14, en:"bow", ph:"/baʊ/", cn:"v. 叩拜；鞠躬", ex:'朝着面具人重重<em>bow</em>。'},
                {id:15, en:"grace", ph:"/ɡreɪs/", cn:"n. 恩情；恩典", ex:'感谢他的救命<em>grace</em>。'},
                {id:16, en:"swear", ph:"/swer/", cn:"v. 发誓", ex:'眼神坚定地<em>swear</em>。'},
                {id:17, en:"avenge", ph:"/əˈvendʒ/", cn:"v. 报仇雪恨", ex:'一定要亲手为家人<em>avenge</em>。'},
                {id:18, en:"ability", ph:"/əˈbɪləti/", cn:"n. 能力", ex:'仅凭他现在的<em>ability</em>。'},
                {id:19, en:"approach", ph:"/əˈproʊtʃ/", cn:"v. 接近", ex:'根本无法<em>approach</em>仇人。'},
                {id:20, en:"detailed", ph:"/ˈdiːteɪld/", cn:"adj. 详细的", ex:'制定<em>detailed</em>复仇计划。'},
                {id:21, en:"residence", ph:"/ˈrezɪdəns/", cn:"n. 住处；住所", ex:'送到了师父的<em>residence</em>。'},
                {id:22, en:"martial arts", ph:"/ˌmɑːrʃl ˈɑːrts/", cn:"n. 武术", ex:'稚奴说想要习<em>martial arts</em>报仇。'},
                {id:23, en:"enemy", ph:"/ˈenəmi/", cn:"n. 敌人；仇人", ex:'亲手杀死<em>enemy</em>。'},
                {id:24, en:"bone", ph:"/boʊn/", cn:"n. 骨；骨头", ex:'直言他筋<em>bone</em>松软。'},
                {id:25, en:"wisdom", ph:"/ˈwɪzdəm/", cn:"n. 智谋；智慧", ex:'必须走一条以<em>wisdom</em>为主的道路。'},
                {id:26, en:"avoid", ph:"/əˈvɔɪd/", cn:"v. 避免", ex:'为了<em>avoid</em>被人认出。'},
                {id:27, en:"recognize", ph:"/ˈrekəɡnaɪz/", cn:"v. 认出；识别", ex:'被庄芦隐的人<em>recognize</em>。'},
                {id:28, en:"appearance", ph:"/əˈpɪrəns/", cn:"n. 容貌；外表", ex:'决定为稚奴微调<em>appearance</em>。'},
                {id:29, en:"remove", ph:"/rɪˈmuːv/", cn:"v. 拆除；移除", ex:'等纱布<em>remove</em>后。'},
                {id:30, en:"injury", ph:"/ˈɪndʒəri/", cn:"n. 伤；伤痕", ex:'后背的鞭<em>injury</em>太深。'},
                {id:31, en:"medical", ph:"/ˈmedɪkl/", cn:"adj. 医术的；医学的", ex:'即便<em>medical</em>高超。'},
                {id:32, en:"erase", ph:"/ɪˈreɪs/", cn:"v. 抹去；消除", ex:'无法将其彻底<em>erase</em>。'},
                {id:33, en:"expose", ph:"/ɪkˈspoʊz/", cn:"v. 暴露", ex:'不会因此<em>expose</em>身份。'},
                {id:34, en:"wooden", ph:"/ˈwʊdn/", cn:"adj. 木制的", ex:'一个榫卯结构的<em>wooden</em>笼子。'},
                {id:35, en:"solve", ph:"/sɑːlv/", cn:"v. 解开；解决", ex:'必须凭借智慧<em>solve</em>机关。'},
                {id:36, en:"exhaust", ph:"/ɪɡˈzɔːst/", cn:"v. 耗尽；精疲力竭", ex:'体力<em>exhaust</em>不支。'},
                {id:37, en:"abandon", ph:"/əˈbændən/", cn:"v. 放弃", ex:'甚至产生了<em>abandon</em>的念头。'},
                {id:38, en:"ignite", ph:"/ɪɡˈnaɪt/", cn:"v. 点燃；燃起", ex:'又重新<em>ignite</em>了斗志。'},
                {id:39, en:"observe", ph:"/əbˈzɜːrv/", cn:"v. 观察", ex:'仔细<em>observe</em>笼子的结构。'},
                {id:40, en:"skill", ph:"/skɪl/", cn:"n. 技巧；技能", ex:'回忆父亲教过的<em>skill</em>。'},
                {id:41, en:"support", ph:"/səˈpɔːrt/", cn:"v. 扶住；支撑", ex:'高明及时上前<em>support</em>他。'},
                {id:42, en:"approve", ph:"/əˈpruːv/", cn:"v. 认可；赞成", ex:'心中<em>approve</em>。'},
                {id:43, en:"all-around", ph:"/ˌɔːl əˈraʊnd/", cn:"adj. 全方位的", ex:'制定了<em>all-around</em>学习计划。'},
                {id:44, en:"rest", ph:"/rest/", cn:"v./n. 休息", ex:'亥时<em>rest</em>。'},
                {id:45, en:"follow", ph:"/ˈfɑːloʊ/", cn:"v. 跟随", ex:'上午<em>follow</em>星斗大师学习。'},
                {id:46, en:"polish", ph:"/ˈpɑːlɪʃ/", cn:"v. 打磨；磨练", ex:'日夜<em>polish</em>心智和本领。'},
                {id:47, en:"mission", ph:"/ˈmɪʃn/", cn:"n. 使命", ex:'牢记复仇的<em>mission</em>。'},
                {id:48, en:"insist", ph:"/ɪnˈsɪst/", cn:"v. 坚持", ex:'也咬牙<em>insist</em>。'},
                {id:49, en:"complain", ph:"/kəmˈpleɪn/", cn:"v. 抱怨", ex:'从不<em>complain</em>。'},
                {id:50, en:"pass", ph:"/pæs/", cn:"v. 经过；流逝", ex:'十年光阴匆匆<em>pass</em>。'},
                {id:51, en:"excellent", ph:"/ˈeksələnt/", cn:"adj. 出色的；过硬的", ex:'练就了一身<em>excellent</em>的技艺。'},
                {id:52, en:"consolidate", ph:"/kənˈsɑːlɪdeɪt/", cn:"v. 巩固", ex:'进一步<em>consolidate</em>自己的权势。'},
                {id:53, en:"pigeon", ph:"/ˈpɪdʒɪn/", cn:"n. 鸽子", ex:'收到一封飞<em>pigeon</em>传书。'},
                {id:54, en:"letter", ph:"/ˈletər/", cn:"n. 书信；信件", ex:'星斗大师看到<em>letter</em>后。'},
                {id:55, en:"nervous", ph:"/ˈnɜːrvəs/", cn:"adj. 紧张的", ex:'神情变得<em>nervous</em>起来。'},
                {id:56, en:"alone", ph:"/əˈloʊn/", cn:"adj./adv. 独自的", ex:'让稚奴<em>alone</em>迎接新师父。'},
                {id:57, en:"warn", ph:"/wɔːrn/", cn:"v. 叮嘱；警告", ex:'反复<em>warn</em>稚奴。'},
                {id:58, en:"respect", ph:"/rɪˈspekt/", cn:"v./n. 恭敬；尊重", ex:'一定要<em>respect</em>对待新师父。'},
                {id:59, en:"impulsive", ph:"/ɪmˈpʌlsɪv/", cn:"adj. 冲动的", ex:'不可像小时候那样<em>impulsive</em>。'},
                {id:60, en:"doubt", ph:"/daʊt/", cn:"n./v. 疑惑；怀疑", ex:'稚奴虽然有点<em>doubt</em>。'},
                {id:61, en:"beautiful", ph:"/ˈbjuːtɪfl/", cn:"adj. 美丽的", ex:'竟然是一个<em>beautiful</em>女子。'},
                {id:62, en:"refuse", ph:"/rɪˈfjuːz/", cn:"v. 拒绝", ex:'教他如何<em>refuse</em>女人的诱惑。'},
                {id:63, en:"attract", ph:"/əˈtrækt/", cn:"v./n. 诱惑；吸引", ex:'如何拒绝女人的<em>attract</em>。'},
                {id:64, en:"seduce", ph:"/sɪˈduːs/", cn:"v. 引诱；勾引", ex:'六初百般<em>seduce</em>稚奴。'},
                {id:65, en:"break", ph:"/breɪk/", cn:"v. 打破", ex:'试图<em>break</em>他的心理防线。'},
                {id:66, en:"remind", ph:"/rɪˈmaɪnd/", cn:"v. 提醒", ex:'也<em>remind</em>他日后在京城要小心。'},
                {id:67, en:"temptation", ph:"/tempˈteɪʃn/", cn:"n. 诱惑", ex:'难免会遇到各种<em>temptation</em>。'},
                {id:68, en:"resist", ph:"/rɪˈzɪst/", cn:"v. 抵挡；抵抗", ex:'仅凭本心恐怕难以<em>resist</em>。'},
                {id:69, en:"hide", ph:"/haɪd/", cn:"v. 隐藏", ex:'唯有封闭感情、<em>hide</em>真心。'},
                {id:70, en:"background", ph:"/ˈbækɡraʊnd/", cn:"n. 身世；背景", ex:'诉说自己的<em>background</em>。'},
                {id:71, en:"vaguely", ph:"/ˈveɪɡli/", cn:"adv. 隐约地；模糊地", ex:'只能<em>vaguely</em>回忆起一些片段。'},
                {id:72, en:"childhood", ph:"/ˈtʃaɪldhʊd/", cn:"n. 童年", ex:'回忆起一些<em>childhood</em>的片段。'},
                {id:73, en:"sympathy", ph:"/ˈsɪmpəθi/", cn:"n. 同情", ex:'稚奴心生<em>sympathy</em>。'},
                {id:74, en:"loosen", ph:"/ˈluːsn/", cn:"v. 松动；放松", ex:'情绪渐渐<em>loosen</em>。'},
                {id:75, en:"guard", ph:"/ɡɑːrd/", cn:"n. 防备；侍卫", ex:'就在他放下<em>guard</em>的瞬间。'},
                {id:76, en:"trust", ph:"/trʌst/", cn:"v. 相信；信任", ex:'不能轻易<em>trust</em>任何人。'},
                {id:77, en:"similar", ph:"/ˈsɪmɪlər/", cn:"adj. 相似的", ex:'哪怕对方有<em>similar</em>的遭遇。'},
                {id:78, en:"alert", ph:"/əˈlɜːrt/", cn:"n./adj. 警惕", ex:'不能放松<em>alert</em>。'},
                {id:79, en:"vital", ph:"/ˈvaɪtl/", cn:"adj. 至关重要的", ex:'这是<em>vital</em>的一课。'},
                {id:80, en:"lesson", ph:"/ˈlesn/", cn:"n. 课；教训", ex:'这也是她要教给稚奴的一<em>lesson</em>。'},
                {id:81, en:"lock", ph:"/lɑːk/", cn:"n. 锁", ex:'带来了一个鲁班<em>lock</em>。'},
                {id:82, en:"calmly", ph:"/ˈkɑːmli/", cn:"adv. 冷静地", ex:'边解边<em>calmly</em>讲着当年的灾祸。'},
                {id:83, en:"disaster", ph:"/dɪˈzæstər/", cn:"n. 灾祸；灾难", ex:'那场让他失去全家的<em>disaster</em>。'},
                {id:84, en:"admire", ph:"/ədˈmaɪər/", cn:"v. 赞许；钦佩", ex:'面具人露出了<em>admire</em>的目光。'},
                {id:85, en:"hostility", ph:"/hɑːˈstɪləti/", cn:"n. 仇恨；敌意", ex:'没有忘记<em>hostility</em>。'},
                {id:86, en:"express", ph:"/ɪkˈspres/", cn:"v. 表露；表达", ex:'学会了不<em>express</em>出来。'},
                {id:87, en:"portrait", ph:"/ˈpɔːrtrət/", cn:"n. 画像；肖像", ex:'庄芦隐的<em>portrait</em>。'},
                {id:88, en:"introduce", ph:"/ˌɪntrəˈduːs/", cn:"v. 介绍", ex:'向稚奴<em>introduce</em>了他的情况。'},
                {id:89, en:"golden", ph:"/ˈɡoʊldən/", cn:"adj. 金色的", ex:'常年身着<em>golden</em>丝软甲。'},
                {id:90, en:"sneak", ph:"/sniːk/", cn:"v. 潜入；偷偷进入", ex:'必须想办法<em>sneak</em>庄芦隐的府中。'},
                {id:91, en:"mansion", ph:"/ˈmænʃn/", cn:"n. 府邸", ex:'<em>sneak</em>庄芦隐的<em>mansion</em>中。'},
                {id:92, en:"roster", ph:"/ˈrɑːstər/", cn:"n. 名册；花名册", ex:'将庄芦隐府中的<em>roster</em>交给稚奴。'},
                {id:93, en:"memorize", ph:"/ˈmeməraɪz/", cn:"v. 熟记；背诵", ex:'让他仔细<em>memorize</em>府中每个人。'},
                {id:94, en:"prepare", ph:"/prɪˈper/", cn:"v. 准备", ex:'为日后潜入侯府做<em>prepare</em>。'},
                {id:95, en:"mature", ph:"/məˈtʃʊr/", cn:"adj. 成熟的", ex:'时机还不够<em>mature</em>。'},
                {id:96, en:"identity", ph:"/aɪˈdentəti/", cn:"n. 身份", ex:'以免暴露<em>identity</em>。'},
                {id:97, en:"reveal", ph:"/rɪˈviːl/", cn:"v. 透露；揭示", ex:'面具人却<em>reveal</em>了一个重要消息。'},
                {id:98, en:"mess", ph:"/mes/", cn:"n. 混乱", ex:'朝野上下一片<em>mess</em>。'},
                {id:99, en:"chance", ph:"/tʃæns/", cn:"n. 时机；机会", ex:'正是下山赴京的最佳<em>chance</em>。'},
                {id:100, en:"miss", ph:"/mɪs/", cn:"v. 错过", ex:'不能<em>miss</em>。'},
                {id:101, en:"dragon", ph:"/ˈdræɡən/", cn:"n. 龙", ex:'潜<em>dragon</em>必须入渊了。'},
                {id:102, en:"reach", ph:"/riːtʃ/", cn:"v. 达成", ex:'众人意见<em>reach</em>一致。'},
                {id:103, en:"name", ph:"/neɪm/", cn:"n. 名字", ex:'你只有一个<em>name</em>，藏海。'},
                {id:104, en:"luggage", ph:"/ˈlʌɡɪdʒ/", cn:"n. 行装；行李", ex:'收拾好<em>luggage</em>。'},
                {id:105, en:"together", ph:"/təˈɡeðər/", cn:"adv. 一同；一起", ex:'想要和他<em>together</em>进京。'},
                {id:106, en:"send", ph:"/send/", cn:"v. 送行；派送", ex:'星斗大师为藏海<em>send</em>。'},
                {id:107, en:"cautious", ph:"/ˈkɔːʃəs/", cn:"adj. 谨慎的", ex:'在京城务必行事<em>cautious</em>。'},
                {id:108, en:"difficulty", ph:"/ˈdɪfɪkəlti/", cn:"n. 困难", ex:'无论遇到什么<em>difficulty</em>。'},
                {id:109, en:"world", ph:"/wɜːrld/", cn:"n. 世界", ex:'这<em>world</em>就没有人叫稚奴了。'},
                {id:110, en:"step", ph:"/step/", cn:"v. 踏上；迈步", ex:'<em>step</em>了前往京城的道路。'}
            ],
            story: `<h2>🏯 藏海传 · 第 2 集</h2>

<span class="story-chapter">【第一幕：江上醒来】</span>
<p>稚奴从昏迷中<span class="vocab-highlight" data-word="wake">wake</span>（醒来），发现自己正躺在一艘小<span class="vocab-highlight" data-word="boat">boat</span>（船）上。他转头望去，只见一个戴着面具的男人站在身旁。面具人察觉到他的<span class="vocab-highlight" data-word="fear">fear</span>（恐惧），放缓语气开口，自称是他的父亲蒯铎的旧<span class="vocab-highlight" data-word="acquaintance">acquaintance</span>（相识）。</p>
<p>听到"蒯铎"二字，稚奴积压的悲痛与恐惧彻底<span class="vocab-highlight" data-word="burst">burst</span>（爆发）。他断断续续地诉说着家中的<span class="vocab-highlight" data-word="encounter">encounter</span>（遭遇），亲眼<span class="vocab-highlight" data-word="witness">witness</span>（目睹）父母和妹妹月奴被杀害，自己也沦为无家可归的<span class="vocab-highlight" data-word="orphan">orphan</span>（孤儿）。</p>
<p>面具人待稚奴情绪<span class="vocab-highlight" data-word="calm">calm</span>（平复），便缓缓道出缘由。他<span class="vocab-highlight" data-word="receive">receive</span>（收到）了蒯铎的书信，得知处境危险，特意赶来接应，可等他赶到时，那里早已是一片<span class="vocab-highlight" data-word="flame">flame</span>（火海），蒯府上下无一人<span class="vocab-highlight" data-word="survive">survive</span>（幸免），但密道里找到了昏迷的稚奴，才得以将他<span class="vocab-highlight" data-word="rescue">rescue</span>（救出）。</p>
<p>稚奴听完，挣扎着从船上爬起来，朝着面具人重重<span class="vocab-highlight" data-word="bow">bow</span>（叩拜），感谢他的救命<span class="vocab-highlight" data-word="grace">grace</span>（恩情），然后眼神坚定地<span class="vocab-highlight" data-word="swear">swear</span>（发誓），一定要亲手为家人<span class="vocab-highlight" data-word="avenge">avenge</span>（报仇雪恨）。</p>

<span class="story-chapter">【第二幕：拜师学艺】</span>
<p>面具人扶起稚奴，告知他庄芦隐势力强大，仅凭他现在的<span class="vocab-highlight" data-word="ability">ability</span>（能力），根本无法<span class="vocab-highlight" data-word="approach">approach</span>（接近）仇人。想要报仇，必须潜心学习，他会为稚奴制定<span class="vocab-highlight" data-word="detailed">detailed</span>（详细的）复仇计划，并让两位师父教他。随后，面具人便带着稚奴上岸，将他送到了师父的<span class="vocab-highlight" data-word="residence">residence</span>（住处）。</p>
<p>稚奴说想要习<span class="vocab-highlight" data-word="martial arts">martial arts</span>（武）报仇，亲手杀死<span class="vocab-highlight" data-word="enemy">enemy</span>（仇人）。星斗大师打量了稚奴一番，直言他"筋<span class="vocab-highlight" data-word="bone">bone</span>（骨）松软"，并不适合武力。想要复仇，必须走一条以<span class="vocab-highlight" data-word="wisdom">wisdom</span>（智谋）为主的道路。</p>
<p>为了<span class="vocab-highlight" data-word="avoid">avoid</span>（避免）稚奴日后被庄芦隐的人<span class="vocab-highlight" data-word="recognize">recognize</span>（认出），星斗大师决定为稚奴微调<span class="vocab-highlight" data-word="appearance">appearance</span>（容貌）。稚奴再次醒来时，发现自己的脸上包着纱布，才得知等纱布<span class="vocab-highlight" data-word="remove">remove</span>（拆除）后，他再也没有爹娘的样子了。但是他后背的鞭<span class="vocab-highlight" data-word="injury">injury</span>（伤）太深，即便<span class="vocab-highlight" data-word="medical">medical</span>（医术）高超，也无法将其彻底<span class="vocab-highlight" data-word="erase">erase</span>（抹去），好在仇人并不知晓他后背有伤，应该不会因此<span class="vocab-highlight" data-word="expose">expose</span>（暴露）身份。</p>

<span class="story-chapter">【第三幕：木笼破局】</span>
<p>星斗大师随后赶来，告诉稚奴，想要从眼前这个榫卯结构的<span class="vocab-highlight" data-word="wooden">wooden</span>（木）笼子里出来，就必须凭借自己的智慧<span class="vocab-highlight" data-word="solve">solve</span>（解开）机关。</p>
<p>起初，他饿得饥肠辘辘、体力<span class="vocab-highlight" data-word="exhaust">exhaust</span>（不支），甚至产生了<span class="vocab-highlight" data-word="abandon">abandon</span>（放弃）的念头。但一想到家人，他又重新<span class="vocab-highlight" data-word="ignite">ignite</span>（燃起）了斗志。稚奴从小跟随父亲学过机关之术，他仔细<span class="vocab-highlight" data-word="observe">observe</span>（观察）笼子的结构，回忆父亲生前教过的<span class="vocab-highlight" data-word="skill">skill</span>（技巧）。终于，他静下心来，成功解开了机关，走了出来。高明及时上前<span class="vocab-highlight" data-word="support">support</span>（扶住）他。</p>

<span class="story-chapter">【第四幕：十年磨剑】</span>
<p>星斗大师看着眼前这个坚韧的孩子，心中<span class="vocab-highlight" data-word="approve">approve</span>（认可），随即为稚奴制定了<span class="vocab-highlight" data-word="all-around">all-around</span>（全方位的）学习计划。计划规定，每天卯时起床，亥时<span class="vocab-highlight" data-word="rest">rest</span>（休息），上午<span class="vocab-highlight" data-word="follow">follow</span>（跟随）星斗大师学习堪舆营造之术，下午则跟随高明学习纵横之术，日夜<span class="vocab-highlight" data-word="polish">polish</span>（打磨）心智和本领。稚奴也始终牢记复仇的<span class="vocab-highlight" data-word="mission">mission</span>（使命），尽管每日任务艰难，也咬牙<span class="vocab-highlight" data-word="insist">insist</span>（坚持），从不<span class="vocab-highlight" data-word="complain">complain</span>（抱怨）。</p>
<p>转眼十年光阴匆匆<span class="vocab-highlight" data-word="pass">pass</span>（而过），当年年幼的稚奴已经长大，在星斗大师和高明的教导下，他练就了一身<span class="vocab-highlight" data-word="excellent">excellent</span>（过硬）的技艺。与此同时，平津侯庄芦隐进一步<span class="vocab-highlight" data-word="consolidate">consolidate</span>（巩固）自己的权势。</p>

<span class="story-chapter">【第五幕：第三位师父】</span>
<p>一天，稚奴收到一封飞<span class="vocab-highlight" data-word="pigeon">pigeon</span>（鸽）传书，得知自己还有一位新师父。星斗大师看到<span class="vocab-highlight" data-word="letter">letter</span>（书信）后，神情变得<span class="vocab-highlight" data-word="nervous">nervous</span>（紧张）起来，说要让稚奴<span class="vocab-highlight" data-word="alone">alone</span>（独自）迎接新师父的到来。高明临走前，反复<span class="vocab-highlight" data-word="warn">warn</span>（叮嘱）稚奴，一定要<span class="vocab-highlight" data-word="respect">respect</span>（恭敬）对待新师父，不可像小时候那样<span class="vocab-highlight" data-word="impulsive">impulsive</span>（冲动）。</p>
<p>稚奴虽然有点<span class="vocab-highlight" data-word="doubt">doubt</span>（疑惑），还是按照吩咐迎接新师父。让他意外的是，新来的师父竟然是一个<span class="vocab-highlight" data-word="beautiful">beautiful</span>（美丽的）女子，名叫六初。</p>
<p>六初开门见山，告诉稚奴，她此次前来，是要教他"风花雪月"之事，而第一堂课，就是教他如何<span class="vocab-highlight" data-word="refuse">refuse</span>（拒绝）女人的<span class="vocab-highlight" data-word="attract">attract</span>（诱惑）。随后，六初百般<span class="vocab-highlight" data-word="seduce">seduce</span>（引诱）稚奴，试图<span class="vocab-highlight" data-word="break">break</span>（打破）他的心理防线，可稚奴始终不为所动，甚至直接将六初推到一边。</p>
<p>六初非但没有生气，反而很是认可。也<span class="vocab-highlight" data-word="remind">remind</span>（提醒）他，日后进入京城，难免会遇到各种<span class="vocab-highlight" data-word="temptation">temptation</span>（诱惑），到那时，仅凭本心恐怕难以<span class="vocab-highlight" data-word="resist">resist</span>（抵挡），唯有封闭感情、<span class="vocab-highlight" data-word="hide">hide</span>（隐藏）真心。</p>

<span class="story-chapter">【第六幕：防备人心】</span>
<p>接下来，六初开始向稚奴诉说自己的<span class="vocab-highlight" data-word="background">background</span>（身世），幼年丧母，早已记不清父母的模样，只能<span class="vocab-highlight" data-word="vaguely">vaguely</span>（隐约）回忆起一些<span class="vocab-highlight" data-word="childhood">childhood</span>（童年）的片段。稚奴听后，心生<span class="vocab-highlight" data-word="sympathy">sympathy</span>（同情），忍不住想起了自己的家人，情绪渐渐<span class="vocab-highlight" data-word="loosen">loosen</span>（松动），就在他放下<span class="vocab-highlight" data-word="guard">guard</span>（防备）的瞬间，六初突然亮出匕首，稚奴瞬间惊醒。</p>
<p>六初告诉稚奴，想要报仇，就不能轻易<span class="vocab-highlight" data-word="trust">trust</span>（相信）任何人，哪怕对方与自己有<span class="vocab-highlight" data-word="similar">similar</span>（相似）的遭遇，也不能放松<span class="vocab-highlight" data-word="alert">alert</span>（警惕），这也是她要教给稚奴的<span class="vocab-highlight" data-word="vital">vital</span>（至关重要的）一<span class="vocab-highlight" data-word="lesson">lesson</span>（课）——防备人心。稚奴恍然大悟。</p>

<span class="story-chapter">【第七幕：潜龙入渊】</span>
<p>这天，当初那个救了稚奴的面具人突然到来，还带来了一个鲁班<span class="vocab-highlight" data-word="lock">lock</span>（锁）。稚奴接过来，边解边<span class="vocab-highlight" data-word="calmly">calmly</span>（冷静地）讲着当年那场让他失去全家的<span class="vocab-highlight" data-word="disaster">disaster</span>（灾祸），凭借多年所学，很快就将其<span class="vocab-highlight" data-word="solve">solve</span>（解开），面具人看着他露出了<span class="vocab-highlight" data-word="admire">admire</span>（赞许）的目光。当年那个孩子没有忘记<span class="vocab-highlight" data-word="hostility">hostility</span>（仇恨），只是学会了不<span class="vocab-highlight" data-word="express">express</span>（表露）出来。</p>
<p>随后，面具人拿出一份"礼物"，庄芦隐的<span class="vocab-highlight" data-word="portrait">portrait</span>（画像），向稚奴<span class="vocab-highlight" data-word="introduce">introduce</span>（介绍）了他的情况——庄芦隐武功高强，身边常年有贴身<span class="vocab-highlight" data-word="guard">guard</span>（侍卫）守护，他自己也常年身着<span class="vocab-highlight" data-word="golden">golden</span>（金）丝软甲，外人根本无法<span class="vocab-highlight" data-word="approach">approach</span>（接近），想要报仇，就必须想办法<span class="vocab-highlight" data-word="sneak">sneak</span>（潜入）庄芦隐的<span class="vocab-highlight" data-word="mansion">mansion</span>（府）中，成为他的幕僚，伺机而动。说着，面具人又将庄芦隐府中的<span class="vocab-highlight" data-word="roster">roster</span>（名册）交给稚奴，让他仔细<span class="vocab-highlight" data-word="memorize">memorize</span>（熟记）府中每个人，为日后潜入侯府做<span class="vocab-highlight" data-word="prepare">prepare</span>（准备）。</p>
<p>星斗大师见状，提出时机还不够<span class="vocab-highlight" data-word="mature">mature</span>（成熟），认为稚奴暂时不宜进入侯府，以免暴露<span class="vocab-highlight" data-word="identity">identity</span>（身份）。</p>
<p>但面具人却<span class="vocab-highlight" data-word="reveal">reveal</span>（透露）了一个重要消息：当朝太后刚刚驾崩，朝野上下一片<span class="vocab-highlight" data-word="mess">mess</span>（混乱），正是稚奴下山赴京的最佳<span class="vocab-highlight" data-word="chance">chance</span>（时机），不能<span class="vocab-highlight" data-word="miss">miss</span>（错过）。</p>
<p>"潜<span class="vocab-highlight" data-word="dragon">dragon</span>（龙）必须入渊了。"</p>
<p>众人意见<span class="vocab-highlight" data-word="reach">reach</span>（达成）一致，告诉稚奴："从今往后，你只有一个<span class="vocab-highlight" data-word="name">name</span>（名字），藏海。"</p>
<p>第二天一早，藏海收拾好<span class="vocab-highlight" data-word="luggage">luggage</span>（行装），前往高明的住处，想要和他<span class="vocab-highlight" data-word="together">together</span>（一同）进京，却发现高明早已离开。</p>
<p>星斗大师为藏海<span class="vocab-highlight" data-word="send">send</span>（送行），嘱咐他在京城务必行事<span class="vocab-highlight" data-word="cautious">cautious</span>（谨慎），无论遇到什么<span class="vocab-highlight" data-word="difficulty">difficulty</span>（困难），都要牢记复仇的<span class="vocab-highlight" data-word="mission">mission</span>（使命）。</p>
<p>最后，星斗叫了一声"稚奴"。</p>
<p>眼前的少年却道："师父，你在叫谁？我叫藏海。从今往后，这<span class="vocab-highlight" data-word="world">world</span>（世界）就没有人叫稚奴了。"</p>
<p>随后转身，<span class="vocab-highlight" data-word="step">step</span>（踏上）了前往京城的道路。</p>

<p style="text-align:center;color:#c9a84c;margin-top:32px;font-weight:700">—— 第 2 集完 · 共 110 词 ——</p>`
        },
        {
            id: 3,
            title: '第 3 集',
            banner: '',
            wordCount: 109,
            words: [
                {id:1, en:"support", ph:"/səˈpɔːrt/", cn:"v. 接应，帮助", ex:'到了京城，去枕楼，会有人<em>support</em>你，"'},
                {id:2, en:"obsession", ph:"/əbˈseʃn/", cn:"n. 执念", ex:'藏海就这样辞别了师父，背负着复仇的<em>obsession</em>，一路乘船搭车，孤身一人depart去京城。'},
                {id:3, en:"depart", ph:"/dɪˈpɑːrt/", cn:"v. 奔赴", ex:'藏海就这样辞别了师父，背负着复仇的obsession，一路乘船搭车，孤身一人<em>depart</em>去京城。'},
                {id:4, en:"expectation", ph:"/ˌekspekˈteɪʃn/", cn:"n. 期许", ex:'既对前路有一些<em>expectation</em>，也深知京城乃龙潭虎穴，步步皆需cautious。'},
                {id:5, en:"cautious", ph:"/ˈkɔːʃəs/", cn:"adj. 谨慎", ex:'既对前路有一些expectation，也深知京城乃龙潭虎穴，步步皆需<em>cautious</em>。'},
                {id:6, en:"instruction", ph:"/ɪnˈstrʌkʃn/", cn:"n. 嘱托", ex:'遵照行前的<em>instruction</em>，他入京后的第一件事，便是前往约定的接应之地——枕楼。'},
                {id:7, en:"gather", ph:"/ˈɡæðər/", cn:"v. 云集", ex:'枕楼是京城首屈一指的风月雅楼，达官显贵<em>gather</em>在此，丝竹管弦不绝，歌舞升平，一派prosperou...'},
                {id:8, en:"prosperous", ph:"/ˈprɑːspərəs/", cn:"adj. 繁华的", ex:'...，丝竹管弦不绝，歌舞升平，一派<em>prosperous</em>盛景。'},
                {id:9, en:"shout", ph:"/ʃaʊt/", cn:"v. 吆喝", ex:'刚到了这儿，便听到楼中小二<em>shout</em>道："'},
                {id:10, en:"shadow", ph:"/ˈʃædoʊ/", cn:"n. 影", ex:'望月阁八公子的<em>shadow</em>戏，不可不看哪！'},
                {id:11, en:"audience", ph:"/ˈɔːdiəns/", cn:"n. 观众", ex:'藏海也就跟着<em>audience</em>上前，看到台前更是一片lively景象。'},
                {id:12, en:"lively", ph:"/ˈlaɪvli/", cn:"adj. 热闹", ex:'藏海也就跟着audience上前，看到台前更是一片<em>lively</em>景象。'},
                {id:13, en:"rule", ph:"/ruːl/", cn:"n. 规矩", ex:'不懂这里<em>rule</em>的藏海直接到了楼上，找了个view好的位置就坐了下来。'},
                {id:14, en:"view", ph:"/vjuː/", cn:"n. 视野", ex:'不懂这里rule的藏海直接到了楼上，找了个<em>view</em>好的位置就坐了下来。'},
                {id:15, en:"observe", ph:"/əbˈzɜːrv/", cn:"v. 打量", ex:'片刻后，有楼中小二上前<em>observe</em>他，语气有些hesitant，按枕楼convention问道："'},
                {id:16, en:"hesitant", ph:"/ˈhezɪtənt/", cn:"adj. 迟疑", ex:'片刻后，有楼中小二上前observe他，语气有些<em>hesitant</em>，按枕楼convention问道："'},
                {id:17, en:"convention", ph:"/kənˈvenʃn/", cn:"n. 惯例", ex:'片刻后，有楼中小二上前observe他，语气有些hesitant，按枕楼<em>convention</em>问道："'},
                {id:18, en:"clothing", ph:"/ˈkloʊðɪŋ/", cn:"n. 衣着", ex:'小二打量了一番藏海朴素的的<em>clothing</em>，更是有点unbelievable，问："'},
                {id:19, en:"unbelievable", ph:"/ˌʌnbɪˈliːvəbl/", cn:"adj. 不可置信", ex:'小二打量了一番藏海朴素的的clothing，更是有点<em>unbelievable</em>，问："'},
                {id:20, en:"figure", ph:"/ˈfɪɡjər/", cn:"n. 身影", ex:'就在藏海也陷入疑惑的时候，一位女子的<em>figure</em>缓步而来。'},
                {id:21, en:"exquisite", ph:"/ɪkˈskwɪzɪt/", cn:"adj. 精致的", ex:'来人正是香暗荼，她手持一盏<em>exquisite</em>宫灯，一眼便看穿了藏海的immature，浅笑开口："'},
                {id:22, en:"immature", ph:"/ˌɪməˈtʃʊr/", cn:"adj. 生涩", ex:'来人正是香暗荼，她手持一盏exquisite宫灯，一眼便看穿了藏海的<em>immature</em>，浅笑开口："'},
                {id:23, en:"expense", ph:"/ɪkˈspens/", cn:"n. 花费", ex:'，点了灯就是包下了这一晚所有人的<em>expense</em>，一盏灯的价格是一千两...立刻改口："'},
                {id:24, en:"money", ph:"/ˈmʌni/", cn:"n. 钱", ex:'实不相瞒，我没有那么多<em>money</em>。'},
                {id:25, en:"perform", ph:"/pərˈfɔːrm/", cn:"v. 开演", ex:'香老板倒也没有继续为难，带着藏海到了楼下，望向大堂中央即将<em>perform</em>的平影戏，提到可以收点小钱为藏...'},
                {id:26, en:"explain", ph:"/ɪkˈspleɪn/", cn:"v. 讲解", ex:'...平影戏，提到可以收点小钱为藏海<em>explain</em>今日这出戏。'},
                {id:27, en:"drum", ph:"/drʌm/", cn:"n. 鼓", ex:'二人并肩而立，平影戏的锣<em>drum</em>声响起，戏幕拉开，一场以皮影metaphor朝堂的大戏，正式上演。'},
                {id:28, en:"metaphor", ph:"/ˈmetəfɔːr/", cn:"n. 隐喻", ex:'二人并肩而立，平影戏的锣drum声响起，戏幕拉开，一场以皮影<em>metaphor</em>朝堂的大戏，正式上演。'},
                {id:29, en:"secret", ph:"/ˈsiːkrət/", cn:"n. 秘辛", ex:'戏词婉转，暗藏机锋，字字句句皆是京城最核心的<em>secret</em>。'},
                {id:30, en:"stare", ph:"/ster/", cn:"v. 盯", ex:'藏海<em>stare</em>着戏幕，率先开口："'},
                {id:31, en:"praise", ph:"/preɪz/", cn:"n. 赞许", ex:'香暗荼眼中掠过一丝<em>praise</em>："'},
                {id:32, en:"emperor", ph:"/ˈempərər/", cn:"n. 帝", ex:'这凤凰，是三日前驾崩的太后；这条龙，是先<em>emperor</em>；而身侧的锦鲤，是先帝最adore的李贵太妃。'},
                {id:33, en:"adore", ph:"/əˈdɔːr/", cn:"v. 宠爱", ex:'这凤凰，是三日前驾崩的太后；这条龙，是先emperor；而身侧的锦鲤，是先帝最<em>adore</em>的李贵太妃。'},
                {id:34, en:"dispute", ph:"/dɪˈspjuːt/", cn:"n. 纠葛", ex:'戏词再起，道尽后宫与朝堂的<em>dispute</em>，香暗荼继续解释道，太后薨逝，依ancestor制应该与先帝合...'},
                {id:35, en:"ancestor", ph:"/ˈænsestər/", cn:"n. 祖", ex:'...香暗荼继续解释道，太后薨逝，依<em>ancestor</em>制应该与先帝合葬。'},
                {id:36, en:"tomb", ph:"/tuːm/", cn:"n. 陵寝", ex:'可先帝<em>tomb</em>之侧，早已有李贵太妃陪葬，这道puzzle，就抛给了皇上。'},
                {id:37, en:"puzzle", ph:"/ˈpʌzl/", cn:"n. 难题", ex:'可先帝tomb之侧，早已有李贵太妃陪葬，这道<em>puzzle</em>，就抛给了皇上。'},
                {id:38, en:"offspring", ph:"/ˈɔːfsprɪŋ/", cn:"n. 后代", ex:'皇上没有<em>offspring</em>，多年来被朝臣轮番force立嗣。'},
                {id:39, en:"force", ph:"/fɔːrs/", cn:"v. 逼迫", ex:'皇上没有offspring，多年来被朝臣轮番<em>force</em>立嗣。'},
                {id:40, en:"official", ph:"/əˈfɪʃl/", cn:"n. 官", ex:'太后驾崩后，文<em>official</em>更是变本加厉，或上书死谏，或宫门跪请，执意要按宗法迁出李贵太妃，成全太后...'},
                {id:41, en:"divide", ph:"/dɪˈvaɪd/", cn:"v. 分", ex:'如今朝堂一<em>divide</em>为二，conflict不休。'},
                {id:42, en:"conflict", ph:"/ˈkɑːnflɪkt/", cn:"n. 纷争", ex:'如今朝堂一divide为二，<em>conflict</em>不休。'},
                {id:43, en:"cock", ph:"/kɑːk/", cn:"n. 雄鸡", ex:'戏里的蟾蜍便是暗指朝中文官，而被簇拥的<em>cock</em>便是临淄王。'},
                {id:44, en:"hide", ph:"/haɪd/", cn:"v. 隐于", ex:'戏幕翻涌，金龙振翅冲天，<em>hide</em>云雾，再无踪迹。'},
                {id:45, en:"eagerly", ph:"/ˈiːɡərli/", cn:"adv. 急切地", ex:'藏海<em>eagerly</em>追问："'},
                {id:46, en:"calm", ph:"/kɑːm/", cn:"adj. 淡然", ex:'香暗荼语气<em>calm</em>："'},
                {id:47, en:"tiger", ph:"/ˈtaɪɡər/", cn:"n. 虎", ex:'话音未落，白<em>tiger</em>皮影踏风而出，powerful。'},
                {id:48, en:"powerful", ph:"/ˈpaʊərfl/", cn:"adj. 威势凛然", ex:'话音未落，白tiger皮影踏风而出，<em>powerful</em>。'},
                {id:49, en:"dispose", ph:"/dɪˈspoʊz/", cn:"v. 处置", ex:'太后下葬事宜，本交由工部与钦天监全权<em>dispose</em>，而工部庄之甫是平津侯的儿子。'},
                {id:50, en:"protect", ph:"/prəˈtekt/", cn:"v. 保护", ex:'为<em>protect</em>儿子，平津侯只能硬着头皮上了。'},
                {id:51, en:"observation", ph:"/ˌɑːbzərˈveɪʃn/", cn:"n. 观察力", ex:'看戏之时，藏海敏锐的<em>observation</em>捕捉到了周遭暗藏的危险。'},
                {id:52, en:"weapon", ph:"/ˈwepən/", cn:"n. 凶器", ex:'他余光扫过四周，看到藏着<em>weapon</em>的人，心头警铃大作，当即收敛神色，起身便要leave。'},
                {id:53, en:"leave", ph:"/liːv/", cn:"v. 撤离", ex:'他余光扫过四周，看到藏着weapon的人，心头警铃大作，当即收敛神色，起身便要<em>leave</em>。'},
                {id:54, en:"escape", ph:"/ɪˈskeɪp/", cn:"v. 逃跑", ex:'姑娘你也赶紧<em>escape</em>吧。'},
                {id:55, en:"spy", ph:"/spaɪ/", cn:"n. 眼线", ex:'香暗荼听完倒很是镇定，告诉藏海那些是督卫司的人，曹公公麾下厂卫，京城内外，遍布他的<em>spy</em>。'},
                {id:56, en:"discuss", ph:"/dɪˈskʌs/", cn:"v. 议论", ex:'藏海眉头紧锁，震惊于这样八公子还敢当众<em>discuss</em>宫闱、影射君王，岂不是自投罗网？'},
                {id:57, en:"appearance", ph:"/əˈpɪrəns/", cn:"n. 长相", ex:'之前从未见过八公子的<em>appearance</em>，原来是这样一位handsome公子！'},
                {id:58, en:"handsome", ph:"/ˈhænsəm/", cn:"adj. 俊俏的", ex:'之前从未见过八公子的appearance，原来是这样一位<em>handsome</em>公子！'},
                {id:59, en:"personally", ph:"/ˈpɜːrsənəli/", cn:"adv. 亲自", ex:'没想到今日台上的竟不是您的真身，您<em>personally</em>和我们一同赏戏，真是好雅兴啊！'},
                {id:60, en:"run", ph:"/rʌn/", cn:"v. 跑", ex:'没人见过八公子，现在你就是八公子，还不快<em>run</em>！'},
                {id:61, en:"argue", ph:"/ˈɑːrɡjuː/", cn:"v. 辩驳", ex:'藏海又惊又悟，根本来不及<em>argue</em>，厂卫已闻声围拢而来。'},
                {id:62, en:"chase", ph:"/tʃeɪs/", cn:"v. 追", ex:'身后厂卫紧<em>chase</em>不舍，脚步声、呵斥声交织，藏海穿梭在京城alley之中，几番辗转，竟被逼入死巷。'},
                {id:63, en:"alley", ph:"/ˈæli/", cn:"n. 街巷", ex:'身后厂卫紧chase不舍，脚步声、呵斥声交织，藏海穿梭在京城<em>alley</em>之中，几番辗转，竟被逼入死巷。'},
                {id:64, en:"await", ph:"/əˈweɪt/", cn:"v. 等候", ex:'危急关头，一道身影闪出，正是<em>await</em>多时的高明！'},
                {id:65, en:"urge", ph:"/ɜːrdʒ/", cn:"v. 催促", ex:'他迅速拉住藏海，将一件普通文士长衫披在他身上，低声<em>urge</em>换装。'},
                {id:66, en:"lie", ph:"/laɪ/", cn:"v. 谎称", ex:'就在厂卫追到眼前的时候，高明从容拱手，语气自然地<em>lie</em>："'},
                {id:67, en:"drunk", ph:"/drʌŋk/", cn:"adj. 喝醉", ex:'王公子，你<em>drunk</em>了！'},
                {id:68, en:"ordinary", ph:"/ˈɔːrdneri/", cn:"adj. 寻常", ex:'厂卫打量二人，见衣着<em>ordinary</em>、神色坦荡，并无可疑之处，转身离去。'},
                {id:69, en:"remove", ph:"/rɪˈmuːv/", cn:"v. 解除", ex:'眼下的危机<em>remove</em>，师徒二人辗转至一处僻静inn。'},
                {id:70, en:"inn", ph:"/ɪn/", cn:"n. 客栈", ex:'眼下的危机remove，师徒二人辗转至一处僻静<em>inn</em>。'},
                {id:71, en:"deadlock", ph:"/ˈdedlɑːk/", cn:"n. 僵局", ex:'...dispute、当前太后合葬的<em>deadlock</em>，一五一十全盘告知，尤其提到了平津侯正在做的事，也...'},
                {id:72, en:"seek", ph:"/siːk/", cn:"v. 寻找", ex:'...平津侯正在做的事，也就是满京城<em>seek</em>风水先生。'},
                {id:73, en:"core", ph:"/kɔːr/", cn:"n. 核心", ex:'高明听罢，道破这件事<em>core</em>，这表面上看是新旧朝臣的礼仪之争，但实际上是皇上和朝廷的礼法之争。'},
                {id:74, en:"edge", ph:"/edʒ/", cn:"n. 锋芒", ex:'藏海闻言，眼中骤然亮起<em>edge</em>，复仇的棋局，终于有了第一步的落子之处。'},
                {id:75, en:"cunning", ph:"/ˈkʌnɪŋ/", cn:"adj. 狡黠", ex:'他挺直脊背，<em>cunning</em>一笑，问道："'},
                {id:76, en:"thought", ph:"/θɔːt/", cn:"n. 心思", ex:'高明也看懂了他的<em>thought</em>，微微一笑："'},
                {id:77, en:"mess", ph:"/mes/", cn:"n. 乱作一团", ex:'第二天，京城街头已然<em>mess</em>。'},
                {id:78, en:"troop", ph:"/truːp/", cn:"n. 兵马", ex:'平津侯的<em>troop</em>遍布街巷，大肆arrest风水先生，但凡与丧葬、堪舆相关之人，无一幸免。'},
                {id:79, en:"arrest", ph:"/əˈrest/", cn:"v. 抓捕", ex:'平津侯的troop遍布街巷，大肆<em>arrest</em>风水先生，但凡与丧葬、堪舆相关之人，无一幸免。'},
                {id:80, en:"kidnap", ph:"/ˈkɪdnæp/", cn:"v. 掳走", ex:'官兵为了凑数，甚至当街<em>kidnap</em>一名懵懂幼童，孩童啼哭不止，路人敢怒不敢言。'},
                {id:81, en:"hesitate", ph:"/ˈhezɪteɪt/", cn:"v. 犹豫", ex:'他不再<em>hesitate</em>，起身快步走出客栈，径直走towards带队官兵："'},
                {id:82, en:"towards", ph:"/tɔːrdz/", cn:"prep. 向", ex:'他不再hesitate，起身快步走出客栈，径直走<em>towards</em>带队官兵："'},
                {id:83, en:"willing", ph:"/ˈwɪlɪŋ/", cn:"adj. 愿意", ex:'草民对风水堪舆略同一二，<em>willing</em>前往。'},
                {id:84, en:"release", ph:"/rɪˈliːs/", cn:"v. 释放", ex:'不知大人是否可以<em>release</em>这个孩子？'},
                {id:85, en:"replace", ph:"/rɪˈpleɪs/", cn:"v. 顶替", ex:'官兵见竟然有人主动<em>replace</em>，就将藏海与一众被抓的术士一同押上carriage，疾驰而去。'},
                {id:86, en:"carriage", ph:"/ˈkærɪdʒ/", cn:"n. 马车", ex:'官兵见竟然有人主动replace，就将藏海与一众被抓的术士一同押上<em>carriage</em>，疾驰而去。'},
                {id:87, en:"anxious", ph:"/ˈæŋkʃəs/", cn:"adj. 焦虑惶恐", ex:'车内，其余被抓之人都很是<em>anxious</em>，哭嚎不止，人人都以为此去皇陵，必死undoubtedly。'},
                {id:88, en:"undoubtedly", ph:"/ʌnˈdaʊtɪdli/", cn:"adv. 无疑", ex:'车内，其余被抓之人都很是anxious，哭嚎不止，人人都以为此去皇陵，必死<em>undoubtedly</em>。'},
                {id:89, en:"rest", ph:"/rest/", cn:"v. 休息", ex:'唯有藏海神色平静，甚至开始闭目<em>rest</em>，看起来是心中早已盘算好一切。'},
                {id:90, en:"lock", ph:"/lɑːk/", cn:"v. 锁", ex:'不多时，马车抵达皇陵外，众人被官兵押解下车，尽数<em>lock</em>进幽暗的皇陵墓道之中。'},
                {id:91, en:"dense", ph:"/dens/", cn:"adj. 密布", ex:'墓道之内，阴气森森，机关<em>dense</em>，压抑的atmosphere让人窒息。'},
                {id:92, en:"atmosphere", ph:"/ˈætməsfɪr/", cn:"n. 气氛", ex:'墓道之内，阴气森森，机关dense，压抑的<em>atmosphere</em>让人窒息。'},
                {id:93, en:"explore", ph:"/ɪkˈsplɔːr/", cn:"v. 摸索", ex:'众人战战兢兢<em>explore</em>着前进，有个人慌乱中踩错了一块tile，瞬间trigger了机关，暗arro...'},
                {id:94, en:"tile", ph:"/taɪl/", cn:"n. 砖", ex:'众人战战兢兢explore着前进，有个人慌乱中踩错了一块<em>tile</em>，瞬间trigger了机关，暗arro...'},
                {id:95, en:"trigger", ph:"/ˈtrɪɡər/", cn:"v. 触发", ex:'...慌乱中踩错了一块tile，瞬间<em>trigger</em>了机关，暗arrow破空而出，那人当场殒命，惨叫声e...'},
                {id:96, en:"arrow", ph:"/ˈæroʊ/", cn:"n. 箭", ex:'...，瞬间trigger了机关，暗<em>arrow</em>破空而出，那人当场殒命，惨叫声echo在墓道之中。'},
                {id:97, en:"echo", ph:"/ˈekoʊ/", cn:"v. 回荡", ex:'...破空而出，那人当场殒命，惨叫声<em>echo</em>在墓道之中。'},
                {id:98, en:"freeze", ph:"/friːz/", cn:"v. 吓呆", ex:'剩余众人吓得魂飞魄散，<em>freeze</em>在原地不敢动弹，彻底乱了方寸。'},
                {id:99, en:"certain", ph:"/ˈsɜːrtn/", cn:"adj. 笃定", ex:'大家见藏海神色镇定、语气<em>certain</em>，便纷纷听从他的guidance，小心翼翼地跟着他往前走。'},
                {id:100, en:"guidance", ph:"/ˈɡaɪdns/", cn:"n. 指挥", ex:'大家见藏海神色镇定、语气certain，便纷纷听从他的<em>guidance</em>，小心翼翼地跟着他往前走。'},
                {id:101, en:"knowledge", ph:"/ˈnɑːlɪdʒ/", cn:"n. 知识", ex:'藏海凭借着多年所学的堪舆营造之术和机关<em>knowledge</em>，仔细observe着皇陵的layout，精准...'},
                {id:102, en:"layout", ph:"/ˈleɪaʊt/", cn:"n. 布局", ex:'...e，仔细observe着皇陵的<em>layout</em>，精准judge出安全的地砖位置，一边走，一边叮嘱大家...'},
                {id:103, en:"judge", ph:"/dʒʌdʒ/", cn:"v. 判断", ex:'...ve着皇陵的layout，精准<em>judge</em>出安全的地砖位置，一边走，一边叮嘱大家分别要踩哪块砖。'},
                {id:104, en:"strict", ph:"/strɪkt/", cn:"adj. 严密", ex:'我还不能走，这是皇陵的墓道，比一般的墓室防范<em>strict</em>得多。'},
                {id:105, en:"activate", ph:"/ˈæktɪveɪt/", cn:"v. 启动", ex:'我若是离开这块砖出去，你们脚下的砖就会受力偏移，断骨绦的机关就会<em>activate</em>。'},
                {id:106, en:"slack", ph:"/slæk/", cn:"n. 懈怠", ex:'众人闻言，不敢有丝毫<em>slack</em>，严格按照藏海的指挥，一步步向出口靠近。'},
                {id:107, en:"tear", ph:"/tɪr/", cn:"n. 泪水", ex:'藏海心痛又无奈地回头看着大家，强忍着<em>tear</em>。'},
                {id:108, en:"swift", ph:"/swɪft/", cn:"adj. 凌厉", ex:'而另一边，平津侯庄芦隐正在军营中大展剑术，身姿<em>swift</em>，气势逼人。'},
                {id:109, en:"undertake", ph:"/ˌʌndərˈteɪk/", cn:"v. 接手", ex:'他心中清楚，太后合葬一事，他本就是<em>undertake</em>了一个烫手山芋，抓捕风水先生，不过是他自保的一步棋...'}
            ],
            story: `<h2>🏯 藏海传 · 第 3 集</h2>
<p>"到了京城，去枕楼，会有人<span class="vocab-highlight" data-word="support">support</span>（接应，帮助）你，"星斗大师对藏海说道，"走吧。"</p>
<p>藏海就这样辞别了师父，背负着复仇的<span class="vocab-highlight" data-word="obsession">obsession</span>（执念），一路乘船搭车，孤身一人<span class="vocab-highlight" data-word="depart">depart</span>（奔赴）去京城。既对前路有一些<span class="vocab-highlight" data-word="expectation">expectation</span>（期许），也深知京城乃龙潭虎穴，步步皆需<span class="vocab-highlight" data-word="cautious">cautious</span>（谨慎）。</p>
<p>遵照行前的<span class="vocab-highlight" data-word="instruction">instruction</span>（嘱托），他入京后的第一件事，便是前往约定的接应之地——枕楼。枕楼是京城首屈一指的风月雅楼，达官显贵<span class="vocab-highlight" data-word="gather">gather</span>（云集）在此，丝竹管弦不绝，歌舞升平，一派<span class="vocab-highlight" data-word="prosperous">prosperous</span>（繁华的）盛景。</p>
<p>刚到了这儿，便听到楼中小二<span class="vocab-highlight" data-word="shout">shout</span>（吆喝）道："望月阁八公子的<span class="vocab-highlight" data-word="shadow">shadow</span>（影）戏，不可不看哪！" 藏海也就跟着<span class="vocab-highlight" data-word="audience">audience</span>（观众）上前，看到台前更是一片<span class="vocab-highlight" data-word="lively">lively</span>（热闹）景象。</p>
<p>不懂这里<span class="vocab-highlight" data-word="rule">rule</span>（规矩）的藏海直接到了楼上，找了个<span class="vocab-highlight" data-word="view">view</span>（视野）好的位置就坐了下来。片刻后，有楼中小二上前<span class="vocab-highlight" data-word="observe">observe</span>（打量）他，语气有些<span class="vocab-highlight" data-word="hesitant">hesitant</span>（迟疑），按枕楼<span class="vocab-highlight" data-word="convention">convention</span>（惯例）问道："公子，您这是...？"藏海不明其意，直接说道："上壶茶，把灯点上！" 小二打量了一番藏海朴素的的<span class="vocab-highlight" data-word="clothing">clothing</span>（衣着），更是有点<span class="vocab-highlight" data-word="unbelievable">unbelievable</span>（不可置信），问："公子，您要点灯？？"</p>
<p>就在藏海也陷入疑惑的时候，一位女子的<span class="vocab-highlight" data-word="figure">figure</span>（身影）缓步而来。来人正是香暗荼，她手持一盏<span class="vocab-highlight" data-word="exquisite">exquisite</span>（精致的）宫灯，一眼便看穿了藏海的<span class="vocab-highlight" data-word="immature">immature</span>（生涩），浅笑开口："你的灯。"一番调笑后藏海才知道，自己坐的这个位置叫"朱雀头"，点了灯就是包下了这一晚所有人的<span class="vocab-highlight" data-word="expense">expense</span>（花费），一盏灯的价格是一千两...立刻改口："这灯我不点了！这位置我也不坐了！实不相瞒，我没有那么多<span class="vocab-highlight" data-word="money">money</span>（钱）。"</p>
<p>香老板倒也没有继续为难，带着藏海到了楼下，望向大堂中央即将<span class="vocab-highlight" data-word="perform">perform</span>（开演）的平影戏，提到可以收点小钱为藏海<span class="vocab-highlight" data-word="explain">explain</span>（讲解）今日这出戏。二人并肩而立，平影戏的锣<span class="vocab-highlight" data-word="drum">drum</span>（鼓）声响起，戏幕拉开，一场以皮影<span class="vocab-highlight" data-word="metaphor">metaphor</span>（隐喻）朝堂的大戏，正式上演。</p>
<p>戏词婉转，暗藏机锋，字字句句皆是京城最核心的<span class="vocab-highlight" data-word="secret">secret</span>（秘辛）。藏海<span class="vocab-highlight" data-word="stare">stare</span>（盯）着戏幕，率先开口："这只凤凰，便是太后。"香暗荼眼中掠过一丝<span class="vocab-highlight" data-word="praise">praise</span>（赞许）："这凤凰，是三日前驾崩的太后；这条龙，是先<span class="vocab-highlight" data-word="emperor">emperor</span>（帝）；而身侧的锦鲤，是先帝最<span class="vocab-highlight" data-word="adore">adore</span>（宠爱）的李贵太妃。"</p>
<p>戏词再起，道尽后宫与朝堂的<span class="vocab-highlight" data-word="dispute">dispute</span>（纠葛），香暗荼继续解释道，太后薨逝，依<span class="vocab-highlight" data-word="ancestor">ancestor</span>（祖）制应该与先帝合葬。可先帝<span class="vocab-highlight" data-word="tomb">tomb</span>（陵寝）之侧，早已有李贵太妃陪葬，这道<span class="vocab-highlight" data-word="puzzle">puzzle</span>（难题），就抛给了皇上。皇上没有<span class="vocab-highlight" data-word="offspring">offspring</span>（后代），多年来被朝臣轮番<span class="vocab-highlight" data-word="force">force</span>（逼迫）立嗣。太后驾崩后，文<span class="vocab-highlight" data-word="official">official</span>（官）更是变本加厉，或上书死谏，或宫门跪请，执意要按宗法迁出李贵太妃，成全太后合葬之礼。如今朝堂一<span class="vocab-highlight" data-word="divide">divide</span>（分）为二，<span class="vocab-highlight" data-word="conflict">conflict</span>（纷争）不休。戏里的蟾蜍便是暗指朝中文官，而被簇拥的<span class="vocab-highlight" data-word="cock">cock</span>（雄鸡）便是临淄王。</p>
<p>戏幕翻涌，金龙振翅冲天，<span class="vocab-highlight" data-word="hide">hide</span>（隐于）云雾，再无踪迹。藏海<span class="vocab-highlight" data-word="eagerly">eagerly</span>（急切地）追问："皇上怎么说？"香暗荼语气<span class="vocab-highlight" data-word="calm">calm</span>（淡然）："这事，皇上不管了。"话音未落，白<span class="vocab-highlight" data-word="tiger">tiger</span>（虎）皮影踏风而出，<span class="vocab-highlight" data-word="powerful">powerful</span>（威势凛然）。这便是今天的主角——平津侯庄芦隐。太后下葬事宜，本交由工部与钦天监全权<span class="vocab-highlight" data-word="dispose">dispose</span>（处置），而工部庄之甫是平津侯的儿子。为<span class="vocab-highlight" data-word="protect">protect</span>（保护）儿子，平津侯只能硬着头皮上了。</p>
<p>看戏之时，藏海敏锐的<span class="vocab-highlight" data-word="observation">observation</span>（观察力）捕捉到了周遭暗藏的危险。他余光扫过四周，看到藏着<span class="vocab-highlight" data-word="weapon">weapon</span>（凶器）的人，心头警铃大作，当即收敛神色，起身便要<span class="vocab-highlight" data-word="leave">leave</span>（撤离）。"今日这里，恐怕要有大事发生。姑娘你也赶紧<span class="vocab-highlight" data-word="escape">escape</span>（逃跑）吧。"香暗荼听完倒很是镇定，告诉藏海那些是督卫司的人，曹公公麾下厂卫，京城内外，遍布他的<span class="vocab-highlight" data-word="spy">spy</span>（眼线）。藏海眉头紧锁，震惊于这样八公子还敢当众<span class="vocab-highlight" data-word="discuss">discuss</span>（议论）宫闱、影射君王，岂不是自投罗网？</p>
<p>香老板眸光一转，计上心来，对着藏海突然大声道："原来阁下就是八公子啊！之前从未见过八公子的<span class="vocab-highlight" data-word="appearance">appearance</span>（长相），原来是这样一位<span class="vocab-highlight" data-word="handsome">handsome</span>（俊俏的）公子！没想到今日台上的竟不是您的真身，您<span class="vocab-highlight" data-word="personally">personally</span>（亲自）和我们一同赏戏，真是好雅兴啊！"又凑近藏海耳畔低声说："没人见过八公子，现在你就是八公子，还不快<span class="vocab-highlight" data-word="run">run</span>（跑）！"</p>
<p>藏海又惊又悟，根本来不及<span class="vocab-highlight" data-word="argue">argue</span>（辩驳），厂卫已闻声围拢而来。他当机立断，纵身奔逃。身后厂卫紧<span class="vocab-highlight" data-word="chase">chase</span>（追）不舍，脚步声、呵斥声交织，藏海穿梭在京城<span class="vocab-highlight" data-word="alley">alley</span>（街巷）之中，几番辗转，竟被逼入死巷。危急关头，一道身影闪出，正是<span class="vocab-highlight" data-word="await">await</span>（等候）多时的高明！他迅速拉住藏海，将一件普通文士长衫披在他身上，低声<span class="vocab-highlight" data-word="urge">urge</span>（催促）换装。</p>
<p>就在厂卫追到眼前的时候，高明从容拱手，语气自然地<span class="vocab-highlight" data-word="lie">lie</span>（谎称）："王公子，你<span class="vocab-highlight" data-word="drunk">drunk</span>（喝醉）了！怎么这酒量不行了啊..." 厂卫打量二人，见衣着<span class="vocab-highlight" data-word="ordinary">ordinary</span>（寻常）、神色坦荡，并无可疑之处，转身离去。</p>
<p>眼下的危机<span class="vocab-highlight" data-word="remove">remove</span>（解除），师徒二人辗转至一处僻静<span class="vocab-highlight" data-word="inn">inn</span>（客栈）。藏海气喘吁吁地说："师父，没想到来京城接我的人，是您啊！"随后，藏海将枕楼中所见所闻、皮影戏隐喻的朝堂<span class="vocab-highlight" data-word="dispute">dispute</span>（纷争）、当前太后合葬的<span class="vocab-highlight" data-word="deadlock">deadlock</span>（僵局），一五一十全盘告知，尤其提到了平津侯正在做的事，也就是满京城<span class="vocab-highlight" data-word="seek">seek</span>（寻找）风水先生。</p>
<p>高明听罢，道破这件事<span class="vocab-highlight" data-word="core">core</span>（核心），这表面上看是新旧朝臣的礼仪之争，但实际上是皇上和朝廷的礼法之争。藏海闻言，眼中骤然亮起<span class="vocab-highlight" data-word="edge">edge</span>（锋芒），复仇的棋局，终于有了第一步的落子之处。他挺直脊背，<span class="vocab-highlight" data-word="cunning">cunning</span>（狡黠）一笑，问道："师父，您看我像风水先生吗？"高明也看懂了他的<span class="vocab-highlight" data-word="thought">thought</span>（心思），微微一笑："想好怎么入局了？"</p>
<p>第二天，京城街头已然<span class="vocab-highlight" data-word="mess">mess</span>（乱作一团）。平津侯的<span class="vocab-highlight" data-word="troop">troop</span>（兵马）遍布街巷，大肆<span class="vocab-highlight" data-word="arrest">arrest</span>（抓捕）风水先生，但凡与丧葬、堪舆相关之人，无一幸免。官兵为了凑数，甚至当街<span class="vocab-highlight" data-word="kidnap">kidnap</span>（掳走）一名懵懂幼童，孩童啼哭不止，路人敢怒不敢言。</p>
<p>客栈窗边，藏海将这一幕尽收眼底。他不再<span class="vocab-highlight" data-word="hesitate">hesitate</span>（犹豫），起身快步走出客栈，径直走<span class="vocab-highlight" data-word="towards">towards</span>（向）带队官兵："草民对风水堪舆略同一二，<span class="vocab-highlight" data-word="willing">willing</span>（愿意）前往。不知大人是否可以<span class="vocab-highlight" data-word="release">release</span>（释放）这个孩子？"官兵见竟然有人主动<span class="vocab-highlight" data-word="replace">replace</span>（顶替），就将藏海与一众被抓的术士一同押上<span class="vocab-highlight" data-word="carriage">carriage</span>（马车），疾驰而去。</p>
<p>车内，其余被抓之人都很是<span class="vocab-highlight" data-word="anxious">anxious</span>（焦虑惶恐），哭嚎不止，人人都以为此去皇陵，必死<span class="vocab-highlight" data-word="undoubtedly">undoubtedly</span>（无疑）。唯有藏海神色平静，甚至开始闭目<span class="vocab-highlight" data-word="rest">rest</span>（休息），看起来是心中早已盘算好一切。</p>
<p>不多时，马车抵达皇陵外，众人被官兵押解下车，尽数<span class="vocab-highlight" data-word="lock">lock</span>（锁）进幽暗的皇陵墓道之中。墓道之内，阴气森森，机关<span class="vocab-highlight" data-word="dense">dense</span>（密布），压抑的<span class="vocab-highlight" data-word="atmosphere">atmosphere</span>（气氛）让人窒息。</p>
<p>众人战战兢兢<span class="vocab-highlight" data-word="explore">explore</span>（摸索）着前进，有个人慌乱中踩错了一块<span class="vocab-highlight" data-word="tile">tile</span>（砖），瞬间<span class="vocab-highlight" data-word="trigger">trigger</span>（触发）了机关，暗<span class="vocab-highlight" data-word="arrow">arrow</span>（箭）破空而出，那人当场殒命，惨叫声<span class="vocab-highlight" data-word="echo">echo</span>（回荡）在墓道之中。剩余众人吓得魂飞魄散，<span class="vocab-highlight" data-word="freeze">freeze</span>（吓呆）在原地不敢动弹，彻底乱了方寸。</p>
<p>藏海沉声开口，让大家按着自己说的方位走。大家见藏海神色镇定、语气<span class="vocab-highlight" data-word="certain">certain</span>（笃定），便纷纷听从他的<span class="vocab-highlight" data-word="guidance">guidance</span>（指挥），小心翼翼地跟着他往前走。藏海凭借着多年所学的堪舆营造之术和机关<span class="vocab-highlight" data-word="knowledge">knowledge</span>（知识），仔细<span class="vocab-highlight" data-word="observe">observe</span>（观察）着皇陵的<span class="vocab-highlight" data-word="layout">layout</span>（布局），精准<span class="vocab-highlight" data-word="judge">judge</span>（判断）出安全的地砖位置，一边走，一边叮嘱大家分别要踩哪块砖。</p>
<p>藏海率先走到出口处，回头对着剩下的人说道："我到头了。" 大家<span class="vocab-highlight" data-word="eagerly">eagerly</span>（急切地）说道："那你开门出去啊！"藏海却摇了摇头，<span class="vocab-highlight" data-word="explain">explain</span>（解释）道："我还不能走，这是皇陵的墓道，比一般的墓室防范<span class="vocab-highlight" data-word="strict">strict</span>（严密）得多。我若是离开这块砖出去，你们脚下的砖就会受力偏移，断骨绦的机关就会<span class="vocab-highlight" data-word="activate">activate</span>（启动）。先别急，你们继续按我说的走。"众人闻言，不敢有丝毫<span class="vocab-highlight" data-word="slack">slack</span>（懈怠），严格按照藏海的指挥，一步步向出口靠近。</p>
<p>眼看就要抵达皇陵出口，可是，又有人<span class="vocab-highlight" data-word="trigger">trigger</span>（触发）了断骨绦，再次一片哀嚎。藏海心痛又无奈地回头看着大家，强忍着<span class="vocab-highlight" data-word="tear">tear</span>（泪水）。</p>
<p>而另一边，平津侯庄芦隐正在军营中大展剑术，身姿<span class="vocab-highlight" data-word="swift">swift</span>（凌厉），气势逼人。他心中清楚，太后合葬一事，他本就是<span class="vocab-highlight" data-word="undertake">undertake</span>（接手）了一个烫手山芋，抓捕风水先生，不过是他自保的一步棋。</p>

<p style="text-align:center;color:#c9a84c;margin-top:32px;font-weight:700">—— 第 3 集完 · 共 109 词 ——</p>`
        },
        {
            id: 4,
            title: '第 4 集',
            banner: '',
            wordCount: 155,
            words: [
                {id:1, en:"insist", ph:"/ɪnˈsɪst/", cn:"v. 坚守", ex:'皇陵之中，藏海<em>insist</em>在门前的地砖上，他真的很想lead大家都走出去。'},
                {id:2, en:"lead", ph:"/liːd/", cn:"v. 带着", ex:'皇陵之中，藏海insist在门前的地砖上，他真的很想<em>lead</em>大家都走出去。'},
                {id:3, en:"avoid", ph:"/əˈvɔɪd/", cn:"v. 躲过", ex:'可最终，大家还是没能<em>avoid</em>机关。'},
                {id:4, en:"alone", ph:"/əˈloʊn/", cn:"adv. 只身一人", ex:'藏海<em>alone</em>推开墓道尽头heavy石门，出口处，早已站着一名身着官服的人，正是平津侯府的储怀明。'},
                {id:5, en:"heavy", ph:"/ˈhevi/", cn:"adj. 沉重的", ex:'藏海alone推开墓道尽头<em>heavy</em>石门，出口处，早已站着一名身着官服的人，正是平津侯府的储怀明。'},
                {id:6, en:"astonish", ph:"/əˈstɑːnɪʃ/", cn:"v. 诧异", ex:'他见藏海竟然走了出来，满脸<em>astonish</em>，语气中带着doubt，开口accuse道："'},
                {id:7, en:"doubt", ph:"/daʊt/", cn:"n. 怀疑", ex:'他见藏海竟然走了出来，满脸astonish，语气中带着<em>doubt</em>，开口accuse道："'},
                {id:8, en:"accuse", ph:"/əˈkjuːz/", cn:"v. 质问", ex:'他见藏海竟然走了出来，满脸astonish，语气中带着doubt，开口<em>accuse</em>道："'},
                {id:9, en:"craftsman", ph:"/ˈkræftsmən/", cn:"n. 工匠", ex:'只有当年修建皇陵的<em>craftsman</em>才知道。'},
                {id:10, en:"descendant", ph:"/dɪˈsendənt/", cn:"n. 后代", ex:'难不成，你是他们的<em>descendant</em>？'},
                {id:11, en:"reply", ph:"/rɪˈplaɪ/", cn:"v. 回应", ex:'藏海低头拱手<em>reply</em>："'},
                {id:12, en:"guess", ph:"/ɡes/", cn:"v. 猜中", ex:'草民只是破解了地宫中断骨绦的机关，性命攸关之际<em>guess</em>，幸得神佛bless罢了。'},
                {id:13, en:"bless", ph:"/bles/", cn:"v. 庇佑", ex:'草民只是破解了地宫中断骨绦的机关，性命攸关之际guess，幸得神佛<em>bless</em>罢了。'},
                {id:14, en:"confront", ph:"/kənˈfrʌnt/", cn:"v. 对峙", ex:'两人正<em>confront</em>的时候，门口传来一声："'},
                {id:15, en:"unharmed", ph:"/ʌnˈhɑːrmd/", cn:"adj. 完好无损的", ex:'他听闻有人从皇陵机关中<em>unharmed</em>走出，特意前来inspect，他的目光scrutinize着藏海...'},
                {id:16, en:"inspect", ph:"/ɪnˈspekt/", cn:"v. 查看", ex:'他听闻有人从皇陵机关中unharmed走出，特意前来<em>inspect</em>，他的目光scrutinize着藏海...'},
                {id:17, en:"scrutinize", ph:"/ˈskruːtənaɪz/", cn:"v. 审视", ex:'...意前来inspect，他的目光<em>scrutinize</em>着藏海。'},
                {id:18, en:"raise", ph:"/reɪz/", cn:"v. 抬", ex:'藏海<em>raise</em>眼望去，看着眼前这个，就是当年kill自己全家的enemy，指尖不自觉地clench，指...'},
                {id:19, en:"kill", ph:"/kɪl/", cn:"v. 杀害", ex:'藏海raise眼望去，看着眼前这个，就是当年<em>kill</em>自己全家的enemy，指尖不自觉地clench，指...'},
                {id:20, en:"enemy", ph:"/ˈenəmi/", cn:"n. 仇人", ex:'...个，就是当年kill自己全家的<em>enemy</em>，指尖不自觉地clench，指甲深深embed掌心，心中...'},
                {id:21, en:"clench", ph:"/klentʃ/", cn:"v. 攥紧", ex:'...全家的enemy，指尖不自觉地<em>clench</em>，指甲深深embed掌心，心中恨意surge，却只能r...'},
                {id:22, en:"embed", ph:"/ɪmˈbed/", cn:"v. 嵌入", ex:'...不自觉地clench，指甲深深<em>embed</em>掌心，心中恨意surge，却只能restrain着情绪，...'},
                {id:23, en:"surge", ph:"/sɜːrdʒ/", cn:"v. 翻涌", ex:'...甲深深embed掌心，心中恨意<em>surge</em>，却只能restrain着情绪，bend行礼："'},
                {id:24, en:"restrain", ph:"/rɪˈstreɪn/", cn:"v. 强压", ex:'...心，心中恨意surge，却只能<em>restrain</em>着情绪，bend行礼："'},
                {id:25, en:"bend", ph:"/bend/", cn:"v. 俯身", ex:'...却只能restrain着情绪，<em>bend</em>行礼："'},
                {id:26, en:"method", ph:"/ˈmeθəd/", cn:"n. 办法", ex:'你可有<em>method</em>，来solve太后下葬一事？'},
                {id:27, en:"solve", ph:"/sɑːlv/", cn:"v. 解决", ex:'你可有method，来<em>solve</em>太后下葬一事？'},
                {id:28, en:"certain", ph:"/ˈsɜːrtn/", cn:"adj. 笃定", ex:'片刻之后，藏海语气<em>certain</em>地答道："'},
                {id:29, en:"ability", ph:"/əˈbɪləti/", cn:"n. 本事", ex:'平津侯觉得此人既然能从墓道出来，一定是有些真<em>ability</em>，也就continue听着。'},
                {id:30, en:"continue", ph:"/kənˈtɪnjuː/", cn:"v. 继续", ex:'平津侯觉得此人既然能从墓道出来，一定是有些真ability，也就<em>continue</em>听着。'},
                {id:31, en:"naturally", ph:"/ˈnætʃərəli/", cn:"adv. 自然", ex:'一场大雨之后，<em>naturally</em>能解。'},
                {id:32, en:"approve", ph:"/əˈpruːv/", cn:"v. 认同", ex:'一旁储怀明并不<em>approve</em>藏海所断言的今日一定有雨，insist只有一半的possibility会下...'},
                {id:33, en:"possibility", ph:"/ˌpɑːsəˈbɪləti/", cn:"n. 可能性", ex:'...定有雨，insist只有一半的<em>possibility</em>会下雨。'},
                {id:34, en:"debate", ph:"/dɪˈbeɪt/", cn:"n. 争论", ex:'就在<em>debate</em>之时，远处传来footstep，是孙公公来了，浑身wet，还说着："'},
                {id:35, en:"footstep", ph:"/ˈfʊtstep/", cn:"n. 脚步声", ex:'就在debate之时，远处传来<em>footstep</em>，是孙公公来了，浑身wet，还说着："'},
                {id:36, en:"wet", ph:"/wet/", cn:"adj. 湿漉漉的", ex:'就在debate之时，远处传来footstep，是孙公公来了，浑身<em>wet</em>，还说着："'},
                {id:37, en:"prove", ph:"/pruːv/", cn:"v. 应验", ex:'这不就刚好<em>prove</em>了藏海的judgment？'},
                {id:38, en:"judgment", ph:"/ˈdʒʌdʒmənt/", cn:"n. 判断", ex:'这不就刚好prove了藏海的<em>judgment</em>？'},
                {id:39, en:"wipe", ph:"/waɪp/", cn:"v. 擦", ex:'孙公公<em>wipe</em>脸上的雨水，说道："'},
                {id:40, en:"crack", ph:"/kræk/", cn:"v. 破了", ex:'侯爷，听说有人<em>crack</em>皇陵机关，想必是有些办法了？'},
                {id:41, en:"predict", ph:"/prɪˈdɪkt/", cn:"v. 料中", ex:'平津侯见这雨果然被藏海<em>predict</em>，心里又增添了几分trust，转身问藏海："'},
                {id:42, en:"trust", ph:"/trʌst/", cn:"n. 信任", ex:'平津侯见这雨果然被藏海predict，心里又增添了几分<em>trust</em>，转身问藏海："'},
                {id:43, en:"conclusion", ph:"/kənˈkluːʒn/", cn:"n. 定论", ex:'此难题，已有<em>conclusion</em>。'},
                {id:44, en:"narrate", ph:"/nəˈreɪt/", cn:"v. 讲起", ex:'随后像模像样地<em>narrate</em>自己来的路上睡了一觉，得到了李贵太妃托梦，太妃愿fulfill太后与先帝的...'},
                {id:45, en:"fulfill", ph:"/fʊlˈfɪl/", cn:"v. 成全", ex:'...觉，得到了李贵太妃托梦，太妃愿<em>fulfill</em>太后与先帝的合葬，只是需在大雍五方light长明灯，...'},
                {id:46, en:"light", ph:"/laɪt/", cn:"v. 点燃", ex:'...与先帝的合葬，只是需在大雍五方<em>light</em>长明灯，由royal子孙守灯七七四十九日。'},
                {id:47, en:"royal", ph:"/ˈrɔɪəl/", cn:"adj. 皇室", ex:'...在大雍五方light长明灯，由<em>royal</em>子孙守灯七七四十九日。'},
                {id:48, en:"emphasize", ph:"/ˈemfəsaɪz/", cn:"v. 强调", ex:'又<em>emphasize</em>，镇守东方青龙位的，必须是临淄王。'},
                {id:49, en:"affirm", ph:"/əˈfɜːrm/", cn:"v. 坚称", ex:'孙公公将信将疑，藏海继续<em>affirm</em>："'},
                {id:50, en:"noon", ph:"/nuːn/", cn:"n. 午时", ex:'她明日<em>noon</em>前便会显灵。'},
                {id:51, en:"pat", ph:"/pæt/", cn:"v. 拍着", ex:'待孙公公走后，庄芦隐重重<em>pat</em>藏海的shoulder，告诉藏海："'},
                {id:52, en:"shoulder", ph:"/ˈʃoʊldər/", cn:"n. 肩头", ex:'待孙公公走后，庄芦隐重重pat藏海的<em>shoulder</em>，告诉藏海："'},
                {id:53, en:"tremble", ph:"/ˈtrembl/", cn:"v. 颤抖", ex:'藏海声音变得有些<em>tremble</em>："'},
                {id:54, en:"maybe", ph:"/ˈmeɪbi/", cn:"adv. 或许", ex:'<em>maybe</em>，是皇上心中，早已有了主意。'},
                {id:55, en:"nod", ph:"/nɑːd/", cn:"v. 点头", ex:'庄芦隐微微<em>nod</em>。'},
                {id:56, en:"request", ph:"/rɪˈkwest/", cn:"v. 要求", ex:'随即，藏海又趁势<em>request</em>，想要进内殿给李贵太妃reply，庄芦隐竟也答应了。'},
                {id:57, en:"kneel", ph:"/niːl/", cn:"v. 跪下", ex:'藏海跟着储怀明进入内殿之后，装作<em>kneel</em>磕头、感谢贵太妃庇佑，但其实是顺势往棺下hide了什么东西。'},
                {id:58, en:"hide", ph:"/haɪd/", cn:"v. 藏", ex:'藏海跟着储怀明进入内殿之后，装作kneel磕头、感谢贵太妃庇佑，但其实是顺势往棺下<em>hide</em>了什么东西。'},
                {id:59, en:"order", ph:"/ˈɔːrdər/", cn:"v. 吩咐", ex:'外边，庄芦隐也对瞿蛟语气严肃地<em>order</em>道："'},
                {id:60, en:"investigate", ph:"/ɪnˈvestɪɡeɪt/", cn:"v. 查查", ex:'<em>investigate</em>他的底细。'},
                {id:61, en:"together", ph:"/təˈɡeðər/", cn:"adv. 一起", ex:'到了第二天，众人<em>together</em>等着藏海所说的"'},
                {id:62, en:"approach", ph:"/əˈproʊtʃ/", cn:"v. 将至", ex:'眼看着午时<em>approach</em>，千钧一发之际突然内殿传来一阵异noise。'},
                {id:63, en:"noise", ph:"/nɔɪz/", cn:"n. 响声", ex:'眼看着午时approach，千钧一发之际突然内殿传来一阵异<em>noise</em>。'},
                {id:64, en:"report", ph:"/rɪˈpɔːrt/", cn:"v. 禀报", ex:'下人匆忙看后<em>report</em>："'},
                {id:65, en:"collapse", ph:"/kəˈlæps/", cn:"v. 塌", ex:'侯爷，贵太妃的棺材往前<em>collapse</em>了！'},
                {id:66, en:"congratulate", ph:"/kənˈɡrætʃuleɪt/", cn:"v. 恭喜", ex:'<em>congratulate</em>皇上！'},
                {id:67, en:"cheer", ph:"/tʃɪr/", cn:"v. 高呼", ex:'众人竟也一起<em>cheer</em>："'},
                {id:68, en:"simple", ph:"/ˈsɪmpl/", cn:"adj. 简单", ex:'但人群中的储怀明已经开始隐隐觉得，藏海这个人并不<em>simple</em>。'},
                {id:69, en:"reward", ph:"/rɪˈwɔːrd/", cn:"n. 赏赐", ex:'出来之后，平津侯问藏海想要什么<em>reward</em>，藏海刚refuse了赏赐，平津侯立刻脸色一change："'},
                {id:70, en:"refuse", ph:"/rɪˈfjuːz/", cn:"v. 拒绝", ex:'出来之后，平津侯问藏海想要什么reward，藏海刚<em>refuse</em>了赏赐，平津侯立刻脸色一change："'},
                {id:71, en:"change", ph:"/tʃeɪndʒ/", cn:"v. 变", ex:'出来之后，平津侯问藏海想要什么reward，藏海刚refuse了赏赐，平津侯立刻脸色一<em>change</em>："'},
                {id:72, en:"crime", ph:"/kraɪm/", cn:"n. 罪状", ex:'那我要细数一下你的<em>crime</em>了。'},
                {id:73, en:"throw", ph:"/θroʊ/", cn:"v. 扔", ex:'接着，把藏海那日塞到棺下的小木块<em>throw</em>到了大家面前的空地上。'},
                {id:74, en:"award", ph:"/əˈwɔːrd/", cn:"v. 赏", ex:'本侯先kill你，再<em>award</em>你一副上好的棺材和silver陪葬！'},
                {id:75, en:"silver", ph:"/ˈsɪlvər/", cn:"n. 金银", ex:'本侯先kill你，再award你一副上好的棺材和<em>silver</em>陪葬！'},
                {id:76, en:"volunteer", ph:"/ˌvɑːlənˈtɪr/", cn:"v. 自愿", ex:'侯爷可知，草民为何<em>volunteer</em>要来？'},
                {id:77, en:"follow", ph:"/ˈfɑːloʊ/", cn:"v. 跟随", ex:'草民是想<em>follow</em>侯爷，serve侯爷！'},
                {id:78, en:"serve", ph:"/sɜːrv/", cn:"v. 侍奉", ex:'草民是想follow侯爷，<em>serve</em>侯爷！'},
                {id:79, en:"lifelong", ph:"/ˈlaɪflɔːŋ/", cn:"adj. 毕生", ex:'愿用<em>lifelong</em>所学的堪舆之术，为侯爷还有大公子肝脑涂地、鞠躬尽瘁啊！'},
                {id:80, en:"state", ph:"/steɪt/", cn:"v. 陈述", ex:'这时瞿蛟也上前来，<em>state</em>自己查到的藏海的identity来路，自然是并未搜出稚奴的真实身份。'},
                {id:81, en:"identity", ph:"/aɪˈdentəti/", cn:"n. 身份", ex:'这时瞿蛟也上前来，state自己查到的藏海的<em>identity</em>来路，自然是并未搜出稚奴的真实身份。'},
                {id:82, en:"adviser", ph:"/ədˈvaɪzər/", cn:"n. 幕僚", ex:'就这样，藏海终于做到当年稚奴立下的复仇之志的第一步，approach平津侯，成为他的<em>adviser</em>。'},
                {id:83, en:"register", ph:"/ˈredʒɪstər/", cn:"v. 报到", ex:'在去舍人府<em>register</em>前，藏海又出来见了高明师父，讲述自己这次的scheme，师父也称赞他的wis...'},
                {id:84, en:"scheme", ph:"/skiːm/", cn:"n. 计谋", ex:'...来见了高明师父，讲述自己这次的<em>scheme</em>，师父也称赞他的wisdom和第一步的success。'},
                {id:85, en:"wisdom", ph:"/ˈwɪzdəm/", cn:"n. 妙计", ex:'...的scheme，师父也称赞他的<em>wisdom</em>和第一步的success。'},
                {id:86, en:"success", ph:"/səkˈses/", cn:"n. 成功", ex:'...称赞他的wisdom和第一步的<em>success</em>。'},
                {id:87, en:"mention", ph:"/ˈmenʃn/", cn:"v. 说到", ex:'师徒二人打趣间<em>mention</em>了当朝的corruption之风，藏海突然又想起故去的父亲，"'},
                {id:88, en:"corruption", ph:"/kəˈrʌpʃn/", cn:"n. 贪腐", ex:'师徒二人打趣间mention了当朝的<em>corruption</em>之风，藏海突然又想起故去的父亲，"'},
                {id:89, en:"strengthen", ph:"/ˈstreŋθn/", cn:"v. 坚定", ex:'更是<em>strengthen</em>了自己复仇的will。'},
                {id:90, en:"will", ph:"/wɪl/", cn:"n. 决心", ex:'更是strengthen了自己复仇的<em>will</em>。'},
                {id:91, en:"power", ph:"/ˈpaʊər/", cn:"n. 权", ex:'次日，平津侯府，朱门高墙，青砖铺地，廊檐飞翘间尽是<em>power</em>倾朝野的威压。'},
                {id:92, en:"servant", ph:"/ˈsɜːrvənt/", cn:"n. 仆从", ex:'府中<em>servant</em>步履匆匆，无一人敢高声言语，空气里都浸着森严与depress。'},
                {id:93, en:"depress", ph:"/dɪˈpres/", cn:"v. 压抑", ex:'府中servant步履匆匆，无一人敢高声言语，空气里都浸着森严与<em>depress</em>。'},
                {id:94, en:"courtyard", ph:"/ˈkɔːrtjɑːrd/", cn:"n. 庭院", ex:'藏海follow这里早两年来的幕僚慧剑穿行于<em>courtyard</em>之中，一路过雕梁画栋、曲径回廊，最终re...'},
                {id:95, en:"reach", ph:"/riːtʃ/", cn:"v. 抵达", ex:'...一路过雕梁画栋、曲径回廊，最终<em>reach</em>舍人馆。'},
                {id:96, en:"place", ph:"/pleɪs/", cn:"n. 地方", ex:'这里是侯府幕僚居住和理事的<em>place</em>，陈设简素，书卷堆叠，却处处皆是人心博弈的battlefield。'},
                {id:97, en:"battlefield", ph:"/ˈbætlfiːld/", cn:"n. 战场", ex:'这里是侯府幕僚居住和理事的place，陈设简素，书卷堆叠，却处处皆是人心博弈的<em>battlefield</em>。'},
                {id:98, en:"pace", ph:"/peɪs/", cn:"n. 步频", ex:'慧剑见藏海初来乍到，便放缓<em>pace</em>，为他细说府中的rule与duty，藏海边走边听。'},
                {id:99, en:"rule", ph:"/ruːl/", cn:"n. 规矩", ex:'慧剑见藏海初来乍到，便放缓pace，为他细说府中的<em>rule</em>与duty，藏海边走边听。'},
                {id:100, en:"duty", ph:"/ˈduːti/", cn:"n. 职分", ex:'慧剑见藏海初来乍到，便放缓pace，为他细说府中的rule与<em>duty</em>，藏海边走边听。'},
                {id:101, en:"biography", ph:"/baɪˈɑːɡrəfi/", cn:"n. 传", ex:'来到了书院，幕僚们为侯爷著书立<em>biography</em>的地方，自然也就refer了这里的统领"'},
                {id:102, en:"refer", ph:"/rɪˈfɜːr/", cn:"v. 提到", ex:'来到了书院，幕僚们为侯爷著书立biography的地方，自然也就<em>refer</em>了这里的统领"'},
                {id:103, en:"discuss", ph:"/dɪˈskʌs/", cn:"v. 议论", ex:'而另一边，杨真正和储怀明、瞿蛟<em>discuss</em>着这个来路不明、却ambition不小的新幕僚。'},
                {id:104, en:"ambition", ph:"/æmˈbɪʃn/", cn:"n. 野心", ex:'而另一边，杨真正和储怀明、瞿蛟discuss着这个来路不明、却<em>ambition</em>不小的新幕僚。'},
                {id:105, en:"pick", ph:"/pɪk/", cn:"v. 拿起", ex:'藏海正<em>pick</em>一册《庄氏世家》翻看，就听到一道冷硬arrogant的声音便从门外传来。'},
                {id:106, en:"arrogant", ph:"/ˈærəɡənt/", cn:"adj. 倨傲", ex:'藏海正pick一册《庄氏世家》翻看，就听到一道冷硬<em>arrogant</em>的声音便从门外传来。'},
                {id:107, en:"mean", ph:"/miːn/", cn:"adj. 刻薄", ex:'来人正是杨真，眉眼很是<em>mean</em>，周身带着superior的傲气，问道："'},
                {id:108, en:"superior", ph:"/suːˈpɪriər/", cn:"adj. 居高临下", ex:'来人正是杨真，眉眼很是mean，周身带着<em>superior</em>的傲气，问道："'},
                {id:109, en:"warn", ph:"/wɔːrn/", cn:"v. 警告", ex:'随后看似关心、实则<em>warn</em>藏海，跟他讲这里的affair："'},
                {id:110, en:"affair", ph:"/əˈfer/", cn:"n. 事务", ex:'随后看似关心、实则warn藏海，跟他讲这里的<em>affair</em>："'},
                {id:111, en:"scholar", ph:"/ˈskɑːlər/", cn:"n. 读书人", ex:'你们这些<em>scholar</em>，知道怎么跟侯爷这种military将相处吗？'},
                {id:112, en:"military", ph:"/ˈmɪləteri/", cn:"adj. 武", ex:'你们这些scholar，知道怎么跟侯爷这种<em>military</em>将相处吗？'},
                {id:113, en:"hobby", ph:"/ˈhɑːbi/", cn:"n. 喜好", ex:'就是为了让他们多多了解侯爷，知道侯爷的<em>hobby</em>。'},
                {id:114, en:"talent", ph:"/ˈtælənt/", cn:"n. 才", ex:'你有经天纬地之<em>talent</em>，之后在侯府，定能崭露头角。'},
                {id:115, en:"inform", ph:"/ɪnˈfɔːrm/", cn:"v. 告知", ex:'正说着，有人前来<em>inform</em>，侯爷问今天有没有一位name藏海的幕僚报到、想要让他check内园的风水...'},
                {id:116, en:"name", ph:"/neɪm/", cn:"v. 名叫", ex:'正说着，有人前来inform，侯爷问今天有没有一位<em>name</em>藏海的幕僚报到、想要让他check内园的风水...'},
                {id:117, en:"check", ph:"/tʃek/", cn:"v. 看", ex:'...ame藏海的幕僚报到、想要让他<em>check</em>内园的风水。'},
                {id:118, en:"generous", ph:"/ˈdʒenərəs/", cn:"adj. 大度", ex:'杨真听完，表面假装着<em>generous</em>地说："'},
                {id:119, en:"plot", ph:"/plɑːt/", cn:"v. 暗算", ex:'其实已是咬牙切齿、心中<em>plot</em>。'},
                {id:120, en:"vital", ph:"/ˈvaɪtl/", cn:"adj. 要紧的", ex:'有件<em>vital</em>事，差点忘了！'},
                {id:121, en:"leak", ph:"/liːk/", cn:"v. 漏", ex:'昨日暴雨，祠堂<em>leak</em>水，要找人repair，但屋檐斗拱都是ancient法子，找了一圈都没找到会这门...'},
                {id:122, en:"repair", ph:"/rɪˈper/", cn:"v. 修缮", ex:'昨日暴雨，祠堂leak水，要找人<em>repair</em>，但屋檐斗拱都是ancient法子，找了一圈都没找到会这门...'},
                {id:123, en:"ancient", ph:"/ˈeɪnʃənt/", cn:"adj. 老式的", ex:'昨日暴雨，祠堂leak水，要找人repair，但屋檐斗拱都是<em>ancient</em>法子，找了一圈都没找到会这门...'},
                {id:124, en:"workmanship", ph:"/ˈwɜːrkmənʃɪp/", cn:"n. 手艺", ex:'...t法子，找了一圈都没找到会这门<em>workmanship</em>的工匠！'},
                {id:125, en:"triumph", ph:"/ˈtraɪʌmf/", cn:"n. 得逞", ex:'杨真的贼眉鼠眼间闪过一丝<em>triumph</em>的笑意。'},
                {id:126, en:"sigh", ph:"/saɪ/", cn:"v. 感叹", ex:'...跟他讲自己还是没能见到平津侯，<em>sigh</em>侯府的森严，以及这其中的人心calculate。'},
                {id:127, en:"calculate", ph:"/ˈkælkjuleɪt/", cn:"v. 算计", ex:'...h侯府的森严，以及这其中的人心<em>calculate</em>。'},
                {id:128, en:"damage", ph:"/ˈdæmɪdʒ/", cn:"v. 受损", ex:'当晚确实可能下雨，一旦下雨祠堂必会<em>damage</em>，到时候他杨真再到平津侯面前slander几句，我的si...'},
                {id:129, en:"slander", ph:"/ˈslændər/", cn:"v. 诋毁", ex:'...e，到时候他杨真再到平津侯面前<em>slander</em>几句，我的situation就堪忧了。'},
                {id:130, en:"situation", ph:"/ˌsɪtʃuˈeɪʃn/", cn:"n. 处境", ex:'...侯面前slander几句，我的<em>situation</em>就堪忧了。'},
                {id:131, en:"retreat", ph:"/rɪˈtriːt/", cn:"v. 退一步", ex:'所以我选择先<em>retreat</em>，但也错失了良机。'},
                {id:132, en:"jealous", ph:"/ˈdʒeləs/", cn:"adj. 善妒的", ex:'这个<em>jealous</em>杨大人太了解平津侯，没grasp第一次机会，就很难再接近平津侯。'},
                {id:133, en:"grasp", ph:"/ɡræsp/", cn:"v. 把握", ex:'这个jealous杨大人太了解平津侯，没<em>grasp</em>第一次机会，就很难再接近平津侯。'},
                {id:134, en:"understand", ph:"/ˌʌndərˈstænd/", cn:"v. 明白", ex:'藏海也就<em>understand</em>了自己第一步要做的，便是eliminate杨真、replace他的posi...'},
                {id:135, en:"eliminate", ph:"/ɪˈlɪmɪneɪt/", cn:"v. 除掉", ex:'藏海也就understand了自己第一步要做的，便是<em>eliminate</em>杨真、replace他的posi...'},
                {id:136, en:"replace", ph:"/rɪˈpleɪs/", cn:"v. 取代", ex:'...，便是eliminate杨真、<em>replace</em>他的position。'},
                {id:137, en:"position", ph:"/pəˈzɪʃn/", cn:"n. 位置", ex:'...ate杨真、replace他的<em>position</em>。'},
                {id:138, en:"return", ph:"/rɪˈtɜːrn/", cn:"v. 回", ex:'带着这份计谋，藏海<em>return</em>了侯府。'},
                {id:139, en:"rare", ph:"/rer/", cn:"adj. 名贵的", ex:'一天，有人送来了<em>rare</em>珍宝，杨真命令藏海在内的一众幕僚前去。'},
                {id:140, en:"vase", ph:"/veɪs/", cn:"n. 瓶", ex:'从龟甲纹琵琶、牡丹纹梅<em>vase</em>、金镶jewel玉带、早春山水图...甚至还有那把长风剑。'},
                {id:141, en:"jewel", ph:"/ˈdʒuːəl/", cn:"n. 宝石", ex:'从龟甲纹琵琶、牡丹纹梅vase、金镶<em>jewel</em>玉带、早春山水图...甚至还有那把长风剑。'},
                {id:142, en:"show", ph:"/ʃoʊ/", cn:"v. 展示", ex:'藏海逐一<em>show</em>这些宝物。'},
                {id:143, en:"record", ph:"/rɪˈkɔːrd/", cn:"v. 记录", ex:'随后又被安排到库房盘点<em>record</em>。'},
                {id:144, en:"pretend", ph:"/prɪˈtend/", cn:"v. 假装", ex:'你就<em>pretend</em>什么都不知道。'},
                {id:145, en:"dismiss", ph:"/dɪsˈmɪs/", cn:"v. 遣走", ex:'回到杨真面前，其他人都被<em>dismiss</em>，却keep藏海再去清点一遍，这杨大人又开始装模做样地对着说："'},
                {id:146, en:"keep", ph:"/kiːp/", cn:"v. 留", ex:'回到杨真面前，其他人都被dismiss，却<em>keep</em>藏海再去清点一遍，这杨大人又开始装模做样地对着说："'},
                {id:147, en:"choose", ph:"/tʃuːz/", cn:"v. 选", ex:'我<em>choose</em>你，是value你，这活儿繁重杂碎，但trick很多，其他人做事careless，你是个...'},
                {id:148, en:"value", ph:"/ˈvæljuː/", cn:"v. 看重", ex:'我choose你，是<em>value</em>你，这活儿繁重杂碎，但trick很多，其他人做事careless，你是个...'},
                {id:149, en:"trick", ph:"/trɪk/", cn:"n. 门道", ex:'我choose你，是value你，这活儿繁重杂碎，但<em>trick</em>很多，其他人做事careless，你是个...'},
                {id:150, en:"careless", ph:"/ˈkerləs/", cn:"adj. 粗枝大叶", ex:'...，但trick很多，其他人做事<em>careless</em>，你是个careful人。'},
                {id:151, en:"careful", ph:"/ˈkerfl/", cn:"adj. 细致的", ex:'...人做事careless，你是个<em>careful</em>人。'},
                {id:152, en:"carefully", ph:"/ˈkerfəli/", cn:"adv. 仔细", ex:'这个藏海出来后，给我<em>carefully</em>严查搜身，如有夹带，立刻catch起来！'},
                {id:153, en:"catch", ph:"/kætʃ/", cn:"v. 抓", ex:'这个藏海出来后，给我carefully严查搜身，如有夹带，立刻<em>catch</em>起来！'},
                {id:154, en:"trap", ph:"/træp/", cn:"n. 圈套", ex:'杨真谋划着给藏海设<em>trap</em>，殊不知自己已经成为了藏海棋局之中的第一个target。'},
                {id:155, en:"target", ph:"/ˈtɑːrɡɪt/", cn:"n. 目标", ex:'杨真谋划着给藏海设trap，殊不知自己已经成为了藏海棋局之中的第一个<em>target</em>。'}
            ],
            story: `<h2>🏯 藏海传 · 第 4 集</h2>
<p>皇陵之中，藏海<span class="vocab-highlight" data-word="insist">insist</span>（坚守）在门前的地砖上，他真的很想<span class="vocab-highlight" data-word="lead">lead</span>（带着）大家都走出去。可最终，大家还是没能<span class="vocab-highlight" data-word="avoid">avoid</span>（躲过）机关。</p>
<p>藏海<span class="vocab-highlight" data-word="alone">alone</span>（只身一人）推开墓道尽头<span class="vocab-highlight" data-word="heavy">heavy</span>（沉重的）石门，出口处，早已站着一名身着官服的人，正是平津侯府的储怀明。</p>
<p>他见藏海竟然走了出来，满脸<span class="vocab-highlight" data-word="astonish">astonish</span>（诧异），语气中带着<span class="vocab-highlight" data-word="doubt">doubt</span>（怀疑），开口<span class="vocab-highlight" data-word="accuse">accuse</span>（质问）道："你怎么会知道皇陵机关的破解之术？只有当年修建皇陵的<span class="vocab-highlight" data-word="craftsman">craftsman</span>（工匠）才知道。难不成，你是他们的<span class="vocab-highlight" data-word="descendant">descendant</span>（后代）？"藏海低头拱手<span class="vocab-highlight" data-word="reply">reply</span>（回应）："草民只是破解了地宫中断骨绦的机关，性命攸关之际<span class="vocab-highlight" data-word="guess">guess</span>（猜中），幸得神佛<span class="vocab-highlight" data-word="bless">bless</span>（庇佑）罢了。"</p>
<p>两人正<span class="vocab-highlight" data-word="confront">confront</span>（对峙）的时候，门口传来一声："侯爷到！"是平津侯庄芦隐。他听闻有人从皇陵机关中<span class="vocab-highlight" data-word="unharmed">unharmed</span>（完好无损的）走出，特意前来<span class="vocab-highlight" data-word="inspect">inspect</span>（查看），他的目光<span class="vocab-highlight" data-word="scrutinize">scrutinize</span>（审视）着藏海。</p>
<p>藏海<span class="vocab-highlight" data-word="raise">raise</span>（抬）眼望去，看着眼前这个，就是当年<span class="vocab-highlight" data-word="kill">kill</span>（杀害）自己全家的<span class="vocab-highlight" data-word="enemy">enemy</span>（仇人），指尖不自觉地<span class="vocab-highlight" data-word="clench">clench</span>（攥紧），指甲深深<span class="vocab-highlight" data-word="embed">embed</span>（嵌入）掌心，心中恨意<span class="vocab-highlight" data-word="surge">surge</span>（翻涌），却只能<span class="vocab-highlight" data-word="restrain">restrain</span>（强压）着情绪，<span class="vocab-highlight" data-word="bend">bend</span>（俯身）行礼："草民藏海，拜见侯爷。"</p>
<p>庄芦隐问道："你可有<span class="vocab-highlight" data-word="method">method</span>（办法），来<span class="vocab-highlight" data-word="solve">solve</span>（解决）太后下葬一事？"片刻之后，藏海语气<span class="vocab-highlight" data-word="certain">certain</span>（笃定）地答道："有。"</p>
<p>平津侯觉得此人既然能从墓道出来，一定是有些真<span class="vocab-highlight" data-word="ability">ability</span>（本事），也就<span class="vocab-highlight" data-word="continue">continue</span>（继续）听着。</p>
<p>藏海接着说："一场大雨之后，<span class="vocab-highlight" data-word="naturally">naturally</span>（自然）能解。"一旁储怀明并不<span class="vocab-highlight" data-word="approve">approve</span>（认同）藏海所断言的今日一定有雨，<span class="vocab-highlight" data-word="insist">insist</span>（坚称）只有一半的<span class="vocab-highlight" data-word="possibility">possibility</span>（可能性）会下雨。</p>
<p>就在<span class="vocab-highlight" data-word="debate">debate</span>（争论）之时，远处传来<span class="vocab-highlight" data-word="footstep">footstep</span>（脚步声），是孙公公来了，浑身<span class="vocab-highlight" data-word="wet">wet</span>（湿漉漉的），还说着："眼见到门口了，却下起雨来了。"</p>
<p>这不就刚好<span class="vocab-highlight" data-word="prove">prove</span>（应验）了藏海的<span class="vocab-highlight" data-word="judgment">judgment</span>（判断）？</p>
<p>孙公公<span class="vocab-highlight" data-word="wipe">wipe</span>（擦）脸上的雨水，说道："侯爷，听说有人<span class="vocab-highlight" data-word="crack">crack</span>（破了）皇陵机关，想必是有些办法了？"</p>
<p>平津侯见这雨果然被藏海<span class="vocab-highlight" data-word="predict">predict</span>（料中），心里又增添了几分<span class="vocab-highlight" data-word="trust">trust</span>（信任），转身问藏海："你有什么办法？"</p>
<p>藏海开口："此难题，已有<span class="vocab-highlight" data-word="conclusion">conclusion</span>（定论）。" 随后像模像样地<span class="vocab-highlight" data-word="narrate">narrate</span>（讲起）自己来的路上睡了一觉，得到了李贵太妃托梦，太妃愿<span class="vocab-highlight" data-word="fulfill">fulfill</span>（成全）太后与先帝的合葬，只是需在大雍五方<span class="vocab-highlight" data-word="light">light</span>（点燃）长明灯，由<span class="vocab-highlight" data-word="royal">royal</span>（皇室）子孙守灯七七四十九日。又<span class="vocab-highlight" data-word="emphasize">emphasize</span>（强调），镇守东方青龙位的，必须是临淄王。</p>
<p>孙公公将信将疑，藏海继续<span class="vocab-highlight" data-word="affirm">affirm</span>（坚称）："她明日<span class="vocab-highlight" data-word="noon">noon</span>（午时）前便会显灵。"</p>
<p>待孙公公走后，庄芦隐重重<span class="vocab-highlight" data-word="pat">pat</span>（拍着）藏海的<span class="vocab-highlight" data-word="shoulder">shoulder</span>（肩头），告诉藏海："你说的话，他听进去了。知道为什么吗？"藏海声音变得有些<span class="vocab-highlight" data-word="tremble">tremble</span>（颤抖）："<span class="vocab-highlight" data-word="maybe">maybe</span>（或许），是皇上心中，早已有了主意。"庄芦隐微微<span class="vocab-highlight" data-word="nod">nod</span>（点头）。</p>
<p>随即，藏海又趁势<span class="vocab-highlight" data-word="request">request</span>（要求），想要进内殿给李贵太妃<span class="vocab-highlight" data-word="reply">reply</span>（回个信），庄芦隐竟也答应了。</p>
<p>藏海跟着储怀明进入内殿之后，装作<span class="vocab-highlight" data-word="kneel">kneel</span>（跪下）磕头、感谢贵太妃庇佑，但其实是顺势往棺下<span class="vocab-highlight" data-word="hide">hide</span>（藏）了什么东西。</p>
<p>外边，庄芦隐也对瞿蛟语气严肃地<span class="vocab-highlight" data-word="order">order</span>（吩咐）道："<span class="vocab-highlight" data-word="investigate">investigate</span>（查查）他的底细。"</p>
<p>到了第二天，众人<span class="vocab-highlight" data-word="together">together</span>（一起）等着藏海所说的"午时李贵太妃显灵"。眼看着午时<span class="vocab-highlight" data-word="approach">approach</span>（将至），千钧一发之际突然内殿传来一阵异<span class="vocab-highlight" data-word="noise">noise</span>（响声）。下人匆忙看后<span class="vocab-highlight" data-word="report">report</span>（禀报）："侯爷，贵太妃的棺材往前<span class="vocab-highlight" data-word="collapse">collapse</span>（塌）了！"</p>
<p>藏海二话不说就又是往地上一<span class="vocab-highlight" data-word="kneel">kneel</span>（跪）："<span class="vocab-highlight" data-word="congratulate">congratulate</span>（恭喜）皇上！<span class="vocab-highlight" data-word="congratulate">congratulate</span>（恭喜）侯爷！李贵太妃这是在成全皇上与太后的一桩美事啊！"众人竟也一起<span class="vocab-highlight" data-word="cheer">cheer</span>（高呼）："谢贵太妃成全！"</p>
<p>但人群中的储怀明已经开始隐隐觉得，藏海这个人并不<span class="vocab-highlight" data-word="simple">simple</span>（简单）。</p>
<p>出来之后，平津侯问藏海想要什么<span class="vocab-highlight" data-word="reward">reward</span>（赏赐），藏海刚<span class="vocab-highlight" data-word="refuse">refuse</span>（拒绝）了赏赐，平津侯立刻脸色一<span class="vocab-highlight" data-word="change">change</span>（变）："那我要细数一下你的<span class="vocab-highlight" data-word="crime">crime</span>（罪状）了。"接着，把藏海那日塞到棺下的小木块<span class="vocab-highlight" data-word="throw">throw</span>（扔）到了大家面前的空地上。"本侯先<span class="vocab-highlight" data-word="kill">kill</span>（杀）你，再<span class="vocab-highlight" data-word="award">award</span>（赏）你一副上好的棺材和<span class="vocab-highlight" data-word="silver">silver</span>（金银）陪葬！"</p>
<p>藏海扑通又一<span class="vocab-highlight" data-word="kneel">kneel</span>（跪），语气听起来很是诚恳："侯爷可知，草民为何<span class="vocab-highlight" data-word="volunteer">volunteer</span>（自愿）要来？草民是想<span class="vocab-highlight" data-word="follow">follow</span>（跟随）侯爷，<span class="vocab-highlight" data-word="serve">serve</span>（侍奉）侯爷！愿用<span class="vocab-highlight" data-word="lifelong">lifelong</span>（毕生）所学的堪舆之术，为侯爷还有大公子肝脑涂地、鞠躬尽瘁啊！"</p>
<p>这时瞿蛟也上前来，<span class="vocab-highlight" data-word="state">state</span>（陈述）自己查到的藏海的<span class="vocab-highlight" data-word="identity">identity</span>（身份）来路，自然是并未搜出稚奴的真实身份。听罢，平津侯只说四个字，"此人留用。"</p>
<p>就这样，藏海终于做到当年稚奴立下的复仇之志的第一步，<span class="vocab-highlight" data-word="approach">approach</span>（接近）平津侯，成为他的<span class="vocab-highlight" data-word="adviser">adviser</span>（幕僚）。</p>
<p>在去舍人府<span class="vocab-highlight" data-word="register">register</span>（报到）前，藏海又出来见了高明师父，讲述自己这次的<span class="vocab-highlight" data-word="scheme">scheme</span>（计谋），师父也称赞他的<span class="vocab-highlight" data-word="wisdom">wisdom</span>（妙计）和第一步的<span class="vocab-highlight" data-word="success">success</span>（成功）。师徒二人打趣间<span class="vocab-highlight" data-word="mention">mention</span>（说到）了当朝的<span class="vocab-highlight" data-word="corruption">corruption</span>（贪腐）之风，藏海突然又想起故去的父亲，"要是父亲看到现在的钦天监，该有多难受啊。"更是<span class="vocab-highlight" data-word="strengthen">strengthen</span>（坚定）了自己复仇的<span class="vocab-highlight" data-word="will">will</span>（决心）。</p>
<p>次日，平津侯府，朱门高墙，青砖铺地，廊檐飞翘间尽是<span class="vocab-highlight" data-word="power">power</span>（权）倾朝野的威压。府中<span class="vocab-highlight" data-word="servant">servant</span>（仆从）步履匆匆，无一人敢高声言语，空气里都浸着森严与<span class="vocab-highlight" data-word="depress">depress</span>（压抑）。</p>
<p>藏海<span class="vocab-highlight" data-word="follow">follow</span>（随）这里早两年来的幕僚慧剑穿行于<span class="vocab-highlight" data-word="courtyard">courtyard</span>（庭院）之中，一路过雕梁画栋、曲径回廊，最终<span class="vocab-highlight" data-word="reach">reach</span>（抵达）舍人馆。这里是侯府幕僚居住和理事的<span class="vocab-highlight" data-word="place">place</span>（地方），陈设简素，书卷堆叠，却处处皆是人心博弈的<span class="vocab-highlight" data-word="battlefield">battlefield</span>（战场）。慧剑见藏海初来乍到，便放缓<span class="vocab-highlight" data-word="pace">pace</span>（步频），为他细说府中的<span class="vocab-highlight" data-word="rule">rule</span>（规矩）与<span class="vocab-highlight" data-word="duty">duty</span>（职分），藏海边走边听。来到了书院，幕僚们为侯爷著书立<span class="vocab-highlight" data-word="biography">biography</span>（传）的地方，自然也就<span class="vocab-highlight" data-word="refer">refer</span>（提到）了这里的统领"杨大人"，杨真。</p>
<p>而另一边，杨真正和储怀明、瞿蛟<span class="vocab-highlight" data-word="discuss">discuss</span>（议论）着这个来路不明、却<span class="vocab-highlight" data-word="ambition">ambition</span>（野心）不小的新幕僚。说罢，这位杨大人便先走一步前去书院了。</p>
<p>藏海正<span class="vocab-highlight" data-word="pick">pick</span>（拿起）一册《庄氏世家》翻看，就听到一道冷硬<span class="vocab-highlight" data-word="arrogant">arrogant</span>（倨傲）的声音便从门外传来。来人正是杨真，眉眼很是<span class="vocab-highlight" data-word="mean">mean</span>（刻薄），周身带着<span class="vocab-highlight" data-word="superior">superior</span>（居高临下）的傲气，问道："你就是那位风水先生？"随后看似关心、实则<span class="vocab-highlight" data-word="warn">warn</span>（警告）藏海，跟他讲这里的<span class="vocab-highlight" data-word="affair">affair</span>（事务）："你们这些<span class="vocab-highlight" data-word="scholar">scholar</span>（读书人），知道怎么跟侯爷这种<span class="vocab-highlight" data-word="military">military</span>（武）将相处吗？我为什么让他们编撰《庄氏世家》？就是为了让他们多多了解侯爷，知道侯爷的<span class="vocab-highlight" data-word="hobby">hobby</span>（喜好）。你有经天纬地之<span class="vocab-highlight" data-word="talent">talent</span>（才），之后在侯府，定能崭露头角。"</p>
<p>正说着，有人前来<span class="vocab-highlight" data-word="inform">inform</span>（告知），侯爷问今天有没有一位<span class="vocab-highlight" data-word="name">name</span>（名叫）藏海的幕僚报到、想要让他<span class="vocab-highlight" data-word="check">check</span>（看）内园的风水。杨真听完，表面假装着<span class="vocab-highlight" data-word="generous">generous</span>（大度）地说："藏海在这儿，赶紧去！"其实已是咬牙切齿、心中<span class="vocab-highlight" data-word="plot">plot</span>（暗算）。装着是突然想起来的样子上前道："有件<span class="vocab-highlight" data-word="vital">vital</span>（要紧的）事，差点忘了！昨日暴雨，祠堂<span class="vocab-highlight" data-word="leak">leak</span>（漏）水，要找人<span class="vocab-highlight" data-word="repair">repair</span>（修缮），但屋檐斗拱都是<span class="vocab-highlight" data-word="ancient">ancient</span>（老式的）法子，找了一圈都没找到会这门<span class="vocab-highlight" data-word="workmanship">workmanship</span>（手艺）的工匠！听说你会堪舆之术，那<span class="vocab-highlight" data-word="repair">repair</span>（修缮）旧宅，会不会？"</p>
<p>藏海其实已经看穿这位杨大人的心思，但自己初来乍到拿能直接<span class="vocab-highlight" data-word="refuse">refuse</span>（拒绝），便答应下来修旧宅，自然也就不能再帮侯爷看园子风水了。杨真的贼眉鼠眼间闪过一丝<span class="vocab-highlight" data-word="triumph">triumph</span>（得逞）的笑意。</p>
<p>从那旧宅出来后，藏海又去见了高明师父，跟他讲自己还是没能见到平津侯，<span class="vocab-highlight" data-word="sigh">sigh</span>（感叹）侯府的森严，以及这其中的人心<span class="vocab-highlight" data-word="calculate">calculate</span>（算计）。"当晚确实可能下雨，一旦下雨祠堂必会<span class="vocab-highlight" data-word="damage">damage</span>（受损），到时候他杨真再到平津侯面前<span class="vocab-highlight" data-word="slander">slander</span>（诋毁）几句，我的<span class="vocab-highlight" data-word="situation">situation</span>（处境）就堪忧了。所以我选择先<span class="vocab-highlight" data-word="retreat">retreat</span>（退一步），但也错失了良机。之后这几日，平津侯就没再找过我了。"</p>
<p>这个<span class="vocab-highlight" data-word="jealous">jealous</span>（善妒的）杨大人太了解平津侯，没<span class="vocab-highlight" data-word="grasp">grasp</span>（把握）第一次机会，就很难再接近平津侯。藏海也就<span class="vocab-highlight" data-word="understand">understand</span>（明白）了自己第一步要做的，便是<span class="vocab-highlight" data-word="eliminate">eliminate</span>（除掉）杨真、<span class="vocab-highlight" data-word="replace">replace</span>（取代）他的<span class="vocab-highlight" data-word="position">position</span>（位置）。带着这份计谋，藏海<span class="vocab-highlight" data-word="return">return</span>（回）了侯府。</p>
<p>一天，有人送来了<span class="vocab-highlight" data-word="rare">rare</span>（名贵的）珍宝，杨真命令藏海在内的一众幕僚前去。从龟甲纹琵琶、牡丹纹梅<span class="vocab-highlight" data-word="vase">vase</span>（瓶）、金镶<span class="vocab-highlight" data-word="jewel">jewel</span>（宝石）玉带、早春山水图...甚至还有那把长风剑。藏海逐一<span class="vocab-highlight" data-word="show">show</span>（展示）这些宝物。</p>
<p>随后又被安排到库房盘点<span class="vocab-highlight" data-word="record">record</span>（记录）。在博古架上清点的时候，藏海发现和田玉杯少了一只，刚升起疑惑，身旁另一位幕僚就很是熟练地记录下"家下取"三字，告诉藏海："你就<span class="vocab-highlight" data-word="pretend">pretend</span>（假装）什么都不知道。"</p>
<p>回到杨真面前，其他人都被<span class="vocab-highlight" data-word="dismiss">dismiss</span>（遣走），却<span class="vocab-highlight" data-word="keep">keep</span>（留）藏海再去清点一遍，这杨大人又开始装模做样地对着说："我<span class="vocab-highlight" data-word="choose">choose</span>（选）你，是<span class="vocab-highlight" data-word="value">value</span>（看重）你，这活儿繁重杂碎，但<span class="vocab-highlight" data-word="trick">trick</span>（门道）很多，其他人做事<span class="vocab-highlight" data-word="careless">careless</span>（粗枝大叶），你是个<span class="vocab-highlight" data-word="careful">careful</span>（细致的）人。你刚来府中，就从这件事做起，慢慢了解！"这边刚关上门，就对身边人说："这个藏海出来后，给我<span class="vocab-highlight" data-word="carefully">carefully</span>（仔细）严查搜身，如有夹带，立刻<span class="vocab-highlight" data-word="catch">catch</span>（抓）起来！"</p>
<p>杨真谋划着给藏海设<span class="vocab-highlight" data-word="trap">trap</span>（圈套），殊不知自己已经成为了藏海棋局之中的第一个<span class="vocab-highlight" data-word="target">target</span>（目标）。</p>

<p style="text-align:center;color:#c9a84c;margin-top:32px;font-weight:700">—— 第 4 集完 · 共 155 词 ——</p>`
        },
        {
            id: 5,
            title: '第 5 集',
            banner: '',
            wordCount: 137,
            words: [
                {id:1, en:"arrange", ph:"/əˈreɪndʒ/", cn:"v. 安排", ex:'按照杨真的<em>arrange</em>，藏海sort清点着财库中的treasure。'},
                {id:2, en:"sort", ph:"/sɔːrt/", cn:"v. 整理", ex:'按照杨真的arrange，藏海<em>sort</em>清点着财库中的treasure。'},
                {id:3, en:"treasure", ph:"/ˈtreʒər/", cn:"n. 宝物", ex:'按照杨真的arrange，藏海sort清点着财库中的<em>treasure</em>。'},
                {id:4, en:"trigger", ph:"/ˈtrɪɡər/", cn:"v. 启动", ex:'却在无意中<em>trigger</em>了密室的button。'},
                {id:5, en:"button", ph:"/ˈbʌtn/", cn:"n. 按钮", ex:'却在无意中trigger了密室的<em>button</em>。'},
                {id:6, en:"dim", ph:"/dɪm/", cn:"adj. 微弱的", ex:'靠着一盏烛火的<em>dim</em>光，藏海grope着走进密室。'},
                {id:7, en:"grope", ph:"/ɡroʊp/", cn:"v. 摸索", ex:'靠着一盏烛火的dim光，藏海<em>grope</em>着走进密室。'},
                {id:8, en:"search", ph:"/sɜːrtʃ/", cn:"v. 搜寻", ex:'四处<em>search</em>了一番之后，正准备turn离开。'},
                {id:9, en:"turn", ph:"/tɜːrn/", cn:"v. 转身", ex:'四处search了一番之后，正准备<em>turn</em>离开。'},
                {id:10, en:"spot", ph:"/spɑːt/", cn:"v. 发现", ex:'却突然<em>spot</em>有人！'},
                {id:11, en:"furtive", ph:"/ˈfɜːrtɪv/", cn:"adj. 鬼鬼祟祟的", ex:'没想到对方虽然<em>furtive</em>，气势上却格外理直气壮。'},
                {id:12, en:"salute", ph:"/səˈluːt/", cn:"v. 行礼", ex:'见到本公子，还不快<em>salute</em>？'},
                {id:13, en:"instantly", ph:"/ˈɪnstəntli/", cn:"adv. 瞬间", ex:'藏海<em>instantly</em>就recall，小时候他曾把二公子lock到过secret密道。'},
                {id:14, en:"recall", ph:"/rɪˈkɔːl/", cn:"v. 回想起", ex:'藏海instantly就<em>recall</em>，小时候他曾把二公子lock到过secret密道。'},
                {id:15, en:"lock", ph:"/lɑːk/", cn:"v. 关", ex:'小时候他曾把二公子<em>lock</em>到过secret密道。'},
                {id:16, en:"secret", ph:"/ˈsiːkrət/", cn:"adj. 隐秘的", ex:'小时候他曾把二公子lock到过<em>secret</em>密道。'},
                {id:17, en:"recognize", ph:"/ˈrekəɡnaɪz/", cn:"v. 认出", ex:'庄之行并没<em>recognize</em>眼前这个已经altered模样的人。'},
                {id:18, en:"altered", ph:"/ˈɔːltərd/", cn:"adj. 变了", ex:'庄之行并没recognize眼前这个已经<em>altered</em>模样的人。'},
                {id:19, en:"juvenile", ph:"/ˈdʒuːvənaɪl/", cn:"adj. 年少的", ex:'就是当初的<em>juvenile</em>稚奴。'},
                {id:20, en:"explain", ph:"/ɪkˈspleɪn/", cn:"v. 解释", ex:'藏海跟他<em>explain</em>了自己是奉杨大人之命在此clear库房。'},
                {id:21, en:"clear", ph:"/klɪr/", cn:"v. 清理", ex:'藏海跟他explain了自己是奉杨大人之命在此<em>clear</em>库房。'},
                {id:22, en:"drop", ph:"/drɑːp/", cn:"v. 掉落", ex:'却不慎<em>drop</em>出一件golden葫芦。'},
                {id:23, en:"golden", ph:"/ˈɡoʊldən/", cn:"adj. 金质的", ex:'却不慎drop出一件<em>golden</em>葫芦。'},
                {id:24, en:"noble", ph:"/ˈnoʊbl/", cn:"adj. 尊贵的", ex:'二公子身份<em>noble</em>，为何来此steal东西啊？'},
                {id:25, en:"steal", ph:"/stiːl/", cn:"v. 偷", ex:'二公子身份noble，为何来此<em>steal</em>东西啊？'},
                {id:26, en:"pretend", ph:"/prɪˈtend/", cn:"v. 假装", ex:'还承诺会<em>pretend</em>没见过他。'},
                {id:27, en:"keep", ph:"/kiːp/", cn:"v. 保守", ex:'替他<em>keep</em>保密。'},
                {id:28, en:"leave", ph:"/liːv/", cn:"v. 离开", ex:'随后，庄之行拉着藏海就要一起<em>leave</em>。'},
                {id:29, en:"guard", ph:"/ɡɑːrd/", cn:"n. 守卫", ex:'门口的<em>guard</em>自然也不敢上前block。'},
                {id:30, en:"block", ph:"/blɑːk/", cn:"v. 阻拦", ex:'门口的guard自然也不敢上前<em>block</em>。'},
                {id:31, en:"inventory", ph:"/ˈɪnvəntɔːri/", cn:"n. 清单", ex:'次日，杨真把藏海整理好的财库<em>inventory</em>交给侯爷inspect。'},
                {id:32, en:"inspect", ph:"/ɪnˈspekt/", cn:"v. 过目", ex:'次日，杨真把藏海整理好的财库inventory交给侯爷<em>inspect</em>。'},
                {id:33, en:"dissatisfied", ph:"/dɪsˈsætɪsfaɪd/", cn:"adj. 不满意", ex:'杨真起初还以为是侯爷<em>dissatisfied</em>。'},
                {id:34, en:"newcomer", ph:"/ˈnuːkʌmər/", cn:"n. 新人", ex:'连忙说是<em>newcomer</em>藏海所写。'},
                {id:35, en:"record", ph:"/rɪˈkɔːrd/", cn:"v. 记录", ex:'藏海详细<em>record</em>了长风剑的origin。'},
                {id:36, en:"origin", ph:"/ˈɔːrɪdʒɪn/", cn:"n. 来历", ex:'藏海详细record了长风剑的<em>origin</em>。'},
                {id:37, en:"significant", ph:"/sɪɡˈnɪfɪkənt/", cn:"adj. 意义重大的", ex:'在一场<em>significant</em>military的战役中得来的。'},
                {id:38, en:"military", ph:"/ˈmɪləteri/", cn:"adj. 军事的", ex:'在一场significant<em>military</em>的战役中得来的。'},
                {id:39, en:"merit", ph:"/ˈmerɪt/", cn:"n. 功绩", ex:'这样着重记录的<em>merit</em>，自然cater了侯爷的欢心。'},
                {id:40, en:"cater", ph:"/ˈkeɪtər/", cn:"v. 迎合", ex:'这样着重记录的merit，自然<em>cater</em>了侯爷的欢心。'},
                {id:41, en:"cultivate", ph:"/ˈkʌltɪveɪt/", cn:"v. 培养", ex:'特意叮嘱杨真好好<em>cultivate</em>、guide藏海。'},
                {id:42, en:"guide", ph:"/ɡaɪd/", cn:"v. 指导", ex:'特意叮嘱杨真好好cultivate、<em>guide</em>藏海。'},
                {id:43, en:"dread", ph:"/dred/", cn:"n. 忌惮", ex:'杨真和储怀明都更是对藏海心生<em>dread</em>。'},
                {id:44, en:"conspire", ph:"/kənˈspaɪər/", cn:"v. 密谋", ex:'二人开始<em>conspire</em>，要设局frame藏海。'},
                {id:45, en:"frame", ph:"/freɪm/", cn:"v. 陷害", ex:'二人开始conspire，要设局<em>frame</em>藏海。'},
                {id:46, en:"invite", ph:"/ɪnˈvaɪt/", cn:"v. 邀请", ex:'第一步，就是<em>invite</em>藏海去枕楼attend宴。'},
                {id:47, en:"attend", ph:"/əˈtend/", cn:"v. 赴", ex:'第一步，就是invite藏海去枕楼<em>attend</em>宴。'},
                {id:48, en:"owe", ph:"/oʊ/", cn:"v. 欠下", ex:'庄之行嗜赌成性，在枕楼<em>owe</em>了大笔debt。'},
                {id:49, en:"debt", ph:"/det/", cn:"n. 欠款", ex:'庄之行嗜赌成性，在枕楼owe了大笔<em>debt</em>。'},
                {id:50, en:"steward", ph:"/ˈstuːərd/", cn:"n. 管事", ex:'香暗荼让<em>steward</em>把账目清点完毕。'},
                {id:51, en:"repay", ph:"/rɪˈpeɪ/", cn:"v. 偿还", ex:'庄二根本没钱<em>repay</em>。'},
                {id:52, en:"accept", ph:"/əkˈsept/", cn:"v. 认账", ex:'香老板并不<em>accept</em>，还放话要拿着note去平津侯府要钱。'},
                {id:53, en:"note", ph:"/noʊt/", cn:"n. 单据", ex:'香老板并不accept，还放话要拿着<em>note</em>去平津侯府要钱。'},
                {id:54, en:"inform", ph:"/ɪnˈfɔːrm/", cn:"v. 禀报", ex:'有人<em>inform</em>香老板，杨真、瞿蛟和储怀明正在楼上设宴。'},
                {id:55, en:"aide", ph:"/eɪd/", cn:"n. 幕僚", ex:'宴请的是一位名叫藏海的侯府<em>aide</em>。'},
                {id:56, en:"walk", ph:"/wɔːk/", cn:"v. 走", ex:'刚好看到藏海<em>walk</em>了进来。'},
                {id:57, en:"faintly", ph:"/ˈfeɪntli/", cn:"adv. 隐隐", ex:'心里<em>faintly</em>觉得不对劲。'},
                {id:58, en:"monitor", ph:"/ˈmɑːnɪtər/", cn:"v. 盯紧", ex:'立刻派人<em>monitor</em>那个包间。'},
                {id:59, en:"drink", ph:"/drɪŋk/", cn:"v. 喝酒", ex:'姑娘们陪他们<em>drink</em>作乐。'},
                {id:60, en:"experience", ph:"/ɪkˈspɪriəns/", cn:"v. 体验", ex:'还热情邀请藏海也<em>experience</em>这活色生香的场面。'},
                {id:61, en:"birthday", ph:"/ˈbɜːrθdeɪ/", cn:"n. 寿辰", ex:'众人借口今日是杨真的<em>birthday</em>。'},
                {id:62, en:"cheer", ph:"/tʃɪr/", cn:"v. 助兴", ex:'请来唱曲的小枝姑娘<em>cheer</em>。'},
                {id:63, en:"seize", ph:"/siːz/", cn:"v. 趁机", ex:'杨真<em>seize</em>提出，让藏海把小枝当礼物收了。'},
                {id:64, en:"perceive", ph:"/pərˈsiːv/", cn:"v. 察觉到", ex:'这时的藏海已经<em>perceive</em>不对。'},
                {id:65, en:"politely", ph:"/pəˈlaɪtli/", cn:"adv. 婉言", ex:'却也只能<em>politely</em>谢绝。'},
                {id:66, en:"value", ph:"/ˈvæljuː/", cn:"v. 看重", ex:'杨真口口声声说<em>value</em>藏海。'},
                {id:67, en:"promote", ph:"/prəˈmoʊt/", cn:"v. 提拔", ex:'还声称要<em>promote</em>他做自己的deputy。'},
                {id:68, en:"deputy", ph:"/ˈdepjuti/", cn:"n. 副手", ex:'还声称要promote他做自己的<em>deputy</em>。'},
                {id:69, en:"force", ph:"/fɔːrs/", cn:"v. 强迫", ex:'就是要<em>force</em>藏海收下小枝。'},
                {id:70, en:"firmly", ph:"/ˈfɜːrmli/", cn:"adv. 坚决", ex:'可藏海始终<em>firmly</em>不肯accept。'},
                {id:71, en:"accept", ph:"/əkˈsept/", cn:"v. 接受", ex:'可藏海始终firmly不肯<em>accept</em>。'},
                {id:72, en:"threaten", ph:"/ˈθretn/", cn:"v. 威胁", ex:'他们甚至<em>threaten</em>藏海。'},
                {id:73, en:"intelligent", ph:"/ɪnˈtelɪdʒənt/", cn:"adj. 聪明的", ex:'真正<em>intelligent</em>的人，一定是那种obedient的。'},
                {id:74, en:"obedient", ph:"/əˈbiːdiənt/", cn:"adj. 听话的", ex:'真正intelligent的人，一定是那种<em>obedient</em>的。'},
                {id:75, en:"write", ph:"/raɪt/", cn:"v. 写", ex:'让藏海给庄芦隐<em>write</em>一封辞呈。'},
                {id:76, en:"compile", ph:"/kəmˈpaɪl/", cn:"v. 编撰", ex:'要用三年时间<em>compile</em>一本庄氏biography。'},
                {id:77, en:"biography", ph:"/baɪˈɑːɡrəfi/", cn:"n. 传记", ex:'要用三年时间compile一本庄氏<em>biography</em>。'},
                {id:78, en:"spared", ph:"/sperd/", cn:"v. 拼尽", ex:'藏海<em>spared</em>全力才进入平津侯府。'},
                {id:79, en:"clear", ph:"/klɪr/", cn:"adj. 清楚", ex:'他太<em>clear</em>自己的revenge目标。'},
                {id:80, en:"revenge", ph:"/rɪˈvendʒ/", cn:"n. 复仇", ex:'他太clear自己的<em>revenge</em>目标。'},
                {id:81, en:"target", ph:"/ˈtɑːrɡɪt/", cn:"n. 目标", ex:'他太clear自己的revenge<em>target</em>。'},
                {id:82, en:"agree", ph:"/əˈɡriː/", cn:"v. 答应", ex:'我若是不<em>agree</em>呢？'},
                {id:83, en:"draw", ph:"/drɔː/", cn:"v. 拔", ex:'瞿蛟突然<em>draw</em>剑相向。'},
                {id:84, en:"fault", ph:"/fɔːlt/", cn:"n. 罪责", ex:'杨真就趁势把所有<em>fault</em>都推到小枝身上。'},
                {id:85, en:"serve", ph:"/sɜːrv/", cn:"v. 伺候", ex:'以她没有<em>serve</em>好藏海为由要punish她。'},
                {id:86, en:"punish", ph:"/ˈpʌnɪʃ/", cn:"v. 惩罚", ex:'以她没有serve好藏海为由要<em>punish</em>她。'},
                {id:87, en:"kneel", ph:"/niːl/", cn:"v. 跪", ex:'小枝吓得<em>kneel</em>地求饶。'},
                {id:88, en:"see", ph:"/siː/", cn:"v. 看穿", ex:'藏海也<em>see</em>了杨真的心思。'},
                {id:89, en:"yield", ph:"/jiːld/", cn:"v. 妥协", ex:'对方是想用小枝逼他<em>yield</em>。'},
                {id:90, en:"dilemma", ph:"/dɪˈlemə/", cn:"n. 两难", ex:'正陷入<em>dilemma</em>之际。'},
                {id:91, en:"burning", ph:"/ˈbɜːrnɪŋ/", cn:"adj. 烧红的", ex:'杨真竟直接夹起炉火中<em>burning</em>炭块。'},
                {id:92, en:"mouth", ph:"/maʊθ/", cn:"n. 口中", ex:'狠狠塞进小枝<em>mouth</em>中。'},
                {id:93, en:"desperately", ph:"/ˈdespərətli/", cn:"adv. 拼命", ex:'藏海<em>desperately</em>上前阻止。'},
                {id:94, en:"faint", ph:"/feɪnt/", cn:"v. 晕厥", ex:'小枝当场疼得<em>faint</em>过去。'},
                {id:95, en:"push", ph:"/pʊʃ/", cn:"v. 推", ex:'这时，香老板<em>push</em>门而入。'},
                {id:96, en:"mess", ph:"/mes/", cn:"n. 混乱", ex:'眼前正是一片<em>mess</em>景象。'},
                {id:97, en:"banner", ph:"/ˈbænər/", cn:"n. 旗号", ex:'她打着庄二公子要平账的<em>banner</em>。'},
                {id:98, en:"ease", ph:"/iːz/", cn:"v. 缓解", ex:'也算<em>ease</em>了这场deadlock。'},
                {id:99, en:"deadlock", ph:"/ˈdedlɑːk/", cn:"n. 僵局", ex:'也算ease了这场<em>deadlock</em>。'},
                {id:100, en:"check", ph:"/tʃek/", cn:"v. 查看", ex:'藏海见三人离开，赶紧上前<em>check</em>小枝的condition。'},
                {id:101, en:"condition", ph:"/kənˈdɪʃn/", cn:"n. 状况", ex:'藏海见三人离开，赶紧上前check小枝的<em>condition</em>。'},
                {id:102, en:"throat", ph:"/θroʊt/", cn:"n. 喉咙", ex:'她的<em>throat</em>已经被严重scald。'},
                {id:103, en:"scald", ph:"/skɔːld/", cn:"v. 烫伤", ex:'她的throat已经被严重<em>scald</em>。'},
                {id:104, en:"beg", ph:"/beɡ/", cn:"v. 恳请", ex:'藏海立刻<em>beg</em>郎中来cure。'},
                {id:105, en:"cure", ph:"/kjʊr/", cn:"v. 医治", ex:'藏海立刻beg郎中来<em>cure</em>。'},
                {id:106, en:"entrust", ph:"/ɪnˈtrʌst/", cn:"v. 拜托", ex:'又<em>entrust</em>香暗荼收留她。'},
                {id:107, en:"reward", ph:"/rɪˈwɔːrd/", cn:"v. 报答", ex:'承诺日后定会前来<em>reward</em>。'},
                {id:108, en:"drunk", ph:"/drʌŋk/", cn:"adj. 醉的", ex:'香老板顺势让藏海把<em>drunk</em>得不省人事的庄之行接回侯府。'},
                {id:109, en:"effort", ph:"/ˈefərt/", cn:"n. 力气", ex:'藏海费了极大的<em>effort</em>，才终于把庄之行safely送了回去。'},
                {id:110, en:"safely", ph:"/ˈseɪfli/", cn:"adv. 安全", ex:'藏海费了极大的effort，才终于把庄之行<em>safely</em>送了回去。'},
                {id:111, en:"wait", ph:"/weɪt/", cn:"v. 等候", ex:'藏海去见了一直在<em>wait</em>他的高明。'},
                {id:112, en:"grief", ph:"/ɡriːf/", cn:"n. 难过", ex:'满心<em>grief</em>于implicate了innocent的人。'},
                {id:113, en:"implicate", ph:"/ˈɪmplɪkeɪt/", cn:"v. 牵连", ex:'满心grief于<em>implicate</em>了innocent的人。'},
                {id:114, en:"innocent", ph:"/ˈɪnəsənt/", cn:"adj. 无辜的", ex:'满心grief于implicate了<em>innocent</em>的人。'},
                {id:115, en:"soberly", ph:"/ˈsoʊbərli/", cn:"adv. 清醒地", ex:'却也<em>soberly</em>地意识到。'},
                {id:116, en:"notice", ph:"/ˈnoʊtɪs/", cn:"v. 注意到", ex:'庄芦隐已经<em>notice</em>到他了。'},
                {id:117, en:"fulfill", ph:"/fʊlˈfɪl/", cn:"v. 实现", ex:'这离他<em>fulfill</em>复仇计划，又近了一步。'},
                {id:118, en:"approach", ph:"/əˈproʊtʃ/", cn:"v. 接近", ex:'打算借庄二公子的门路，来<em>approach</em>庄芦隐。'},
                {id:119, en:"bathing", ph:"/ˈbeɪðɪŋ/", cn:"v. 泡澡", ex:'第二天，藏海就去见了正在<em>bathing</em>享乐的庄之行。'},
                {id:120, en:"explain", ph:"/ɪkˈspleɪn/", cn:"v. 解释", ex:'他先是<em>explain</em>了自己昨日前往枕楼是应杨大人的invitation。'},
                {id:121, en:"invitation", ph:"/ˌɪnvɪˈteɪʃn/", cn:"n. 邀约", ex:'他先是explain了自己昨日前往枕楼是应杨大人的<em>invitation</em>。'},
                {id:122, en:"inquire", ph:"/ɪnˈkwaɪər/", cn:"v. 打听", ex:'又拐弯抹角向他<em>inquire</em>侯府的内部situation。'},
                {id:123, en:"situation", ph:"/ˌsɪtʃuˈeɪʃn/", cn:"n. 情况", ex:'又拐弯抹角向他inquire侯府的内部<em>situation</em>。'},
                {id:124, en:"attach", ph:"/əˈtætʃ/", cn:"v. 重视", ex:'让侯爷对他<em>attach</em>起来。'},
                {id:125, en:"alert", ph:"/əˈlɜːrt/", cn:"adj. 警觉", ex:'庄之行立刻<em>alert</em>起来。'},
                {id:126, en:"admire", ph:"/ədˈmaɪər/", cn:"v. 仰慕", ex:'小的满心<em>admire</em>侯爷。'},
                {id:127, en:"opportunity", ph:"/ˌɑːpərˈtuːnəti/", cn:"n. 机会", ex:'却一直没有<em>opportunity</em>得见尊颜。'},
                {id:128, en:"sincere", ph:"/sɪnˈsɪr/", cn:"adj. 坦诚", ex:'庄二见他态度<em>sincere</em>。'},
                {id:129, en:"trust", ph:"/trʌst/", cn:"n. 信任", ex:'心里也多了几分<em>trust</em>。'},
                {id:130, en:"suggestion", ph:"/səɡˈdʒestʃən/", cn:"n. 建议", ex:'便随口给了他一句<em>suggestion</em>。'},
                {id:131, en:"harvest", ph:"/ˈhɑːrvɪst/", cn:"n. 收获", ex:'藏海又把自己此行的<em>harvest</em>和thought悉数告诉了高明。'},
                {id:132, en:"thought", ph:"/θɔːt/", cn:"n. 想法", ex:'藏海又把自己此行的harvest和<em>thought</em>悉数告诉了高明。'},
                {id:133, en:"profligate", ph:"/ˈprɑːflɪɡət/", cn:"adj. 纨绔的", ex:'就是个典型的<em>profligate</em>子弟。'},
                {id:134, en:"deep", ph:"/diːp/", cn:"n. 深处", ex:'他内心<em>deep</em>极度渴望得到父亲的attention。'},
                {id:135, en:"attention", ph:"/əˈtenʃn/", cn:"n. 关注", ex:'他内心deep极度渴望得到父亲的<em>attention</em>。'},
                {id:136, en:"chance", ph:"/tʃæns/", cn:"n. 机会", ex:'这恰恰是自己的绝佳<em>chance</em>。'},
                {id:137, en:"hurry", ph:"/ˈhɜːri/", cn:"v. 抓紧", ex:'必须<em>hurry</em>布局。'}
            ],
            story: `<h2>🏯 藏海传 · 第 5 集</h2>

<span class="story-chapter">【第一幕：财库密室】</span>
<p>按照杨真的<span class="vocab-highlight" data-word="arrange">arrange</span>（安排），藏海<span class="vocab-highlight" data-word="sort">sort</span>（整理）清点着财库中的<span class="vocab-highlight" data-word="treasure">treasure</span>（宝物），却在无意中<span class="vocab-highlight" data-word="trigger">trigger</span>（启动）了密室的<span class="vocab-highlight" data-word="button">button</span>（按钮）。靠着一盏烛火的<span class="vocab-highlight" data-word="dim">dim</span>（微弱的）光，藏海<span class="vocab-highlight" data-word="grope">grope</span>（摸索）着走进密室，四处<span class="vocab-highlight" data-word="search">search</span>（搜寻）了一番之后，正准备<span class="vocab-highlight" data-word="turn">turn</span>（转身）离开，却突然<span class="vocab-highlight" data-word="spot">spot</span>（发现）有人！没想到对方虽然<span class="vocab-highlight" data-word="furtive">furtive</span>（鬼鬼祟祟的），气势上却格外理直气壮："你是谁？见到本公子，还不快<span class="vocab-highlight" data-word="salute">salute</span>（行礼）？"</p>

<span class="story-chapter">【第二幕：旧识新逢】</span>
<p>原来那是庄芦隐的二儿子庄之行。藏海<span class="vocab-highlight" data-word="instantly">instantly</span>（瞬间）就<span class="vocab-highlight" data-word="recall">recall</span>（回想起），小时候他曾把这二公子<span class="vocab-highlight" data-word="lock">lock</span>（关）到过<span class="vocab-highlight" data-word="secret">secret</span>（隐秘的）密道。庄之行并没<span class="vocab-highlight" data-word="recognize">recognize</span>（认出）眼前这个已经<span class="vocab-highlight" data-word="altered">altered</span>（变了）模样的人，就是当初那个<span class="vocab-highlight" data-word="juvenile">juvenile</span>（年少的）稚奴。藏海跟他<span class="vocab-highlight" data-word="explain">explain</span>（解释）了自己是奉杨大人之命在此<span class="vocab-highlight" data-word="clear">clear</span>（清理）库房。庄之行转身要走的时候，却不慎<span class="vocab-highlight" data-word="drop">drop</span>（掉落）出一件<span class="vocab-highlight" data-word="golden">golden</span>（金质的）葫芦。藏海忍着笑："二公子身份<span class="vocab-highlight" data-word="noble">noble</span>（尊贵的），为何来此<span class="vocab-highlight" data-word="steal">steal</span>（偷）东西啊？"对方还狡辩说："我这不是偷，是拿！"藏海顺着他的话应和，承诺会<span class="vocab-highlight" data-word="pretend">pretend</span>（假装）没见过他，替他<span class="vocab-highlight" data-word="keep">keep</span>（保守）保密。随后庄之行拉着藏海就要一起<span class="vocab-highlight" data-word="leave">leave</span>（离开），门口的<span class="vocab-highlight" data-word="guard">guard</span>（守卫）自然也不敢上前<span class="vocab-highlight" data-word="block">block</span>（阻拦）。</p>

<span class="story-chapter">【第三幕：侯爷赏识】</span>
<p>次日，杨真把藏海整理好的财库<span class="vocab-highlight" data-word="inventory">inventory</span>（清单）交给侯爷<span class="vocab-highlight" data-word="inspect">inspect</span>（过目）。平津侯问："这库单谁写的？和以前不太一样。"杨真起初还以为是侯爷<span class="vocab-highlight" data-word="dissatisfied">dissatisfied</span>（不满意），连忙说是<span class="vocab-highlight" data-word="newcomer">newcomer</span>（新人）藏海所写。原来，藏海详细<span class="vocab-highlight" data-word="record">record</span>（记录）了长风剑的<span class="vocab-highlight" data-word="origin">origin</span>（来历），是在一场<span class="vocab-highlight" data-word="significant">significant</span>（意义重大的）<span class="vocab-highlight" data-word="military">military</span>（军事的）战役中得来的。这样着重记录<span class="vocab-highlight" data-word="merit">merit</span>（功绩），自然<span class="vocab-highlight" data-word="cater">cater</span>（迎合）了侯爷的欢心。侯爷特意叮嘱杨真好好<span class="vocab-highlight" data-word="cultivate">cultivate</span>（培养）、<span class="vocab-highlight" data-word="guide">guide</span>（指导）藏海。但杨真和储怀明都更是对藏海心生<span class="vocab-highlight" data-word="dread">dread</span>（忌惮），二人开始<span class="vocab-highlight" data-word="conspire">conspire</span>（密谋），要设局<span class="vocab-highlight" data-word="frame">frame</span>（陷害）藏海。第一步，就是<span class="vocab-highlight" data-word="invite">invite</span>（邀请）藏海去枕楼<span class="vocab-highlight" data-word="attend">attend</span>（赴）宴。</p>

<span class="story-chapter">【第四幕：枕楼鸿门宴】</span>
<p>庄之行嗜赌成性，在枕楼<span class="vocab-highlight" data-word="owe">owe</span>（欠下）了大笔<span class="vocab-highlight" data-word="debt">debt</span>（欠款）。香暗荼让<span class="vocab-highlight" data-word="steward">steward</span>（管事）把账目清点完毕，庄二根本没钱<span class="vocab-highlight" data-word="repay">repay</span>（偿还）。香老板并不<span class="vocab-highlight" data-word="accept">accept</span>（认账），还放话要拿着<span class="vocab-highlight" data-word="note">note</span>（单据）去平津侯府要钱。有人<span class="vocab-highlight" data-word="inform">inform</span>（禀报）香老板，杨真、瞿蛟和储怀明正在楼上设宴，宴请的是一位名叫藏海的侯府<span class="vocab-highlight" data-word="aide">aide</span>（幕僚）。香暗荼<span class="vocab-highlight" data-word="faintly">faintly</span>（隐隐）觉得不对劲，立刻派人<span class="vocab-highlight" data-word="monitor">monitor</span>（盯紧）那个包间。</p>
<p>包间里，姑娘们陪他们<span class="vocab-highlight" data-word="drink">drink</span>（喝酒）作乐。杨真还热情邀请藏海也<span class="vocab-highlight" data-word="experience">experience</span>（体验）这活色生香的场面。众人借口今日是杨真的<span class="vocab-highlight" data-word="birthday">birthday</span>（寿辰），请来唱曲的小枝姑娘<span class="vocab-highlight" data-word="cheer">cheer</span>（助兴）。杨真<span class="vocab-highlight" data-word="seize">seize</span>（趁机）提出，让藏海把小枝当礼物收了。这时的藏海已经<span class="vocab-highlight" data-word="perceive">perceive</span>（察觉到）不对，却也只能<span class="vocab-highlight" data-word="politely">politely</span>（婉言）谢绝。杨真口口声声说<span class="vocab-highlight" data-word="value">value</span>（看重）藏海，还声称要<span class="vocab-highlight" data-word="promote">promote</span>（提拔）他做自己的<span class="vocab-highlight" data-word="deputy">deputy</span>（副手），就是要<span class="vocab-highlight" data-word="force">force</span>（强迫）藏海收下小枝。可藏海始终<span class="vocab-highlight" data-word="firmly">firmly</span>（坚决）不肯<span class="vocab-highlight" data-word="accept">accept</span>（接受）。他们甚至<span class="vocab-highlight" data-word="threaten">threaten</span>（威胁）藏海：真正<span class="vocab-highlight" data-word="intelligent">intelligent</span>（聪明的）人，一定是那种<span class="vocab-highlight" data-word="obedient">obedient</span>（听话的）。甚至让藏海给庄芦隐<span class="vocab-highlight" data-word="write">write</span>（写）一封辞呈，要用三年时间<span class="vocab-highlight" data-word="compile">compile</span>（编撰）一本庄氏<span class="vocab-highlight" data-word="biography">biography</span>（传记）。</p>

<span class="story-chapter">【第五幕：炭火之刑】</span>
<p>藏海<span class="vocab-highlight" data-word="spared">spared</span>（拼尽）全力才进入平津侯府。他太<span class="vocab-highlight" data-word="clear">clear</span>（清楚）自己的<span class="vocab-highlight" data-word="revenge">revenge</span>（复仇）<span class="vocab-highlight" data-word="target">target</span>（目标）。"我若是不<span class="vocab-highlight" data-word="agree">agree</span>（答应）呢？"瞿蛟突然<span class="vocab-highlight" data-word="draw">draw</span>（拔）剑相向。杨真就趁势把所有<span class="vocab-highlight" data-word="fault">fault</span>（罪责）都推到小枝身上，以她没有<span class="vocab-highlight" data-word="serve">serve</span>（伺候）好藏海为由要<span class="vocab-highlight" data-word="punish">punish</span>（惩罚）她。小枝吓得<span class="vocab-highlight" data-word="kneel">kneel</span>（跪）地求饶。藏海也<span class="vocab-highlight" data-word="see">see</span>（看穿）了杨真的心思——对方是想用小枝逼他<span class="vocab-highlight" data-word="yield">yield</span>（妥协）。正陷入<span class="vocab-highlight" data-word="dilemma">dilemma</span>（两难）之际，杨真竟直接夹起炉火中<span class="vocab-highlight" data-word="burning">burning</span>（烧红的）炭块，狠狠塞进小枝<span class="vocab-highlight" data-word="mouth">mouth</span>（口中）！藏海<span class="vocab-highlight" data-word="desperately">desperately</span>（拼命）上前阻止，小枝当场疼得<span class="vocab-highlight" data-word="faint">faint</span>（晕厥）过去。</p>

<span class="story-chapter">【第六幕：僵局化解】</span>
<p>这时，香老板<span class="vocab-highlight" data-word="push">push</span>（推）门而入，眼前正是一片<span class="vocab-highlight" data-word="mess">mess</span>（混乱）景象。她打着庄二公子要平账的<span class="vocab-highlight" data-word="banner">banner</span>（旗号），也算<span class="vocab-highlight" data-word="ease">ease</span>（缓解）了这场<span class="vocab-highlight" data-word="deadlock">deadlock</span>（僵局）。藏海见三人离开，赶紧上前<span class="vocab-highlight" data-word="check">check</span>（查看）小枝的<span class="vocab-highlight" data-word="condition">condition</span>（状况）——她的<span class="vocab-highlight" data-word="throat">throat</span>（喉咙）已经被严重<span class="vocab-highlight" data-word="scald">scald</span>（烫伤）。藏海立刻<span class="vocab-highlight" data-word="beg">beg</span>（恳请）郎中来<span class="vocab-highlight" data-word="cure">cure</span>（医治），又<span class="vocab-highlight" data-word="entrust">entrust</span>（拜托）香暗荼收留她，承诺日后定会前来<span class="vocab-highlight" data-word="reward">reward</span>（报答）。香老板顺势让藏海把<span class="vocab-highlight" data-word="drunk">drunk</span>（醉的）不省人事的庄之行接回侯府。藏海费了极大的<span class="vocab-highlight" data-word="effort">effort</span>（力气），才终于把庄之行<span class="vocab-highlight" data-word="safely">safely</span>（安全）地送了回去。</p>

<span class="story-chapter">【第七幕：谋局】</span>
<p>藏海去见了一直在<span class="vocab-highlight" data-word="wait">wait</span>（等候）他的高明，满心<span class="vocab-highlight" data-word="grief">grief</span>（难过）于<span class="vocab-highlight" data-word="implicate">implicate</span>（牵连）了<span class="vocab-highlight" data-word="innocent">innocent</span>（无辜的）小枝，却也<span class="vocab-highlight" data-word="soberly">soberly</span>（清醒地）意识到——庄芦隐已经<span class="vocab-highlight" data-word="notice">notice</span>（注意到）他了。这离他<span class="vocab-highlight" data-word="fulfill">fulfill</span>（实现）复仇计划，又近了一步。</p>
<p>他打算借庄二公子的门路，来<span class="vocab-highlight" data-word="approach">approach</span>（接近）庄芦隐。第二天，藏海就去见了正在<span class="vocab-highlight" data-word="bathing">bathing</span>（泡澡）享乐的庄之行。他先是<span class="vocab-highlight" data-word="explain">explain</span>（解释）了自己昨日前往枕楼是应杨大人的<span class="vocab-highlight" data-word="invitation">invitation</span>（邀约），又拐弯抹角向他<span class="vocab-highlight" data-word="inquire">inquire</span>（打听）侯府的内部<span class="vocab-highlight" data-word="situation">situation</span>（情况），想让侯爷对他<span class="vocab-highlight" data-word="attach">attach</span>（重视）起来。庄之行立刻<span class="vocab-highlight" data-word="alert">alert</span>（警觉）起来。藏海忙道："小的满心<span class="vocab-highlight" data-word="admire">admire</span>（仰慕）侯爷，却一直没有<span class="vocab-highlight" data-word="opportunity">opportunity</span>（机会）得见尊颜。"庄二见他态度<span class="vocab-highlight" data-word="sincere">sincere</span>（坦诚），心里也多了几分<span class="vocab-highlight" data-word="trust">trust</span>（信任），便随口给了他一句<span class="vocab-highlight" data-word="suggestion">suggestion</span>（建议）。</p>
<p>藏海又把自己此行的<span class="vocab-highlight" data-word="harvest">harvest</span>（收获）和<span class="vocab-highlight" data-word="thought">thought</span>（想法）悉数告诉了高明。庄二就是个典型的<span class="vocab-highlight" data-word="profligate">profligate</span>（纨绔的）子弟，他内心<span class="vocab-highlight" data-word="deep">deep</span>（深处）极度渴望得到父亲的<span class="vocab-highlight" data-word="attention">attention</span>（关注）——这恰恰是自己的绝佳<span class="vocab-highlight" data-word="chance">chance</span>（机会），必须<span class="vocab-highlight" data-word="hurry">hurry</span>（抓紧）布局。</p>

<p style="text-align:center;color:#c9a84c;margin-top:32px;font-weight:700">—— 第 5 集完 · 共 137 词 ——</p>`
        },
        {
            id: 6,
            title: '第 6 集',
            banner: '',
            wordCount: 94,
            words: [
                {id:1, en:"abnormal", ph:"/æbˈnɔːrml/", cn:"adj. 异常的", ex:'皇陵棺椁移位的<em>abnormal</em>异象震动朝野。'},
                {id:2, en:"furious", ph:"/ˈfjʊriəs/", cn:"adv. 震怒地", ex:'平津侯<em>furious</em>质问储怀明。'},
                {id:3, en:"anticipate", ph:"/ænˈtɪsɪpeɪt/", cn:"v. 料到", ex:'储怀明也并未<em>anticipate</em>。'},
                {id:4, en:"unexpected", ph:"/ˌʌnɪkˈspektɪd/", cn:"adj. 意外的", ex:'导致出了<em>unexpected</em>问题。'},
                {id:5, en:"undertake", ph:"/ˌʌndərˈteɪk/", cn:"v. 承担", ex:'平津侯不能主动向皇上<em>undertake</em>这个责任。'},
                {id:6, en:"advance", ph:"/ədˈvæns/", cn:"v. 进言", ex:'杨真趁机上前，向庄芦隐<em>advance</em>。'},
                {id:7, en:"renovate", ph:"/ˈrenəveɪt/", cn:"v. 修缮", ex:'借口皇陵年久失修需要<em>renovate</em>。'},
                {id:8, en:"original", ph:"/əˈrɪdʒənl/", cn:"adj. 原本的", ex:'偷偷把皇陵棺椁恢复<em>original</em>原样。'},
                {id:9, en:"feasible", ph:"/ˈfiːzəbl/", cn:"adj. 可行", ex:'平津侯也觉得此方案<em>feasible</em>。'},
                {id:10, en:"familiar", ph:"/fəˈmɪliər/", cn:"adj. 熟悉", ex:'藏海又<em>familiar</em>皇陵、又精通堪舆。'},
                {id:11, en:"involve", ph:"/ɪnˈvɑːlv/", cn:"v. 牵连", ex:'跟朝廷里的人没有<em>involve</em>。'},
                {id:12, en:"candidate", ph:"/ˈkændɪdət/", cn:"n. 人选", ex:'是处理皇陵异动的最佳<em>candidate</em>。'},
                {id:13, en:"value", ph:"/ˈvæljuː/", cn:"v. 看重", ex:'表面说是<em>value</em>这位新幕僚。'},
                {id:14, en:"scapegoat", ph:"/ˈskeɪpɡoʊt/", cn:"n. 替罪羊", ex:'其实就是想把藏海推去皇陵当<em>scapegoat</em>。'},
                {id:15, en:"deadly", ph:"/ˈdedli/", cn:"adj. 致命的", ex:'借皇陵的凶险置他于<em>deadly</em>死地。'},
                {id:16, en:"persuade", ph:"/pərˈsweɪd/", cn:"v. 说服", ex:'庄芦隐果然被他们<em>persuade</em>。'},
                {id:17, en:"summon", ph:"/ˈsʌmən/", cn:"v. 召见", ex:'summon藏海，给了他钦天监的official职务。'},
                {id:18, en:"official", ph:"/əˈfɪʃl/", cn:"adj. 正式的", ex:'summon藏海，给了他钦天监的<em>official</em>职务。'},
                {id:19, en:"issue", ph:"/ˈɪʃuː/", cn:"v. 下令", ex:'issue他即刻depart皇陵。'},
                {id:20, en:"depart", ph:"/dɪˈpɑːrt/", cn:"v. 前往", ex:'issue他即刻<em>depart</em>皇陵。'},
                {id:21, en:"root", ph:"/ruːt/", cn:"n. 根本", ex:'全权负责查清棺椁异动的rootcause。'},
                {id:22, en:"cause", ph:"/kɔːz/", cn:"n. 原因", ex:'全权负责查清棺椁异动的root<em>cause</em>。'},
                {id:23, en:"pretend", ph:"/prɪˈtend/", cn:"v. 装模作样", ex:'储怀明还<em>pretend</em>地说：你的八字与先帝相合。'},
                {id:24, en:"perceive", ph:"/pərˈsiːv/", cn:"v. 看出", ex:'藏海其实<em>perceive</em>了他们就是想让自己为先帝殉葬。'},
                {id:25, en:"life", ph:"/laɪf/", cn:"n. 性命", ex:'他们要的是你的<em>life</em>！'},
                {id:26, en:"refuse", ph:"/rɪˈfjuːz/", cn:"v. 推辞", ex:'藏海虽然是因为没有<em>refuse</em>的余地只能接下差事。'},
                {id:27, en:"act", ph:"/ækt/", cn:"v. 动手", ex:'自己就是要等对方<em>act</em>，才有机会reverse。'},
                {id:28, en:"reverse", ph:"/rɪˈvɜːrs/", cn:"v. 反败为胜", ex:'才有机会<em>reverse</em>、置之死地而后生。'},
                {id:29, en:"host", ph:"/hoʊst/", cn:"v. 主持", ex:'这座皇陵正是当年蒯铎hostdesign修建的。'},
                {id:30, en:"design", ph:"/dɪˈzaɪn/", cn:"v. 设计", ex:'这座皇陵正是当年蒯铎host<em>design</em>修建的。'},
                {id:31, en:"familiarize", ph:"/fəˈmɪliəraɪz/", cn:"v. 熟读", ex:'他自幼跟着父亲<em>familiarize</em>过皇陵的construction图纸。'},
                {id:32, en:"construction", ph:"/kənˈstrʌkʃn/", cn:"n. 构造", ex:'他自幼跟着父亲familiarize过皇陵的<em>construction</em>图纸。'},
                {id:33, en:"advantage", ph:"/ədˈvæntɪdʒ/", cn:"n. 优势", ex:'这既是险境，也是他独有的<em>advantage</em>。'},
                {id:34, en:"entrust", ph:"/ɪnˈtrʌst/", cn:"v. 拜托", ex:'他<em>entrust</em>了师父帮他两件urgent的事。'},
                {id:35, en:"urgent", ph:"/ˈɜːrdʒənt/", cn:"adj. 紧急的", ex:'他entrust了师父帮他两件<em>urgent</em>的事。'},
                {id:36, en:"dim", ph:"/dɪm/", cn:"adj. 昏暗的", ex:'环顾着这<em>dim</em>四周、faint烛火。'},
                {id:37, en:"faint", ph:"/feɪnt/", cn:"adj. 微弱的", ex:'环顾着这dim四周、<em>faint</em>烛火。'},
                {id:38, en:"damp", ph:"/dæmp/", cn:"adj. 湿哒哒的", ex:'抓起一把<em>damp</em>泥巴。'},
                {id:39, en:"displacement", ph:"/dɪsˈpleɪsmənt/", cn:"n. 位移", ex:'先帝棺椁<em>displacement</em>，便是地水所致。'},
                {id:40, en:"float", ph:"/floʊt/", cn:"v. 浮起来", ex:'金丝楠木遇到水就会<em>float</em>起来。'},
                {id:41, en:"excessive", ph:"/ɪkˈsesɪv/", cn:"adj. 过高", ex:'水位<em>excessive</em>，棺椁便会脱落。'},
                {id:42, en:"drift", ph:"/drɪft/", cn:"v. 漂动", ex:'在寝殿里来回<em>drift</em>。'},
                {id:43, en:"impact", ph:"/ˈɪmpækt/", cn:"n. 撞击", ex:'夜里来回<em>impact</em>的声音被人听见。'},
                {id:44, en:"misunderstand", ph:"/ˌmɪsʌndərˈstænd/", cn:"v. 误以为", ex:'misunderstand是先帝显灵。'},
                {id:45, en:"block", ph:"/blɑːk/", cn:"v. 堵", ex:'已经漂远的棺椁就停下，<em>block</em>在了门前。'},
                {id:46, en:"question", ph:"/ˈkwestʃən/", cn:"v. 质疑", ex:'藏海<em>question</em>皇陵的修建。'},
                {id:47, en:"add", ph:"/æd/", cn:"v. 增加", ex:'根本没有<em>add</em>防水的procedure。'},
                {id:48, en:"procedure", ph:"/prəˈsiːdʒər/", cn:"n. 工序", ex:'根本没有add防水的<em>procedure</em>。'},
                {id:49, en:"responsible", ph:"/rɪˈspɑːnsəbl/", cn:"adj. 负责", ex:'对此<em>responsible</em>的储怀明瞬间collapse。'},
                {id:50, en:"collapse", ph:"/kəˈlæps/", cn:"v. 破防", ex:'对此responsible的储怀明瞬间<em>collapse</em>。'},
                {id:51, en:"pale", ph:"/peɪl/", cn:"adj. 惨白", ex:'脸色瞬间<em>pale</em>。'},
                {id:52, en:"echo", ph:"/ˈekoʊ/", cn:"v. 应和", ex:'立刻<em>echo</em>道：就按你说的办！'},
                {id:53, en:"warn", ph:"/wɔːrn/", cn:"v. 叮嘱", ex:'还话里有话地<em>warn</em>藏海。'},
                {id:54, en:"launch", ph:"/lɔːntʃ/", cn:"v. 启动", ex:'藏海<em>launch</em>了皇陵的修缮工作。'},
                {id:55, en:"encounter", ph:"/ɪnˈkaʊntər/", cn:"v. 遇到", ex:'他<em>encounter</em>了当年全程participate修建皇陵的老伯伯。'},
                {id:56, en:"participate", ph:"/pɑːrˈtɪsɪpeɪt/", cn:"v. 参与", ex:'他encounter了当年全程<em>participate</em>修建皇陵的老伯伯。'},
                {id:57, en:"jerry-build", ph:"/ˈdʒeri bɪld/", cn:"v. 偷工减料", ex:'当年皇陵的<em>jerry-build</em>，全是储怀明和庄家大儿子supervise督办的。'},
                {id:58, en:"supervise", ph:"/ˈsuːpərvaɪz/", cn:"v. 督办", ex:'当年皇陵的jerry-build，全是储怀明和庄家大儿子<em>supervise</em>督办的。'},
                {id:59, en:"embezzle", ph:"/ɪmˈbezl/", cn:"v. 中饱私囊", ex:'二人<em>embezzle</em>，克扣了大半皇陵修建银两。'},
                {id:60, en:"disastrous", ph:"/dɪˈzæstrəs/", cn:"adj. 塌天的", ex:'如今出了<em>disastrous</em>祸事。'},
                {id:61, en:"figure", ph:"/ˈfɪɡjər/", cn:"v. 想", ex:'藏海则是早已<em>figure</em>清楚。'},
                {id:62, en:"drive", ph:"/draɪv/", cn:"v. 驱动", ex:'以水力<em>drive</em>，水升石降。'},
                {id:63, en:"disguise", ph:"/dɪsˈɡaɪz/", cn:"v. 扮作", ex:'高明<em>disguise</em>一位眼盲的算命先生。'},
                {id:64, en:"intercept", ph:"/ˌɪntərˈsept/", cn:"v. 截下", ex:'intercept了平津侯的马车。'},
                {id:65, en:"mysterious", ph:"/mɪˈstɪriəs/", cn:"adv. 神叨叨地", ex:'mysterious地说道。'},
                {id:66, en:"evil", ph:"/ˈiːvl/", cn:"adj. 煞气", ex:'大人周身隐约透出<em>evil</em>。'},
                {id:67, en:"fatal", ph:"/ˈfeɪtl/", cn:"adj. 致命的", ex:'恐怕会遭遇<em>fatal</em>命坎！'},
                {id:68, en:"nonsense", ph:"/ˈnɑːnsens/", cn:"n. 胡言", ex:'一派<em>nonsense</em>！'},
                {id:69, en:"fear", ph:"/fɪr/", cn:"v. 害怕", ex:'但其实内心已然<em>fear</em>。'},
                {id:70, en:"continue", ph:"/kənˈtɪnjuː/", cn:"v. 继续", ex:'高明立刻<em>continue</em>演下去。'},
                {id:71, en:"tomb", ph:"/tuːm/", cn:"n. 阴宅", ex:'最近是不是有什么<em>tomb</em>风水之事？'},
                {id:72, en:"answer", ph:"/ˈænsər/", cn:"v. 回答", ex:'侯爷虽然没直接<em>answer</em>。'},
                {id:73, en:"resolve", ph:"/rɪˈzɑːlv/", cn:"v. 化解", ex:'追问如何<em>resolve</em>。'},
                {id:74, en:"change", ph:"/tʃeɪndʒ/", cn:"v. 变化", ex:'说刚刚抽的签竟然发生了<em>change</em>。'},
                {id:75, en:"explain", ph:"/ɪkˈspleɪn/", cn:"v. 解释", ex:'explain道已有吉星降临。'},
                {id:76, en:"reveal", ph:"/rɪˈviːl/", cn:"v. 显露", ex:'但需要在他将死未死之际才会<em>reveal</em>真身。'},
                {id:77, en:"smoothly", ph:"/ˈsmuːðli/", cn:"adv. 如期", ex:'听闻藏海已经快要将修缮工作<em>smoothly</em>完工。'},
                {id:78, en:"greatly", ph:"/ˈɡreɪtli/", cn:"adv. 大为", ex:'侯爷一边在大公子和杨真面前<em>greatly</em>praise他。'},
                {id:79, en:"praise", ph:"/preɪz/", cn:"v. 赞扬", ex:'侯爷一边在大公子和杨真面前greatly<em>praise</em>他。'},
                {id:80, en:"corruption", ph:"/kəˈrʌpʃn/", cn:"n. 贪污", ex:'原来是自己的儿子当年的<em>corruption</em>导致皇陵漏水。'},
                {id:81, en:"devise", ph:"/dɪˈvaɪz/", cn:"v. 谋划", ex:'杨真便<em>devise</em>道，等藏海修缮complete后，让藏海给先帝殉葬。'},
                {id:82, en:"complete", ph:"/kəmˈpliːt/", cn:"v. 完成", ex:'杨真便devise道，等藏海修缮<em>complete</em>后，让藏海给先帝殉葬。'},
                {id:83, en:"fate", ph:"/feɪt/", cn:"n. 命格", ex:'他八字全阴，是最好的殉葬<em>fate</em>。'},
                {id:84, en:"mandate", ph:"/ˈmændeɪt/", cn:"v. 下令", ex:'依旧<em>mandate</em>道：就按你们说的办，不准有mistake！'},
                {id:85, en:"mistake", ph:"/mɪˈsteɪk/", cn:"n. 差池", ex:'依旧mandate道：就按你们说的办，不准有<em>mistake</em>！'},
                {id:86, en:"celebrate", ph:"/ˈselɪbreɪt/", cn:"v. 庆祝", ex:'皇陵完工之日，藏海和工匠们一同饮酒<em>celebrate</em>。'},
                {id:87, en:"admire", ph:"/ədˈmaɪər/", cn:"v. 敬佩", ex:'大家都很是<em>admire</em>这位年轻的藏大人。'},
                {id:88, en:"meet", ph:"/miːt/", cn:"v. 相见", ex:'但也都心知肚明，此后，很难再<em>meet</em>相见。'},
                {id:89, en:"hypocritical", ph:"/ˌhɪpəˈkrɪtɪkl/", cn:"adj. 假惺惺", ex:'储怀明<em>hypocritical</em>地说大家辛苦、人人有reward。'},
                {id:90, en:"reward", ph:"/rɪˈwɔːrd/", cn:"n. 赏赐", ex:'储怀明hypocritical地说大家辛苦、人人有<em>reward</em>。'},
                {id:91, en:"solemn", ph:"/ˈsɑːləm/", cn:"adj. 凝重", ex:'藏海站在一旁，神色<em>solemn</em>。'},
                {id:92, en:"dissuade", ph:"/dɪˈsweɪd/", cn:"v. 劝阻", ex:'其他的工匠纷纷想要上前<em>dissuade</em>。'},
                {id:93, en:"resonant", ph:"/ˈrezənənt/", cn:"adj. 铿锵", ex:'可藏海字字<em>resonant</em>道：卑职领命，自愿殉葬。'},
                {id:94, en:"chess", ph:"/tʃes/", cn:"n. 棋", ex:'一身入局的第一步<em>chess</em>，似乎就要落下。'}
            ],
            story: `<h2>🏯 藏海传 · 第 6 集</h2>

<span class="story-chapter">【第一幕：皇陵异动】</span>
<p>皇陵棺椁移位的<span class="vocab-highlight" data-word="abnormal">abnormal</span>（异常的）异象震动朝野。平津侯<span class="vocab-highlight" data-word="furious">furious</span>（震怒地）质问储怀明，储怀明也并未<span class="vocab-highlight" data-word="anticipate">anticipate</span>（料到）会出现<span class="vocab-highlight" data-word="unexpected">unexpected</span>（意外的）问题。平津侯不能主动向皇上<span class="vocab-highlight" data-word="undertake">undertake</span>（承担）这个责任。杨真趁机上前，向庄芦隐<span class="vocab-highlight" data-word="advance">advance</span>（进言），借口皇陵年久失修需要<span class="vocab-highlight" data-word="renovate">renovate</span>（修缮），偷偷把皇陵棺椁恢复<span class="vocab-highlight" data-word="original">original</span>（原本的）原样。平津侯也觉得此方案<span class="vocab-highlight" data-word="feasible">feasible</span>（可行）。藏海又<span class="vocab-highlight" data-word="familiar">familiar</span>（熟悉）皇陵、又精通堪舆，跟朝廷里的人没有<span class="vocab-highlight" data-word="involve">involve</span>（牵连），是处理皇陵异动的最佳<span class="vocab-highlight" data-word="candidate">candidate</span>（人选）。</p>

<span class="story-chapter">【第二幕：替罪羊】</span>
<p>表面说是<span class="vocab-highlight" data-word="value">value</span>（看重）这位新幕僚，其实就是想把藏海推去皇陵当<span class="vocab-highlight" data-word="scapegoat">scapegoat</span>（替罪羊），借皇陵的凶险置他于<span class="vocab-highlight" data-word="deadly">deadly</span>（致命的）死地。庄芦隐果然被他们<span class="vocab-highlight" data-word="persuade">persuade</span>（说服），<span class="vocab-highlight" data-word="summon">summon</span>（召见）藏海，给了他钦天监的<span class="vocab-highlight" data-word="official">official</span>（正式的）职务，<span class="vocab-highlight" data-word="issue">issue</span>（下令）他即刻<span class="vocab-highlight" data-word="depart">depart</span>（前往）皇陵，全权负责查清棺椁异动的<span class="vocab-highlight" data-word="root">root</span>（根本）<span class="vocab-highlight" data-word="cause">cause</span>（原因）。储怀明还<span class="vocab-highlight" data-word="pretend">pretend</span>（装模作样）地说："你的八字与先帝相合。"藏海其实早已<span class="vocab-highlight" data-word="perceive">perceive</span>（看出）——他们就是想要自己的<span class="vocab-highlight" data-word="life">life</span>（性命）！但藏海并没有<span class="vocab-highlight" data-word="refuse">refuse</span>（推辞），他自己就是要等对方<span class="vocab-highlight" data-word="act">act</span>（动手），才有机会<span class="vocab-highlight" data-word="reverse">reverse</span>（反败为胜）、置之死地而后生。</p>

<span class="story-chapter">【第三幕：堪舆之术】</span>
<p>这座皇陵正是当年蒯铎<span class="vocab-highlight" data-word="host">host</span>（主持）<span class="vocab-highlight" data-word="design">design</span>（设计）修建的。他自幼跟着父亲<span class="vocab-highlight" data-word="familiarize">familiarize</span>（熟读）过皇陵的<span class="vocab-highlight" data-word="construction">construction</span>（构造）图纸——这既是险境，也是他独有的<span class="vocab-highlight" data-word="advantage">advantage</span>（优势）。他<span class="vocab-highlight" data-word="entrust">entrust</span>（拜托）了师父帮他两件<span class="vocab-highlight" data-word="urgent">urgent</span>（紧急的）事。</p>
<p>来到皇陵，环顾着这<span class="vocab-highlight" data-word="dim">dim</span>（昏暗的）四周、<span class="vocab-highlight" data-word="faint">faint</span>（微弱的）烛火，藏海抓起一把<span class="vocab-highlight" data-word="damp">damp</span>（湿哒哒的）泥巴，断定：先帝棺椁<span class="vocab-highlight" data-word="displacement">displacement</span>（位移），便是地水所致。金丝楠木遇到水就会<span class="vocab-highlight" data-word="float">float</span>（浮起来）。水位<span class="vocab-highlight" data-word="excessive">excessive</span>（过高），棺椁便会脱落，在寝殿里来回<span class="vocab-highlight" data-word="drift">drift</span>（漂动），夜里来回<span class="vocab-highlight" data-word="impact">impact</span>（撞击）的声音被人听见，<span class="vocab-highlight" data-word="misunderstand">misunderstand</span>（误以为）是先帝显灵。已经漂远的棺椁就停下，<span class="vocab-highlight" data-word="block">block</span>（堵）在了门前。</p>

<span class="story-chapter">【第四幕：偷工减料】</span>
<p>藏海<span class="vocab-highlight" data-word="question">question</span>（质疑）皇陵的修建——根本没有<span class="vocab-highlight" data-word="add">add</span>（增加）防水的<span class="vocab-highlight" data-word="procedure">procedure</span>（工序）！对此<span class="vocab-highlight" data-word="responsible">responsible</span>（负责）的储怀明瞬间<span class="vocab-highlight" data-word="collapse">collapse</span>（破防），脸色瞬间<span class="vocab-highlight" data-word="pale">pale</span>（惨白），立刻<span class="vocab-highlight" data-word="echo">echo</span>（应和）道："就按你说的办！"还话里有话地<span class="vocab-highlight" data-word="warn">warn</span>（叮嘱）藏海。藏海<span class="vocab-highlight" data-word="launch">launch</span>（启动）了皇陵的修缮工作。他<span class="vocab-highlight" data-word="encounter">encounter</span>（遇到）了当年全程<span class="vocab-highlight" data-word="participate">participate</span>（参与）修建皇陵的老伯伯，得知当年皇陵的<span class="vocab-highlight" data-word="jerry-build">jerry-build</span>（偷工减料），全是储怀明和庄家大儿子<span class="vocab-highlight" data-word="supervise">supervise</span>（督办）的。二人<span class="vocab-highlight" data-word="embezzle">embezzle</span>（中饱私囊），克扣了大半皇陵修建银两。如今出了<span class="vocab-highlight" data-word="disastrous">disastrous</span>（塌天的）祸事，藏海则是早已<span class="vocab-highlight" data-word="figure">figure</span>（想）清楚——以水力<span class="vocab-highlight" data-word="drive">drive</span>（驱动），水升石降。</p>

<span class="story-chapter">【第五幕：神算先生】</span>
<p>高明<span class="vocab-highlight" data-word="disguise">disguise</span>（扮作）一位眼盲的算命先生，<span class="vocab-highlight" data-word="intercept">intercept</span>（截下）了平津侯的马车，<span class="vocab-highlight" data-word="mysterious">mysterious</span>（神叨叨地）说道："大人周身隐约透出<span class="vocab-highlight" data-word="evil">evil</span>（煞气），恐怕会遭遇<span class="vocab-highlight" data-word="fatal">fatal</span>（致命的）命坎！"平津侯呵斥："一派<span class="vocab-highlight" data-word="nonsense">nonsense</span>（胡言）！"但其实内心已然<span class="vocab-highlight" data-word="fear">fear</span>（害怕）。高明立刻<span class="vocab-highlight" data-word="continue">continue</span>（继续）演下去："最近是不是有什么<span class="vocab-highlight" data-word="tomb">tomb</span>（阴宅）风水之事？"侯爷虽然没直接<span class="vocab-highlight" data-word="answer">answer</span>（回答），却追问如何<span class="vocab-highlight" data-word="resolve">resolve</span>（化解）。高明说刚刚抽的签竟然发生了<span class="vocab-highlight" data-word="change">change</span>（变化），<span class="vocab-highlight" data-word="explain">explain</span>（解释）道已有吉星降临，但需要在他将死未死之际才会<span class="vocab-highlight" data-word="reveal">reveal</span>（显露）真身。</p>

<span class="story-chapter">【第六幕：暗流涌动】</span>
<p>听闻藏海已经快要将修缮工作<span class="vocab-highlight" data-word="smoothly">smoothly</span>（如期）完工，侯爷一边在大公子和杨真面前<span class="vocab-highlight" data-word="greatly">greatly</span>（大为）<span class="vocab-highlight" data-word="praise">praise</span>（赞扬）他，一边暗中发现原来是自己的儿子当年的<span class="vocab-highlight" data-word="corruption">corruption</span>（贪污）导致皇陵漏水。杨真便<span class="vocab-highlight" data-word="devise">devise</span>（谋划）道，等藏海修缮<span class="vocab-highlight" data-word="complete">complete</span>（完成）后，让藏海给先帝殉葬——他八字全阴，是最好的殉葬<span class="vocab-highlight" data-word="fate">fate</span>（命格）。平津侯依旧<span class="vocab-highlight" data-word="mandate">mandate</span>（下令）道："就按你们说的办，不准有<span class="vocab-highlight" data-word="mistake">mistake</span>（差池）！"</p>

<span class="story-chapter">【第七幕：自愿殉葬】</span>
<p>皇陵完工之日，藏海和工匠们一同饮酒<span class="vocab-highlight" data-word="celebrate">celebrate</span>（庆祝）。大家都很是<span class="vocab-highlight" data-word="admire">admire</span>（敬佩）这位年轻的藏大人，但也都心知肚明，此后，很难再<span class="vocab-highlight" data-word="meet">meet</span>（相见）。储怀明<span class="vocab-highlight" data-word="hypocritical">hypocritical</span>（假惺惺）地说大家辛苦、人人有<span class="vocab-highlight" data-word="reward">reward</span>（赏赐）。藏海站在一旁，神色<span class="vocab-highlight" data-word="solemn">solemn</span>（凝重）。当储怀明宣布让藏海殉葬的消息，其他的工匠纷纷想要上前<span class="vocab-highlight" data-word="dissuade">dissuade</span>（劝阻）。可藏海字字<span class="vocab-highlight" data-word="resonant">resonant</span>（铿锵）道："卑职领命，自愿殉葬。"</p>
<p>一身入局的第一步<span class="vocab-highlight" data-word="chess">chess</span>（棋），似乎就要落下。</p>

<p style="text-align:center;color:#c9a84c;margin-top:32px;font-weight:700">—— 第 6 集完 · 共 94 词 ——</p>`
        }
    ]
};

