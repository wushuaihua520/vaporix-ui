import { VxPickerOption } from '@/uni_modules/vaporix-ui/libs/picker'

/* 演示用的省市区数据。生产项目用完整的国家统计局数据，组件只看 text / value / children。 */

const leaf = (text: string, value: string, disabled: boolean = false): VxPickerOption => {
	return { text: text, value: value, disabled: disabled }
}

const node = (text: string, value: string, children: VxPickerOption[]): VxPickerOption => {
	return { text: text, value: value, children: children }
}

export const regionOptions: VxPickerOption[] = [
	node('北京市', '110000', [
		node('北京市市辖区', '110100', [
			leaf('东城区', '110101'),
			leaf('西城区', '110102'),
			leaf('朝阳区', '110105'),
			leaf('海淀区', '110108'),
			leaf('丰台区', '110106'),
			leaf('通州区', '110112')
		])
	]),
	node('上海市', '310000', [
		node('上海市市辖区', '310100', [
			leaf('黄浦区', '310101'),
			leaf('徐汇区', '310104'),
			leaf('长宁区', '310105'),
			leaf('静安区', '310106'),
			leaf('浦东新区', '310115')
		])
	]),
	node('广东省', '440000', [
		node('广州市', '440100', [
			leaf('荔湾区', '440103'),
			leaf('越秀区', '440104'),
			leaf('海珠区', '440105'),
			leaf('天河区', '440106'),
			leaf('白云区', '440111')
		]),
		node('深圳市', '440300', [
			leaf('福田区', '440304'),
			leaf('罗湖区', '440303'),
			leaf('南山区', '440305'),
			leaf('宝安区', '440306'),
			leaf('龙岗区', '440307', true)
		]),
		node('珠海市', '440400', [
			leaf('香洲区', '440402'),
			leaf('斗门区', '440403'),
			leaf('金湾区', '440404')
		])
	]),
	node('浙江省', '330000', [
		node('杭州市', '330100', [
			leaf('上城区', '330102'),
			leaf('拱墅区', '330105'),
			leaf('西湖区', '330106'),
			leaf('滨江区', '330108'),
			leaf('余杭区', '330110')
		]),
		node('宁波市', '330200', [
			leaf('海曙区', '330203'),
			leaf('江北区', '330205'),
			leaf('鄞州区', '330212'),
			leaf('镇海区', '330211', true)
		])
	]),
	node('江苏省', '320000', [
		node('南京市', '320100', [
			leaf('玄武区', '320102'),
			leaf('秦淮区', '320104'),
			leaf('建邺区', '320105'),
			leaf('鼓楼区', '320106')
		]),
		node('苏州市', '320500', [
			leaf('姑苏区', '320508'),
			leaf('虎丘区', '320505'),
			leaf('吴中区', '320506'),
			leaf('相城区', '320507')
		])
	]),
	node('四川省', '510000', [
		node('成都市', '510100', [
			leaf('锦江区', '510104'),
			leaf('青羊区', '510105'),
			leaf('金牛区', '510106'),
			leaf('武侯区', '510107'),
			leaf('成华区', '510108')
		]),
		node('绵阳市', '510700', [
			leaf('涪城区', '510703'),
			leaf('游仙区', '510704'),
			leaf('安州区', '510705', true)
		])
	]),
	node('湖北省', '420000', [
		node('武汉市', '420100', [
			leaf('江岸区', '420102'),
			leaf('江汉区', '420103'),
			leaf('硚口区', '420104'),
			leaf('汉阳区', '420105'),
			leaf('武昌区', '420106')
		]),
		node('宜昌市', '420500', [
			leaf('西陵区', '420502'),
			leaf('伍家岗区', '420503'),
			leaf('点军区', '420504')
		])
	]),
	node('陕西省', '610000', [
		node('西安市', '610100', [
			leaf('新城区', '610102'),
			leaf('碑林区', '610103'),
			leaf('莲湖区', '610104'),
			leaf('雁塔区', '610113'),
			leaf('未央区', '610112')
		])
	]),
	node('云南省', '530000', [
		node('昆明市', '530100', [
			leaf('五华区', '530102'),
			leaf('盘龙区', '530103'),
			leaf('官渡区', '530111'),
			leaf('西山区', '530112')
		]),
		node('大理白族自治州', '532900', [
			leaf('大理市', '532901'),
			leaf('祥云县', '532923'),
			leaf('宾川县', '532924')
		])
	]),
	node('内蒙古自治区', '150000', [
		node('呼和浩特市', '150100', [
			leaf('新城区', '150102'),
			leaf('回民区', '150103'),
			leaf('玉泉区', '150104'),
			leaf('赛罕区', '150105')
		]),
		node('包头市', '150200', [
			leaf('东河区', '150202'),
			leaf('昆都仑区', '150203'),
			leaf('青山区', '150204')
		])
	]),
	node('香港特别行政区', '810000', [
		node('香港岛', '810100', [
			leaf('中西区', '810101'),
			leaf('湾仔区', '810102'),
			leaf('东区', '810103')
		]),
		node('九龙', '810200', [
			leaf('油尖旺区', '810201'),
			leaf('深水埗区', '810202', true),
			leaf('九龙城区', '810203')
		])
	]),
	node('台湾省', '710000', [
		node('台北市', '710100', [
			leaf('中正区', '710101'),
			leaf('大同区', '710102'),
			leaf('中山区', '710104')
		]),
		node('高雄市', '710200', [
			leaf('新兴区', '710201'),
			leaf('前金区', '710202'),
			leaf('苓雅区', '710203')
		])
	])
]

// 只留省和市，演示两级联动；和三级示例共用同一份数据，不用再抄一遍。
export const provinceCityOptions: VxPickerOption[] = (() => {
	const list: VxPickerOption[] = []
	for (let index = 0; index < regionOptions.length; index++) {
		const province = regionOptions[index]
		const source = province.children == null ? [] : province.children
		const cities: VxPickerOption[] = []
		for (let cityIndex = 0; cityIndex < source.length; cityIndex++) {
			cities.push({
				text: source[cityIndex].text,
				value: source[cityIndex].value,
				disabled: source[cityIndex].disabled
			})
		}
		list.push({ text: province.text, value: province.value, children: cities })
	}
	return list
})()

// 四层数据：园区 → 座 → 楼层 → 房间，用来演示列数随数据深度变化。
export const buildingOptions: VxPickerOption[] = [
	node('启元科技园', 'park-qy', [
		node('A 座', 'block-a', [
			node('3 层', 'a-3', [leaf('301', 'a-301'), leaf('302', 'a-302'), leaf('303', 'a-303')]),
			node('5 层', 'a-5', [leaf('501', 'a-501'), leaf('502', 'a-502')])
		]),
		node('B 座', 'block-b', [
			node('2 层', 'b-2', [leaf('201', 'b-201'), leaf('202', 'b-202')]),
			node('4 层', 'b-4', [leaf('401', 'b-401'), leaf('402', 'b-402')])
		])
	]),
	node('星河中心', 'park-xh', [
		node('T1 座', 'block-t1', [
			node('8 层', 't1-8', [leaf('801', 't1-801'), leaf('802', 't1-802')])
		]),
		node('T2 座', 'block-t2', [
			node('9 层', 't2-9', [leaf('901', 't2-901'), leaf('902', 't2-902')])
		])
	])
]

export const regionDefaultValues: Array<string> = ['440000', '440300', '440305']

export const provinceCityDefaultValues: Array<string> = ['330000', '330100']

export const buildingDefaultValues: Array<string> = ['park-qy', 'block-a', 'a-3', 'a-301']
