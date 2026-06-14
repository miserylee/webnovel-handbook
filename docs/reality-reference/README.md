# reality-reference

现实职业、行业、县域、制度、公共事务和生活事实专题。

本目录文件多，禁止为了“真实感”整目录读取。agent 必须先判断剧情主轴、叙事功能和风险边界，再按关键词读取单个目标专题。现实资料只服务人物选择、冲突升级、证据推进、生活质感和安全纠错，不替代正文写作。

## 1. 先读哪篇

| 任务 | 先读 | 作用 |
|---|---|---|
| 只想补职业/行业/生活可信度 | `30-profession-industry-life-detail-credibility.md` | 提取物件、流程、口吻、工作场景和专业可信度 |
| 只想补地域、时代、社会风俗 | `31-region-era-social-custom-texture.md` | 提取地方生活、关系结构、风俗和时代质感 |
| 不确定该读哪个现实专题 | `../workflows/57-knowledge-base-routing-consolidation-guide.md` | 先判主轴、证据、伤害结果和叙事回报 |
| 涉及违法、隐私、未成年人、公共安全、医疗金融 | `../safety-research/README.md` | 先确认安全边界，再读现实专题 |

## 2. 按剧情主轴分流

| 主轴 | 代表专题 | 适用场景 |
|---|---|---|
| 身份、证件、影像、历史证据 | `161-identity-documents-registration-records-permits-credentials-civil-status.md`、`174-photography-video-image-evidence-portrait-right-privacy-editing-spread.md`、`220-county-archives-local-gazetteer-genealogy-school-marriage-land-records-historical-evidence.md` | 身份核验、证照、照片视频证据、档案、族谱、旧记录 |
| 职场、劳动、公司和平台 | `162-workplace-employment-hiring-contract-payroll-performance-promotion-termination-labor-rights.md`、`178-company-enterprise-equity-partnership-employment-labor-commercial-dispute.md`、`187-platform-account-live-commerce-mcn-guild-influencer-fandom-digital-labor-dispute.md`、`201-county-employment-migrant-work-return-home-employment-gig-market-labor-agency-wage-arrears-rights.md` | 打工、合同、工资、裁员、股权、直播平台、返乡就业和欠薪 |
| 钱、税、票据、消费纠纷 | `165-bank-loan-credit-insurance-tax-invoice-financial-compliance-money-flow.md`、`180-consumer-rights-ecommerce-platform-return-refund-false-advertising-product-quality-after-sales.md`、`211-county-market-regulation-consumer-complaint-12315-product-quality-price-advertising-measurement-administrative-penalty.md`、`232-county-taxation-invoice-vat-small-business-tax-inspection-social-insurance-fees.md` | 借贷、保险、发票、退货、虚假宣传、价格、计量、税务 |
| 婚恋、家庭、继承和照护 | `176-romance-marriage-engagement-cohabitation-bride-price-dowry-divorce-property-intimate-responsibility.md`、`177-inheritance-will-estate-division-remarried-family-kinship-property-conflict.md`、`184-elderly-care-institution-nursing-home-community-care-guardianship-contract-rights-risk.md`、`203-county-elderly-care-support-remarriage-long-term-care-inheritance-elder-fraud-family-duty.md`、`234-county-womens-federation-domestic-violence-family-education-women-children-rights-aid.md` | 彩礼、离婚、遗产、重组家庭、养老、家暴、妇女儿童权益 |
| 公安、司法、救济和反诈 | `166-police-reporting-public-security-investigation-detention-search-case-procedure.md`、`214-county-telecom-network-fraud-anti-fraud-center-bank-card-freeze-stop-payment-warning-family-recovery.md`、`227-county-administrative-reconsideration-litigation-penalty-hearing-enforcement-state-compensation-remedy.md`、`228-county-basic-court-case-filing-mediation-trial-enforcement-credit-discipline.md`、`229-county-procuratorate-public-prosecution-arrest-review-legal-supervision-public-interest-litigation-minor-protection.md`、`230-county-community-corrections-release-resettlement-judicial-office-supervision-reintegration.md` | 报警、调查、拘留、反诈、处罚不服、起诉、执行、检察监督、社区矫正 |
| 医疗、教育、未成年人和心理危机 | `169-hospital-emergency-inpatient-medical-record-insurance-dispute-caregiving.md`、`181-education-training-tutoring-vocational-qualification-exam-registration-certificate-fraud-refund-dispute.md`、`192-school-bullying-minor-protection-home-school-communication-discipline-transfer-psychological-crisis-intervention.md`、`199-county-medical-resources-ambulance-transfer-tiered-diagnosis-medical-insurance-settlement-cross-region-treatment-serious-illness-assistance.md`、`200-rural-education-boarding-school-left-behind-children-nutrition-meal-school-bus-attendance-dropout-control-chain.md`、`205-county-mental-health-psychological-counseling-psychiatric-disorder-crisis-intervention-community-rehabilitation-family-care.md` | 急诊、病历、医保、培训退费、校园欺凌、留守儿童、心理危机 |
| 县域政务、投诉和社会治理 | `206-county-government-service-administrative-license-12345-hotline-information-disclosure-window-service-material-correction-business-environment.md`、`209-village-self-governance-village-affairs-disclosure-villagers-meeting-village-rules-supervision-collective-economy-organization.md`、`212-county-urban-management-vendor-street-stall-public-space-sanitation-parking-law-enforcement-dispute.md`、`213-county-petition-letters-visits-grid-governance-social-governance-center-dispute-prevention-resolution.md`、`221-county-discipline-inspection-supervision-patrol-village-affairs-corruption-reporting-integrity-risk.md`、`248-county-media-center-broadcast-tv-government-release-emergency-broadcast-public-opinion-short-video.md` | 政务窗口、12345、村务公开、摊贩执法、信访、纪检、舆情回应 |
| 农村、农业、土地和乡镇投资 | `194-rural-homestead-land-contract-collective-economy-expropriation-compensation-village-governance-dispute.md`、`195-rural-revitalization-township-investment-cooperative-agricultural-company-cultural-tourism-homestay-subsidy-risk.md`、`196-rural-finance-farmer-loan-agricultural-insurance-guarantee-mutual-aid-debt-dispute.md`、`197-agricultural-product-food-safety-pesticide-veterinary-drug-cold-chain-traceability-live-commerce-quality-complaint.md`、`198-county-logistics-cold-chain-warehouse-community-group-buying-origin-warehouse-express-to-village-agricultural-product-upward-supply-chain.md` | 宅基地、承包地、征收、合作社、农业贷款、农产品上行、冷链物流 |
| 食品、药品、动物和公共卫生 | `170-food-restaurant-kitchen-food-safety-delivery-banquet-allergy-poisoning-risk.md`、`172-pets-animals-veterinary-care-urban-pet-ownership-animal-injury-liability-welfare.md`、`231-county-pharmacy-drug-safety-prescription-medical-device-insurance-fraud-regulation.md`、`238-county-cdc-infectious-disease-reporting-vaccination-public-health-emergency.md`、`239-county-animal-disease-prevention-veterinary-quarantine-slaughter-livestock-zoonosis.md` | 餐饮安全、外卖、宴席、宠物伤人、药店、疾控、动物检疫 |
| 事故、灾害、生态和公共安全 | `164-fire-disaster-emergency-evacuation-rescue-accident-aftermath-safety.md`、`207-county-ecological-environment-pollution-complaint-discharge-permit-eia-rural-sewage-waste-livestock-mining-remediation.md`、`235-county-fire-rescue-supervision-inspection-fire-investigation-hidden-danger-rectification.md`、`236-county-emergency-management-work-safety-hazardous-chemicals-accident-investigation.md`、`237-county-natural-disaster-warning-transfer-relief-flood-drought-geological-hazard.md`、`242-county-meteorology-weather-warning-disaster-prevention-lightning-protection-artificial-weather.md` | 火灾、生产事故、污染投诉、防汛转移、地灾预警、气象灾害 |
| 交通、物流、住房和公共服务 | `168-driving-vehicle-road-traffic-accident-liability-insurance-mobility.md`、`173-express-logistics-warehouse-delivery-signature-return-lost-damaged-package-supply-chain-evidence.md`、`175-real-estate-rental-home-buying-selling-brokerage-property-management-moving-handover-dispute.md`、`208-county-utilities-water-electricity-gas-telecom-outage-repair-billing-complaint-public-service-continuity.md`、`241-county-public-transport-rural-passenger-bus-taxi-ride-hailing-station-transport-service-safety.md`、`250-county-housing-security-public-rental-affordable-rental-old-community-renovation-urban-village.md` | 交通事故、快递丢损、租房买房、物业、水电气、公交出租、公租房 |
| 文旅、文化市场、公共文化和特殊经营 | `182-tourism-travel-scenic-spot-hotel-agency-ticket-change-refund-guide-service-dispute.md`、`245-county-cultural-market-entertainment-venue-internet-cafe-script-murder-escape-room-minor-protection.md`、`247-county-sports-public-fitness-venues-events-high-risk-sports-lottery-fund.md`、`253-county-public-cultural-service-library-cultural-center-farmer-bookstore-reading-volunteer-activity.md`、`254-county-tobacco-monopoly-cigarette-retail-license-e-cigarette-minor-protection-counterfeit-smuggling.md` | 旅游、网吧/KTV/剧本杀、体育赛事、图书馆文化馆、烟草专卖和未成年人保护 |

