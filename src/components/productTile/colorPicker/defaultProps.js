import React from 'react'
import { ColorPicker } from 'SRC'

const shotArray = ["production/catalog/wak2rvvdrpmluo6peb9h", "production/catalog/owmwe2lyrmr99permxr4", "production/catalog/wtrrxkdlwpklim7rlyiu", "production/catalog/xdwwdzqk24fo0owaqndz", "production/catalog/oucrcwm42o6xhvtxbmq1", "production/catalog/basfuzvwak8u2hilqj1v", "production/catalog/o1rszbcrufaks9ygwzww", "production/catalog/imrkuhqxaqdiu4oomjle", "production/catalog/fk39dh1t47mtkpijdyun", "production/catalog/dagebgdzbt8rqy3gvtkw", "production/catalog/lg6vmowasxlreacdmgro", "production/catalog/lhpazeztq4qumbtsmelz", "production/catalog/u1a7etvrbcexgqbii4zh", "production/catalog/doyteg6jrjxuglsxkzp3", "production/catalog/tkzomcrk2mhper3hsa8u", "production/catalog/w2527fpnx1mlfqcbrhft", "production/catalog/qzatfgvimltgtbjmc3t5", "production/catalog/msbkdqdh6kmmoi5rlepp", "production/catalog/i06w3mygpj0snc4eo7ql", "production/catalog/vvywdnvhqb1mbv0eoggl", "production/catalog/nieojkfyhkjgcxfefk44", "production/catalog/bb4u7o0gtzmanyrwhb4s", "production/catalog/zzebv00uuua0tkw1x0ax", "production/catalog/al9da1xk61r9uk1w57e2", "production/catalog/awiuznkn6h8nakcnkqgz", "production/catalog/n9t5kh1ukx6exiw9cnln", "production/catalog/qavddykruox6jligkp3t", "production/catalog/z6sj5cd0pznfkecleunk", "production/catalog/ukwydv88attvygdbt7tz", "production/catalog/b36wj1pc93yafkolqvhl", "production/catalog/ckmxluk7zm0typajferw", "production/catalog/hl0vmfnbnwkbxhntc0sx", "production/catalog/myfmfdwxt92brvpvyvak", "production/catalog/wdlw1i5gmvawpjzdwuml", "production/catalog/mildhrmfpawqv9fw8z4b", "production/catalog/gjwhsf5qt99ndfepoikx", "production/catalog/iavsjsmim3wvyxm4zmgb", "production/catalog/sgcoqdqk8aazonzuepb7", "production/catalog/qpdfbsakclwbrj1cnxdr", "production/catalog/y6hv3su2wb9geuqftvty", "production/catalog/n3rqsno3vk0eaelckxmn", "production/catalog/o1csftmlsfchfwedu0s2", "production/catalog/s6qcp5rpljjlb4c2zicl", "production/catalog/b9j1tnvj38yh7j409py3", "production/catalog/ovqyymdkbzvyvikqawfo", "production/catalog/vx39f5wkhsrpijgn2fuw", "production/catalog/dwbnxzgvr6afgtv5fr6m", "production/catalog/ohlznaczz70rdae7wfmc", "production/catalog/kqbf4t0qowdnggqrhndc", "production/catalog/t7l8dop5uj11hp2gzhih", "production/catalog/ggbuvcxrodegaubhhbc9", "production/catalog/ly38obojybaksquee7bl", "production/catalog/l0cd8lhmcwz5gkwonicl", "production/catalog/bulappmqkrcfiuqud0cu", "production/catalog/s372ssmdgud4grpxrcqs", "production/catalog/e9b1g0oaczgv5r04rtvo", "production/catalog/u4nnpbxvkejkacwgesil", "production/catalog/zkfvjh7rwftsdxomgama", "production/catalog/mbbfyne5oczkk2m4fcgg", "production/catalog/kagcnctizjhxgxltewdj", "production/catalog/rkidbypzuzgln9nlimqd", "production/catalog/mxbpwdffdq9krvnfqmpe", "production/catalog/ckhvmzfmaqu3vo17ekf4", "production/catalog/ntnewmnhtlykdlkjbjef", "production/catalog/bhk2mk1x3vis6jf6ei5w", "production/catalog/v6mplbnsecrnliurwshj", "production/catalog/lb2ka3fxfywlitwmeolz", "production/catalog/ojdzkatvc4optpblbdjz", "production/catalog/fo2oxg5neqajthr0m1x6", "production/catalog/abku8nd6le64kwyiqgiy", "production/catalog/evehstbaume505778w6j", "production/catalog/aykfp4mtwhl2dnq0p3le", "production/catalog/tucawo2z4aaerrnxrxob", "production/catalog/gfedzhsea90o1mf6hgdi", "production/catalog/j2ls24a5ocxvwj9z8kd2", "production/catalog/kpyrclqi9yu0rdstw9ne", "production/catalog/inteslwsqf7lchanqawj", "production/catalog/ckn9fqycbvjnkd6q7pwt", "production/catalog/affcarpm1nfirxxwfunk", "production/catalog/gnjjk6qdghnvvfvrzuxo", "production/catalog/axuc2pp25mzvdxndpjiy", "production/catalog/wqznrh4s7bnww68pd0wr", "production/catalog/ofzs6nmjpkcpoeijcdln", "production/catalog/woyrndhzumih482eg5gw", "production/catalog/pqqpuxovx8qadeydisby", "production/catalog/v82kzcdqpcbikf9bredn", "production/catalog/ylhxrll6vvunt08gqrjz", "production/catalog/uteyxsjg1ff2vomghmei", "production/catalog/uoia02pwkwdnvushgnar", "production/catalog/yco81boijhz2i3uuy1rk", "production/catalog/ndn6soys5olhic4m1tyh", "production/catalog/qtjaoeeeghrauld2qthg", "production/catalog/phtbslb0ko9b92xtwj6v", "production/catalog/b3sjcmd6cokcwmyz9al2", "production/catalog/sm97iryovbe1oflyirkt", "production/catalog/sp4tgkph0mihuou8u71i", "production/catalog/tzpiscmcfbj5ionnmnkq", "production/catalog/i5bay1rgtgbgbti7azs7", "production/catalog/u8nfj4gp3oqlmh4c2efr", "production/catalog/om6iwe8mvk4gjebpnfpm", "production/catalog/e8fdhoz1sxcqrs6snu4v", "production/catalog/dtxshjbp0kqesskibqob", "production/catalog/al2ml7ggopugh1qj5bm4", "production/catalog/ilegqrrfqjp12ylwa5vr", "production/catalog/q0wxcjahnjwwtevlxvco", "production/catalog/jhywtz40hj6uczgg4rdb", "production/catalog/qahup7ibs7ljtsehbxte", "production/catalog/pkxhliod3v4uorwpsluo", "production/catalog/db0sfpijevhjiqcolruk", "production/catalog/kzldlkfi2zud8pqdy18y", "production/catalog/zaanudkuutvkensumqkp", "production/catalog/k0otqcwaoyb1wzr0u98z", "production/catalog/vepatywikcl2a1xfc896", "production/catalog/jm3ahliyzjpnvto8wequ", "production/catalog/zggyk1fkvtfoezoknehx", "production/catalog/ioubg5bvtpnlxdmfgxhd", "production/catalog/pgwssbevdimpkjymfdiv", "production/catalog/j3kgjnd7m2m8v1jrdgp8", "production/catalog/vgld8t4vgohdthk3vqc8", "production/catalog/fyzulsfcegnmjj37tygn", "production/catalog/ove0zkgwyoimhncobhru", "production/catalog/lyvrgfbajuuwq2w6jfxu", "production/catalog/uioqingwiys2lgbinejx", "production/catalog/gyekdszumxdh3ansgw3v", "production/catalog/f9qilpgjyoyrpwv4sfsh", "production/catalog/wqzpughqrwr5gdvr2dgj", "production/catalog/i8uj76amb392j3qfqkdu", "production/catalog/gmfe6n3hon5hasyb0xfc", "production/catalog/z4td20z36w9zplraodhd", "production/catalog/nzn1nrczexpjkbvc5lpl", "production/catalog/vq8xnul4btvyi61nbcql", "production/catalog/n9xnrvis9ctkzxgi9pig", "production/catalog/rrnsmnaqlgdvjultuowm", "production/catalog/wcxm7ceccddnrhbm1i3z", "production/catalog/psvplmxwhrakj21kkdrt", "production/catalog/cchc1devnq4vppgekzjz", "production/catalog/peqioyfo08c9aajbn1eg", "production/catalog/kazccsokkpe6tb0epadl", "production/catalog/smo87dqqynhsjfsrngqc", "production/catalog/pdyewhwzigw7cnjtuycv", "production/catalog/ni6ns75lqponkppf1vzf", "production/catalog/itewzmfzsnndslthndnd", "production/catalog/tjetyx1wdhvh4d1dyesh", "production/catalog/j37d1apku9um6cqhgzgp", "production/catalog/agls1aoijmzuksrw9bd9", "production/catalog/q3klc8pwgsiywzbxhb3e", "production/catalog/i4rtaeo9ldylgf4oisvu", "production/catalog/ekjtybsbikm2eyjpkeca", "production/catalog/jickuifmvgg66nt8yrak", "production/catalog/x6dx0womepthl927jtt5", "production/catalog/efgkiidniumjplq8brir", "production/catalog/th1ozs6e58xvwahtug8q", "production/catalog/jpfdh03svree2kinw33v", "production/catalog/erzve2pdfv9jromdrtcn", "production/catalog/gex8zawccvucf9sixo9p", "production/catalog/xwm7gwq5b3xewez90siv", "production/catalog/mybdn8qvjewrgjmazife", "production/catalog/ncdtpqiseli5cznurgk1", "production/catalog/la6b2vceu6ivonfp3j8r", "production/catalog/qlqdyapbk3odwawavgi6", "production/catalog/aahz72iza0jkiq9r5ia5", "production/catalog/fbelcsmeo7l2jvooctti", "production/catalog/zoxtieqxndoyhcldhyjw", "production/catalog/ssnkavtq4jipl4yfwcoc", "production/catalog/durduuttcnpxacozf4vk", "production/catalog/ultohxaqc1jzcyyezk43", "production/catalog/k5fpmiznxn4w1sx45ws7", "production/catalog/lie2vdrcht7dav3kixtf", "production/catalog/ajlsnmxqyxiwzcxkzmh4", "production/catalog/pwnppxrebguei0zh53cf", "production/catalog/wbnv9zoa8yazsufretmk"]


