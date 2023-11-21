// Challenge 03 - Codember 2023
/*
1. Analiza la lista de políticas y claves de cifrado que encontrarás en este archivo:
https://codember.dev/data/encryption_policies.txt

2. Crea un programa que devuelva la clave inválida número 42 (de todas las claves inválidas,
la 42ª en orden de aparición). Por ejemplo:
submit bqamidgewtbuz
*/

const contrasenias = '8-10 r: ozrcdfnug\n' +
    '9-10 q: hvsazxrigf\n' +
    '1-9 j: bbqonxjt\n' +
    '6-8 e: pzqcywelwiogwt\n' +
    '4-7 t: vvxirpoid\n' +
    '10-10 g: gifzgmpab\n' +
    '7-8 w: lfpveulq\n' +
    '8-10 f: xlcgglmllky\n' +
    '7-9 w: siridrjzxqpngwr\n' +
    '2-3 n: fkrmnniuxeboq\n' +
    '8-10 g: zlbevnqppg\n' +
    '1-6 a: yqvwieerrklo\n' +
    '1-9 d: vxannmz\n' +
    '8-10 u: hhjyvkckfxo\n' +
    '7-10 i: nljzuyfzb\n' +
    '9-10 c: imgjjpzdbmrw\n' +
    '9-9 v: hysjskvlajhxpd\n' +
    '10-10 w: oojxss\n' +
    '1-10 s: yysatgxngpxwoem\n' +
    '9-9 i: uhwcmhcdby\n' +
    '3-6 x: tygtgmzqgaoa\n' +
    '6-9 q: ivrvhtzzer\n' +
    '6-10 g: fwgegzkdv\n' +
    '6-7 l: wcjluyprnxu\n' +
    '9-10 a: fyefdpsdzaebc\n' +
    '7-8 y: kwxuffrrneojaco\n' +
    '6-10 p: dwgackmgbsus\n' +
    '8-8 o: dtiyaqmqndsp\n' +
    '2-8 i: gmafxjksdtxfjt\n' +
    '2-4 l: xwjuygyfnqgsz\n' +
    '1-1 b: kodslr\n' +
    '9-9 g: pdnxrrfxhjhi\n' +
    '4-9 t: ohmczh\n' +
    '4-5 d: qeavdrtphhyqrvb\n' +
    '1-3 i: qnuel\n' +
    '7-10 l: wbwdnzvqku\n' +
    '10-10 n: jjwhjrrysbpg\n' +
    '9-10 b: kovvlhsvdqfg\n' +
    '1-1 g: xolpkt\n' +
    '5-8 g: qubspcaytneg\n' +
    '2-8 k: fmptvvd\n' +
    '10-10 x: hzlaflrshptiy\n' +
    '4-10 i: dywatt\n' +
    '6-6 x: eflrp\n' +
    '9-10 d: bgamidqewtbus\n' +
    '3-10 n: llysdv\n' +
    '2-3 k: bvcbvo\n' +
    '8-9 a: iyljc\n' +
    '10-10 f: ndyfogk\n' +
    '1-9 z: nylbijvgysm\n' +
    '7-8 i: bjqgqt\n' +
    '5-7 u: tdtcwitrr\n' +
    '8-9 x: spwuw\n' +
    '8-10 y: rpzcs\n' +
    '2-7 i: gcysmom\n' +
    '1-9 n: jymsnungqygcq\n' +
    '4-4 a: kcrohkxqg\n' +
    '10-10 t: mvebpf\n' +
    '4-7 r: vfhunjqziv\n' +
    '10-10 k: mtmdjbv\n' +
    '5-6 c: sowigndyyai\n' +
    '7-7 b: cifknttgrpn\n' +
    '3-4 q: zrubvrlegv\n' +
    '8-10 r: ivczqqrois\n' +
    '8-10 z: ykqosdbk\n' +
    '9-9 h: urjpxaz\n' +
    '1-8 w: pxhfxubuyvo\n' +
    '4-6 a: tumdapgxenvr\n' +
    '2-7 f: yaeyvbkrdras\n' +
    '5-8 s: paqxymwsbah\n' +
    '8-8 x: xtxpnhgbofdrs\n' +
    '7-10 r: iqfpszsx\n' +
    '8-10 c: cdfsfnyiqwtcssy\n' +
    '5-10 z: suvqelmvkmvcy\n' +
    '5-7 b: hiodfdwq\n' +
    '4-5 u: zqghtqmw\n' +
    '8-10 h: liqwd\n' +
    '1-7 o: qhrlwdoltv\n' +
    '3-7 w: tcqcq\n' +
    '6-6 o: bfjaddqxqgssq\n' +
    '4-7 j: gkbzxsffzrnckzj\n' +
    '4-6 d: ogvdasrmribaqps\n' +
    '9-10 m: jrgezkxytjuf\n' +
    '2-9 g: htyjxmzulz\n' +
    '3-5 b: gxgvzkkx\n' +
    '6-8 g: iwgomwhwpjspj\n' +
    '2-7 b: usdmm\n' +
    '4-9 z: bowpthcs\n' +
    '5-8 v: ahrljnttfukcrw\n' +
    '1-7 d: rnwrji\n' +
    '8-9 q: zwtylxkv\n' +
    '5-9 b: ivxeagzx\n' +
    '7-9 o: wjtncvtwwlpv\n' +
    '4-4 m: xbpafqjzwdepp\n' +
    '7-8 x: znlfxvtbraikxjf\n' +
    '5-9 j: hybkaj\n' +
    '5-6 g: xjducbyhdrst\n' +
    '2-3 e: rupyvlo\n' +
    '1-1 y: yrruzwhbfkk\n' +
    '5-10 c: dxkhzipe\n' +
    '7-10 z: outpx\n' +
    '6-10 t: nlygjceachhhqij\n' +
    '5-10 f: fpuvb\n' +
    '10-10 c: laftqdzlcao\n' +
    '4-7 s: xotywhvh\n' +
    '1-8 w: qapwcw\n' +
    '5-10 g: zoiosnanbuugsbr\n' +
    '3-4 k: zuotdwegpfaut\n' +
    '1-3 y: kjjkhsr\n' +
    '8-8 n: vwipg\n' +
    '5-7 i: ofowebiqsuec\n' +
    '4-9 a: ixyewqvinq\n' +
    '1-3 v: cmqrlibqkpe\n' +
    '2-10 l: gtwnznkpm\n' +
    '6-7 y: eqhasppna\n' +
    '2-5 s: nhwfgrtsuoz\n' +
    '2-6 z: eigodwfjbwmsf\n' +
    '7-10 b: kvlif\n' +
    '1-3 i: moiiqwwbh\n' +
    '3-3 f: wvgyabdhgbjgoj\n' +
    '5-8 x: lyvgrb\n' +
    '5-5 x: afwocoxvzujg\n' +
    '6-10 o: egmuvuyxc\n' +
    '5-5 o: qomkkznp\n' +
    '6-10 q: isbdoqwkuozz\n' +
    '4-4 w: gcvtasxufjbgh\n' +
    '10-10 y: mimjvbwedh\n' +
    '4-10 x: kmfwtqmg\n' +
    '5-7 v: fhqjmstxuq\n' +
    '3-6 l: ggzcxkrzc\n' +
    '1-5 x: ktnfvz\n' +
    '7-7 d: uzthjbbxb\n' +
    '8-8 k: rpcuickgpcqp\n' +
    '9-9 i: jhmxls\n' +
    '6-6 j: pdvdgvodybqoty\n' +
    '7-7 e: zsmlnjjppwenmfg\n' +
    '9-10 d: drtnbb\n' +
    '2-9 t: dtdjusghxfjnk\n' +
    '5-9 u: njmijoctlludoa\n' +
    '4-9 n: rrkellcjp\n' +
    '2-8 s: eebsu\n' +
    '6-6 y: yjiptrs\n' +
    '2-9 c: ubggdune\n' +
    '4-8 n: ddcljhnptqrl\n' +
    '5-9 j: qnunzylw\n' +
    '1-7 f: ycqtdtcafiulm\n' +
    '9-9 g: gntyxnlb\n' +
    '1-5 i: mrlqt\n' +
    '9-10 q: gnwgseil\n' +
    '10-10 y: zojixlcsjd\n' +
    '1-4 w: iabesorarfowunh\n' +
    '9-10 i: glsptiqjt\n' +
    '7-9 p: vuxjj\n' +
    '10-10 d: edzbjzrrtnn\n' +
    '7-7 m: iqxrctdn\n' +
    '8-8 a: yudznhiy\n' +
    '4-6 e: rtqkztjjkyt\n' +
    '6-7 h: tchcuyunzxngh\n' +
    '5-10 q: pwtosnyorwqtt\n' +
    '8-10 k: arjuubxwfhirj\n' +
    '4-7 l: ydsanrbcxxnws\n' +
    '9-9 p: upvxqygmz\n' +
    '2-6 i: zduzras\n' +
    '4-9 o: danygeslyzelv\n' +
    '8-8 w: kkisegumx\n' +
    '3-8 t: wyjobisjh\n' +
    '8-9 d: etdze\n' +
    '2-4 q: hztgwbtku\n' +
    '10-10 y: qigddpj\n' +
    '3-10 u: aekdbznktxhhctu\n' +
    '2-3 i: oacbzkc\n' +
    '1-8 h: azyhyxnj\n' +
    '8-10 g: dkwkplqdfhry\n' +
    '6-7 h: nkfrol\n' +
    '4-7 o: htcuracoi\n' +
    '4-7 c: qiapikaiji\n' +
    '1-3 d: wxrvykfewrcr\n' +
    '2-7 d: aiwyytzuuq\n' +
    '7-10 l: mayhendroaj\n' +
    '10-10 w: cztbyaaoubvtja\n' +
    '8-9 a: ghvjtd\n' +
    '10-10 q: rlsqnhyoqsqd\n' +
    '7-9 a: xnfkibaldshxws\n' +
    '4-4 s: ounylctxyd\n' +
    '5-6 n: kzhmoagidyle\n' +
    '6-10 s: mswyvytow\n' +
    '6-9 u: suwlhjcnkpgrtv\n' +
    '4-4 r: btwxrkimhnffwr\n' +
    '4-5 u: ernqjnscqvrjzbd\n' +
    '2-2 r: yhkdxjkuy\n' +
    '1-3 p: pfmduv\n' +
    '10-10 k: cmknadgfxgiiw\n' +
    '2-2 o: acqvlqcnqtsem\n' +
    '4-7 c: dbvvlsydhbepk\n' +
    '1-5 t: akysdiarek\n' +
    '1-4 q: nwovcsvdpuma\n' +
    '9-10 b: xlbmykuusdann\n' +
    '2-9 y: yuvyayectdxj\n' +
    '2-9 t: qvdnfcxdoqwxjw\n' +
    '6-9 t: icxpei\n' +
    '8-10 n: euynwapumiic\n' +
    '3-9 v: ilupkmmhzbjvhu\n' +
    '1-5 z: ymorcaxogkiim\n' +
    '3-10 d: tpzcheysueiqas\n' +
    '7-10 b: weauuhosrmgzvv\n' +
    '2-7 c: asyue\n' +
    '10-10 s: gufkolsevebvpru\n' +
    '9-9 t: ghgxzpollnee\n' +
    '8-10 p: rwmajwbootmj\n' +
    '1-7 r: vojubpncicmoyxq\n' +
    '3-8 g: zwtclkhux\n' +
    '6-8 r: ztlkfxoujd\n' +
    '10-10 t: mkxiyfjbqnlii\n' +
    '2-5 i: oxvalyfmpsahgf\n' +
    '9-9 j: xwbpwgzo\n' +
    '7-8 o: tizkcoxwpqyryf\n' +
    '1-3 w: qkmisjvfatywi\n' +
    '5-8 r: jozangypzlrf\n' +
    '8-8 c: zoeowdk\n' +
    '1-2 w: wdfflckcjnceb\n' +
    '10-10 b: cyhdd\n' +
    '5-7 d: amhepcrktiuvvk\n' +
    '1-9 p: xdkctmvtoa\n' +
    '6-6 p: hsydtlxjftab\n' +
    '3-9 x: vmfstlen\n' +
    '2-5 j: qefmk\n' +
    '10-10 w: firbfo\n' +
    '9-9 t: vtvorreuq\n' +
    '3-9 q: vbnvf\n' +
    '5-7 d: rzfdnmwlehnjxt\n' +
    '9-9 f: esloelgkzgihp\n' +
    '8-8 r: sbnhygrguo\n' +
    '6-9 d: llybjbajpibr\n' +
    '2-4 q: itikoiexmtxd\n' +
    '6-6 n: uxblhtl\n' +
    '9-9 y: obwyforcrabfuuy\n' +
    '8-10 x: tekkudropxxt\n' +
    '1-1 r: pzwws\n' +
    '9-9 h: udbzxiifn\n' +
    '4-8 r: guiclzojblg\n' +
    '2-8 s: zuhmhvlktvh\n' +
    '4-7 g: mjmflepbhrlj\n' +
    '10-10 n: ucdnanjjsftty\n' +
    '8-10 v: wvfqhpm\n' +
    '2-8 t: wzchieehwfgohcq\n' +
    '4-10 n: lsxfrgz\n' +
    '9-9 u: paotl\n' +
    '7-10 s: mcylon\n' +
    '3-10 f: kzqjrcljohyjat\n' +
    '8-9 e: yabwyivmlanv\n' +
    '9-9 a: kjwqzfohq\n' +
    '2-7 x: lqfxyzzzcivl\n' +
    '6-10 v: lmjypukcyulsst\n' +
    '2-10 z: ggelhwocnk\n' +
    '5-7 t: xenffooe\n' +
    '4-6 g: ixkls\n' +
    '10-10 n: ofyfipxn\n' +
    '6-6 s: fnnufwp\n' +
    '7-7 r: expdcfdauczler\n' +
    '9-9 g: uowurzo\n' +
    '4-6 v: iivuf\n' +
    '6-9 k: hnshun\n' +
    '7-8 h: zkjlyxqza\n' +
    '1-7 e: jupqyycbsfl\n' +
    '6-6 k: xstrunykiycl\n' +
    '1-10 b: rttuvbrairceca\n' +
    '7-7 p: xgpoomivc\n' +
    '3-5 i: suaoe\n' +
    '1-6 t: xiowndnccojbdxl\n' +
    '10-10 d: ctvlplseppjnjf\n' +
    '6-9 f: irsdx\n' +
    '2-6 a: fpmnrmubfrh\n' +
    '4-8 r: atybqpoeswbjdr\n' +
    '9-10 k: fhnbe\n' +
    '3-5 q: vodpuhs\n' +
    '3-6 h: lbmaiw\n' +
    '4-4 s: joicgouzefuzff\n' +
    '5-6 o: nkritzr\n' +
    '5-7 t: dczzuusprvhjwel\n' +
    '8-10 z: ngwapbjhghi\n' +
    '2-2 u: omwqjh\n' +
    '5-6 f: uhmzjatqg\n' +
    '5-10 p: edjqbociloc\n' +
    '8-9 u: zrataihprppked\n' +
    '4-6 z: aqwfrmvhtlpq\n' +
    '3-9 l: wplbshoy\n' +
    '1-9 e: wminrrpgfr\n' +
    '5-6 k: wdvqngtmmtbzxjk\n' +
    '2-7 c: ptharwgn\n' +
    '4-6 s: sytmluweomy\n' +
    '8-9 n: tteqngrfyfxhxj\n' +
    '8-8 u: vadfiv\n' +
    '1-9 u: qzrzg\n' +
    '5-5 j: dhrvz\n' +
    '8-9 p: swtedii\n' +
    '7-9 z: vigiuogz\n' +
    '4-4 h: mrzself\n' +
    '3-6 k: suxmhlbu\n' +
    '1-4 i: ywfufvc\n' +
    '8-9 j: tycjdb\n' +
    '3-4 e: zjnzeuxzanrbe\n' +
    '6-6 b: zsibwipjzyglzc\n' +
    '1-2 e: dhorfrnqu\n' +
    '2-4 t: dusjlqayivtqp\n' +
    '4-4 s: ijnemgdildkh\n' +
    '3-6 j: mfswx\n' +
    '10-10 c: izeaxcasxorpapq\n' +
    '3-3 c: uxrumikdtpptqu\n' +
    '2-10 o: kqqukevdapxxij\n' +
    '9-10 q: lwmzwfjxk\n' +
    '9-9 q: gwodurvzho\n' +
    '5-8 r: xhudg\n' +
    '6-7 g: jydiibn\n' +
    '4-4 n: dxjrr\n' +
    '8-8 q: uusvflpccyigs\n' +
    '2-8 b: mfehit\n' +
    '6-6 f: mvjifcvkxujm\n' +
    '9-10 j: rrhjwxntalgd\n' +
    '9-9 s: ycyeesbpnnab\n' +
    '4-8 z: niniu\n' +
    '8-9 s: cxtowkhzftx\n' +
    '5-7 o: iaappteglayzfnf\n' +
    '9-10 i: psmlcr\n' +
    '9-10 g: vpjtomscyjfly\n' +
    '8-10 w: pbkazzbbqh\n' +
    '5-8 h: ucfuqkbtgr\n' +
    '2-8 s: eikmjel\n' +
    '9-9 t: etrchyqtfaf\n' +
    '8-8 b: asqnolcrcixx\n' +
    '8-8 x: kvput\n' +
    '4-9 t: mmnnlxyh\n' +
    '8-8 g: xtikclzwkhbbtt\n' +
    '3-5 v: cpwwjskvxlaydz\n' +
    '10-10 h: wxaxipezp\n' +
    '6-9 o: pctkaig\n' +
    '10-10 x: hljrt\n' +
    '8-8 h: kdmvpmrwb\n' +
    '4-7 v: hqmcasokrblpn\n' +
    '4-8 u: phjtrtzme\n' +
    '1-5 b: sqvalxokxru\n' +
    '8-10 w: epmytpuekvsghf\n' +
    '4-9 h: zyoajhsagyxhjxv\n' +
    '5-7 i: fhvarohjorejh\n' +
    '1-4 q: lkzfhpjzjuu\n' +
    '3-6 x: fjygmzcvv\n' +
    '9-10 n: peaylec\n' +
    '1-6 m: xhtylvol\n' +
    '8-8 i: otsloauykoggx\n' +
    '1-3 d: aqzlmscof\n' +
    '7-10 r: idluoaxvwgml\n' +
    '7-7 r: wixcx\n' +
    '8-9 q: dnvufcbs\n' +
    '3-3 q: yrsix\n' +
    '4-4 n: chusuenbyvzb\n' +
    '1-5 d: klfkkzssfmiytuo\n' +
    '4-7 b: llraeqstpsvkw\n' +
    '4-10 e: ejrmjjgqarrlv\n' +
    '7-9 z: hzvjicgnlmlfbzv\n' +
    '9-10 v: uggnlqlepn\n' +
    '8-9 o: wfrvj\n' +
    '2-2 m: gxtagtxjjr\n' +
    '4-10 b: dyamkdlvpsig\n' +
    '3-3 l: gafcejaaqd\n' +
    '2-6 z: qorxzmietsd\n' +
    '5-8 h: pzuvezzztlqbfg\n' +
    '5-8 b: tamiy\n' +
    '3-10 q: pydyuosinnaowkp\n' +
    '1-5 f: rgsxlgi\n' +
    '1-10 m: dtexfrs\n' +
    '5-6 p: wgcbvyeijz\n' +
    '4-6 m: uarixhtrn\n' +
    '1-9 d: ynhdgpcd\n' +
    '4-10 q: wfqmkogakchbre\n' +
    '4-8 b: gokfk\n' +
    '5-8 m: efjqrseq\n' +
    '7-10 g: pcloef\n' +
    '1-3 k: ltntpcvr\n' +
    '5-6 r: onjyyyean\n' +
    '1-8 d: htdivwdhphb\n' +
    '5-7 r: koqomqryg\n' +
    '4-6 x: phlnfjxk\n' +
    '10-10 h: aofesjqaxgq\n' +
    '9-10 c: qikwma\n' +
    '6-7 x: zieefaazjukv\n' +
    '9-10 n: plhmdmhofuggdu\n' +
    '8-9 x: qckskyoz\n' +
    '1-9 e: ubfjleihbtk\n' +
    '5-7 c: bpjmez\n' +
    '9-10 u: bsjfrnxygeh\n' +
    '3-6 e: djszyjr\n' +
    '10-10 l: atkgyunujvehsl\n' +
    '9-9 y: crbnqpsfku\n' +
    '8-9 p: vwllerkgxnkdc\n' +
    '5-5 t: fdnuitsxu\n' +
    '5-8 u: agcijvi\n' +
    '1-6 g: jytdtomtwu\n' +
    '5-5 p: gyuglpnlqez\n' +
    '10-10 w: zrfarqfevrug\n' +
    '4-6 i: tjmjnnngksk\n' +
    '4-8 x: meroctyegccrvg\n' +
    '7-7 s: uholyuccn\n' +
    '4-7 q: nnvlmakatgegw\n' +
    '4-10 p: zmwrc\n' +
    '4-4 n: amvpkjrqem\n' +
    '2-5 r: wqknpkmsacm\n' +
    '9-9 z: wdkyprmgrizjvs\n' +
    '9-9 d: nxgqvpq\n' +
    '7-8 j: qteqcp\n' +
    '8-10 k: gnmbbgnucbkgh\n' +
    '1-3 m: phkzqy\n' +
    '6-9 j: tbnkkpolmfryvx\n' +
    '4-10 n: jtdrdtrdhbd\n' +
    '7-7 f: ldrma\n' +
    '2-3 c: djfnnjdoyl\n' +
    '9-10 k: ocvoxxo\n' +
    '2-7 g: qsjriarzvvj\n' +
    '3-8 t: jhuvulkuggom\n' +
    '1-3 u: kabcesqnsrwof\n' +
    '3-9 k: lqgrpbcva\n' +
    '1-10 b: ywwkpngsmc\n' +
    '2-9 v: ytrdfzgqvimdq\n' +
    '6-9 g: qtrlxusknb\n' +
    '6-9 x: oauaaxazegfa\n' +
    '7-7 h: idnxrjc\n' +
    '8-9 v: ecxzvxboqdeybm\n' +
    '7-7 u: oiejrdegda\n' +
    '1-8 w: bbprsaizr\n' +
    '5-7 t: hkohqiouhity\n' +
    '10-10 t: plvtvusdlfy\n' +
    '3-7 y: nsglxvchbqtj\n' +
    '9-9 r: mcplogwkkgp\n' +
    '4-5 r: vogmgk\n' +
    '1-1 o: rvdfttcjvjp\n' +
    '10-10 i: bvlfpbedaudydw\n' +
    '2-7 l: yyezoage\n' +
    '1-1 t: vnoffsvgilwed\n' +
    '2-9 q: nuelf\n' +
    '7-7 o: dmanukcgrhnmz\n' +
    '1-7 i: spnykaq\n' +
    '9-10 f: zrbbttpk\n' +
    '9-10 c: wsibsdudywm\n' +
    '2-3 m: anxofhkbnudkzsl\n' +
    '1-5 s: meynkgbxhrmlpov\n' +
    '5-7 p: jmbbiafl\n' +
    '4-5 a: ldoqbdoibxtkwlm\n' +
    '1-7 d: zjbomuwqto\n' +
    '4-10 h: heydkxk\n' +
    '8-9 q: ftxtkezitffc\n' +
    '3-10 t: jszdxfa\n' +
    '8-8 p: swjluowwhypqo\n' +
    '7-8 y: oxgesctzrfauc\n' +
    '7-7 u: qlyavsyral\n' +
    '4-5 o: gbbncuewwj\n' +
    '7-7 g: ctgxrcdtfktmx\n' +
    '4-9 p: gaoyvwoaobtjaw\n' +
    '7-8 b: agkrpstygucmj\n' +
    '7-7 q: srsdxqxshwewx\n' +
    '8-8 f: cmddmfppantb\n' +
    '4-4 q: fnwxty\n' +
    '3-8 b: ujyxfgkiky\n' +
    '1-10 m: etmjjmqymmmql\n' +
    '9-9 u: epmclhulhhefo\n' +
    '3-4 z: cvwwxjd\n' +
    '3-8 b: xyvxfxpnftuixim\n' +
    '3-10 c: npkoiusttjv\n' +
    '8-8 k: ymndpkvzbjdsg\n' +
    '6-9 w: hyjzohfoe\n' +
    '7-7 z: hmgykqscpgnn\n' +
    '3-10 c: xhxbncgofcnk\n' +
    '2-7 m: wbspedadumoqfq\n' +
    '10-10 z: czxiw\n' +
    '1-8 h: mphku\n' +
    '4-8 d: ccixnnxe\n' +
    '7-9 r: hhsszicrttwizk\n' +
    '8-9 i: fxrmyxtynfggmxd\n' +
    '9-9 f: abccn\n' +
    '4-10 y: rcgpazaegcxnc\n' +
    '2-2 q: jncwibzyrqi\n' +
    '7-10 f: dqmirwccscer\n' +
    '7-7 w: ehzfswcd\n' +
    '7-9 x: nsius\n' +
    '9-10 h: doczjpxgpc\n' +
    '8-10 m: epkupgbmyjfpxv\n' +
    '8-8 f: eaagsnfzy\n' +
    '10-10 b: peosgoupjx\n' +
    '3-5 k: ckwqpiaw\n' +
    '3-10 q: ohrthtsmsyavc\n' +
    '2-2 d: wfrorjahsjlk\n' +
    '8-10 d: ljobzldfml\n' +
    '5-5 a: kthyhpiweldzp\n' +
    '7-10 a: bqgkqodsnerjv\n' +
    '10-10 z: ywljccdd\n' +
    '2-7 s: rfwzubzuieotaov\n' +
    '7-9 e: syqvrazzzjm\n' +
    '6-7 s: afcsxrib\n' +
    '4-8 o: cjgmhv\n' +
    '5-9 l: sqivoindk\n' +
    '5-10 c: eyrlqezulasez\n' +
    '10-10 p: spxyowwaxfdlj\n' +
    '4-9 e: wlepyecbd'