## 3. 推荐链路

### 3.1 只补真实感

```text
30/31 基础质感 -> 目标专题十秒定位 -> 只提取物件、流程、口吻和生活动作
```

不要把制度流程整段塞进正文。真实感通常只需要三五个准确细节。

### 3.2 写制度冲突或办事线

```text
57 主轴判定 -> 目标现实专题 -> safety-research 边界 -> core/storycraft 转成场景冲突
```

适合：投诉、审批、处罚、救济、事故、案件、公共服务断点。

### 3.3 审稿查现实错误

```text
问题文本 -> 判断主体/证据/后果 -> 目标现实专题 -> 只改错误链条和危险表达
```

不要为了核查一个点，把相邻部门全读一遍。

## 4. 提取格式

读取现实专题时，只带走六类内容：

- 入口判断：什么时候需要这篇，什么时候不需要。
- 行动链：人物、机构或平台从问题出现到结果回写的步骤。
- 证据链：能推动事实判断的材料、记录、票据、监控、病历、合同等。
- 常见误写：AI 容易写假的部门、流程、权力边界或时间顺序。
- 人物冲突：制度如何压到面子、钱、关系、责任、尊严和选择。
- 安全边界：哪些内容只能写诱因、线索和后果，不能写操作方法。

## 5. 常见误用

- 不要因为背景是县城，就读取所有县域专题。
- 不要把“投诉”一律写成信访；先看对象是消费、政务、行政处罚、犯罪线索还是干部违纪。
- 不要把“未成年人保护”写成万能部门；先看发生在学校、网吧、烟草、家庭、心理危机还是司法链路。
- 不要把现实流程写成科普段落；流程必须压进人物行动和冲突。
- 不要写违法、诈骗、侵入系统、制毒、武器、公共安全破坏等可操作教程；这类内容先转去 `../safety-research/README.md`。

## 6. 最小读取建议

生活质感：`30` + `31` + 目标专题。  
县域办事：`57` + `206` 或目标主管专题。  
消费纠纷：`180` + `211`。  
家庭财产：`176` + `177`。  
医疗教育：`169` 或 `199` + `181` 或 `192`。  
公安司法：`166` + `227/228/229` 按分流选择。  
灾害事故：`164` + `235/236/237` 按事故类型选择。  
农村农业：`194` + `195/196/197/198` 按资金、土地、产品或物流选择。
