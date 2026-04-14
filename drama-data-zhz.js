// 《藏海传》剧集数据
// 自动从剧情助记文本提取、去重生成

window.DRAMA_ZHZ = {
    id: 'zhz',
    title: '《藏海传》',
    subtitle: '跟着奴奴速记单词',
    cover: 'images/zhz.jpg',
    description: '故事基于电视剧藏海传，词汇覆盖到大学四六级。',
    totalEpisodes: 40,
    totalWords: 245,
    releasedEpisodes: 2,
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
        }
    ]
};