const vaciar_objeto = (objeto_contrasenia) => {
    objeto_contrasenia.min = 0
    objeto_contrasenia.max = 0
    objeto_contrasenia.letra = ''
    objeto_contrasenia.cadena = ''
}


const desestructurar_contrasenia = (contrasenias) => {
    const objeto_contrasenia = {}
    const lista_contrasenias = contrasenias.split('\n')
    let lista_desestructurada = []
    for (const contrasenia of lista_contrasenias) {
        const objeto_contrasenia = {
            min: 0,
            max: 0,
            letra: '',
            cadena: ''
        }
        let min = contrasenia.split('-')[0]
        let max = (contrasenia.split('-')[1]).split(' ')[0]
        let letra = (contrasenia.split(':')[0]).split(' ')[1]
        let cadena = (contrasenia.split(':')[1]).trim()
        objeto_contrasenia.min = min
        objeto_contrasenia.max = max
        objeto_contrasenia.letra = letra
        objeto_contrasenia.cadena = cadena
        lista_desestructurada = [...lista_desestructurada, objeto_contrasenia]

    }
    return lista_desestructurada
}

const contar_letras = (contrasenia) => {
    let contador = 0
    for (let i=0; i<contrasenia.cadena.length; i++) {
        if (contrasenia.letra === contrasenia.cadena[i]) {
            contador++
        }
    }
    return contador
}


const comprobar_contrasenia = (lista) => {
    let contrasenias_no_validas = []
    for (const contrasenia of lista) {
        const repeticiones = contar_letras(contrasenia)
        if (repeticiones < contrasenia.min || repeticiones >= contrasenia.max) {
            if (contrasenias_no_validas.length<42){
                contrasenias_no_validas.push(contrasenia)
            }
            else {
                break
            }
        }

    }
    return contrasenias_no_validas[41]
}

const lista_desestructurada = desestructurar_contrasenia(contrasenias)

console.log(comprobar_contrasenia(lista_desestructurada).cadena)