export const swatch = shotArray.map((publicId) => {
  return (
    <ColorPicker
    alt='Multi'
    src={`https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,q_100,t_swatch,w_40/v1/${publicId}.jpg`}
    input={{
      name: 'color-block',
      value: 'multi',
      checked: false
    }} />
  )
})

export const centerx100y100 = shotArray.map((publicId) => {
  return (
    <ColorPicker
    alt='Multi'
    src={`https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,q_100,c_crop,dpr_1.0,g_center,h_64,q_100,r_0,w_64,x_100,y_100,w_40/v1/${publicId}.jpg`}
    input={{
      name: 'color-block',
      value: 'multi',
      checked: false
    }} />
  )
})

export const centerx150y150 = shotArray.map((publicId) => {
  return (
    <ColorPicker
    alt='Multi'
    src={`https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,q_100,c_crop,dpr_1.0,g_center,h_64,q_100,r_0,w_64,x_150,y_150,w_40/v1/${publicId}.jpg`}
    input={{
      name: 'color-block',
      value: 'multi',
      checked: false
    }} />
  )
})

export const centerx0y0 = shotArray.map((publicId) => {
  return (
    <ColorPicker
    alt='Multi'
    src={`https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,q_100,c_crop,dpr_1.0,g_center,h_64,q_100,r_0,w_64,w_40/v1/${publicId}.jpg`}
    input={{
      name: 'color-block',
      value: 'multi',
      checked: false
    }} />
  )
})

export const northx10y620 = shotArray.map((publicId) => {
  return (
    <ColorPicker
    alt='Multi'
    src={`https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,q_100,c_crop,dpr_1.0,g_north,h_64,q_100,r_0,w_64,x_10,y_620,w_40/v1/${publicId}.jpg`}
    input={{
      name: 'color-block',
      value: 'multi',
      checked: false
    }} />
  )
})
