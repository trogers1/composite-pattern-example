export type NaicsHierarchyItem = {
  id: string;
  name: string;
  parentId?: string;
};
export const naicsHierarchy: NaicsHierarchyItem[] = [
  {
    id: '11',
    name: 'Agriculture, Forestry, Fishing and Hunting',
  },
  {
    id: '21',
    name: 'Mining, Quarrying, and Oil and Gas Extraction',
  },
  {
    id: '22',
    name: 'Utilities',
  },
  {
    id: '23',
    name: 'Construction',
  },
  {
    id: '42',
    name: 'Wholesale Trade',
  },
  {
    id: '51',
    name: 'Information',
  },
  {
    id: '52',
    name: 'Finance and Insurance',
  },
  {
    id: '53',
    name: 'Real Estate and Rental and Leasing',
  },
  {
    id: '54',
    name: 'Professional, Scientific, and Technical Services',
  },
  {
    id: '55',
    name: 'Management of Companies and Enterprises',
  },
  {
    id: '56',
    name: 'Administrative and Support and Waste Management and Remediation Services',
  },
  {
    id: '61',
    name: 'Educational Services',
  },
  {
    id: '62',
    name: 'Health Care and Social Assistance',
  },
  {
    id: '71',
    name: 'Arts, Entertainment, and Recreation',
  },
  {
    id: '72',
    name: 'Accommodation and Food Services',
  },
  {
    id: '81',
    name: 'Other Services (except Public Administration)',
  },
  {
    id: '92',
    name: 'Public Administration',
  },
  {
    id: '111',
    name: 'Crop Production',
    parentId: '11',
  },
  {
    id: '112',
    name: 'Animal Production and Aquaculture',
    parentId: '11',
  },
  {
    id: '113',
    name: 'Forestry and Logging',
    parentId: '11',
  },
  {
    id: '114',
    name: 'Fishing, Hunting and Trapping',
    parentId: '11',
  },
  {
    id: '115',
    name: 'Support Activities for Agriculture and Forestry',
    parentId: '11',
  },
  {
    id: '211',
    name: 'Oil and Gas Extraction',
    parentId: '21',
  },
  {
    id: '212',
    name: 'Mining (except Oil and Gas)',
    parentId: '21',
  },
  {
    id: '213',
    name: 'Support Activities for Mining',
    parentId: '21',
  },
  {
    id: '221',
    name: 'Utilities ',
    parentId: '22',
  },
  {
    id: '236',
    name: 'Construction of Buildings',
    parentId: '23',
  },
  {
    id: '237',
    name: 'Heavy and Civil Engineering Construction',
    parentId: '23',
  },
  {
    id: '238',
    name: 'Specialty Trade Contractors',
    parentId: '23',
  },
  {
    id: '311',
    name: 'Food Manufacturing',
    parentId: '31',
  },
  {
    id: '312',
    name: 'Beverage and Tobacco Product Manufacturing',
    parentId: '31',
  },
  {
    id: '313',
    name: 'Textile Mills',
    parentId: '31',
  },
  {
    id: '314',
    name: 'Textile Product Mills',
    parentId: '31',
  },
  {
    id: '315',
    name: 'Apparel Manufacturing',
    parentId: '31',
  },
  {
    id: '316',
    name: 'Leather and Allied Product Manufacturing',
    parentId: '31',
  },
  {
    id: '321',
    name: 'Wood Product Manufacturing',
    parentId: '32',
  },
  {
    id: '322',
    name: 'Paper Manufacturing',
    parentId: '32',
  },
  {
    id: '323',
    name: 'Printing and Related Support Activities',
    parentId: '32',
  },
  {
    id: '324',
    name: 'Petroleum and Coal Products Manufacturing',
    parentId: '32',
  },
  {
    id: '325',
    name: 'Chemical Manufacturing',
    parentId: '32',
  },
  {
    id: '326',
    name: 'Plastics and Rubber Products Manufacturing',
    parentId: '32',
  },
  {
    id: '327',
    name: 'Nonmetallic Mineral Product Manufacturing',
    parentId: '32',
  },
  {
    id: '331',
    name: 'Primary Metal Manufacturing',
    parentId: '33',
  },
  {
    id: '332',
    name: 'Fabricated Metal Product Manufacturing',
    parentId: '33',
  },
  {
    id: '333',
    name: 'Machinery Manufacturing',
    parentId: '33',
  },
  {
    id: '334',
    name: 'Computer and Electronic Product Manufacturing',
    parentId: '33',
  },
  {
    id: '335',
    name: 'Electrical Equipment, Appliance, and Component Manufacturing',
    parentId: '33',
  },
  {
    id: '336',
    name: 'Transportation Equipment Manufacturing',
    parentId: '33',
  },
  {
    id: '337',
    name: 'Furniture and Related Product Manufacturing',
    parentId: '33',
  },
  {
    id: '339',
    name: 'Miscellaneous Manufacturing',
    parentId: '33',
  },
  {
    id: '423',
    name: 'Merchant Wholesalers, Durable Goods ',
    parentId: '42',
  },
  {
    id: '424',
    name: 'Merchant Wholesalers, Nondurable Goods ',
    parentId: '42',
  },
  {
    id: '425',
    name: 'Wholesale Trade Agents and Brokers ',
    parentId: '42',
  },
  {
    id: '441',
    name: 'Motor Vehicle and Parts Dealers ',
    parentId: '44',
  },
  {
    id: '444',
    name: 'Building Material and Garden Equipment and Supplies Dealers ',
    parentId: '44',
  },
  {
    id: '445',
    name: 'Food and Beverage Retailers ',
    parentId: '44',
  },
  {
    id: '449',
    name: 'Furniture, Home Furnishings, Electronics, and Appliance Retailers ',
    parentId: '44',
  },
  {
    id: '455',
    name: 'General Merchandise Retailers ',
    parentId: '45',
  },
  {
    id: '456',
    name: 'Health and Personal Care Retailers ',
    parentId: '45',
  },
  {
    id: '457',
    name: 'Gasoline Stations and Fuel Dealers ',
    parentId: '45',
  },
  {
    id: '458',
    name: 'Clothing, Clothing Accessories, Shoe, and Jewelry Retailers ',
    parentId: '45',
  },
  {
    id: '459',
    name: 'Sporting Goods, Hobby, Musical Instrument, Book, and Miscellaneous Retailers ',
    parentId: '45',
  },
  {
    id: '481',
    name: 'Air Transportation',
    parentId: '48',
  },
  {
    id: '482',
    name: 'Rail Transportation',
    parentId: '48',
  },
  {
    id: '483',
    name: 'Water Transportation',
    parentId: '48',
  },
  {
    id: '484',
    name: 'Truck Transportation',
    parentId: '48',
  },
  {
    id: '485',
    name: 'Transit and Ground Passenger Transportation',
    parentId: '48',
  },
  {
    id: '486',
    name: 'Pipeline Transportation',
    parentId: '48',
  },
  {
    id: '487',
    name: 'Scenic and Sightseeing Transportation',
    parentId: '48',
  },
  {
    id: '488',
    name: 'Support Activities for Transportation',
    parentId: '48',
  },
  {
    id: '491',
    name: 'Postal Service',
    parentId: '49',
  },
  {
    id: '492',
    name: 'Couriers and Messengers',
    parentId: '49',
  },
  {
    id: '493',
    name: 'Warehousing and Storage',
    parentId: '49',
  },
  {
    id: '512',
    name: 'Motion Picture and Sound Recording Industries',
    parentId: '51',
  },
  {
    id: '513',
    name: 'Publishing Industries',
    parentId: '51',
  },
  {
    id: '516',
    name: 'Broadcasting and Content Providers',
    parentId: '51',
  },
  {
    id: '517',
    name: 'Telecommunications',
    parentId: '51',
  },
  {
    id: '518',
    name: 'Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services',
    parentId: '51',
  },
  {
    id: '519',
    name: 'Web Search Portals, Libraries, Archives, and Other Information Services',
    parentId: '51',
  },
  {
    id: '521',
    name: 'Monetary Authorities-Central Bank',
    parentId: '52',
  },
  {
    id: '522',
    name: 'Credit Intermediation and Related Activities',
    parentId: '52',
  },
  {
    id: '523',
    name: 'Securities, Commodity Contracts, and Other Financial Investments and Related Activities',
    parentId: '52',
  },
  {
    id: '524',
    name: 'Insurance Carriers and Related Activities',
    parentId: '52',
  },
  {
    id: '525',
    name: 'Funds, Trusts, and Other Financial Vehicles ',
    parentId: '52',
  },
  {
    id: '531',
    name: 'Real Estate',
    parentId: '53',
  },
  {
    id: '532',
    name: 'Rental and Leasing Services',
    parentId: '53',
  },
  {
    id: '533',
    name: 'Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)',
    parentId: '53',
  },
  {
    id: '541',
    name: 'Professional, Scientific, and Technical Services',
    parentId: '54',
  },
  {
    id: '551',
    name: 'Management of Companies and Enterprises',
    parentId: '55',
  },
  {
    id: '561',
    name: 'Administrative and Support Services',
    parentId: '56',
  },
  {
    id: '562',
    name: 'Waste Management and Remediation Services',
    parentId: '56',
  },
  {
    id: '611',
    name: 'Educational Services',
    parentId: '61',
  },
  {
    id: '621',
    name: 'Ambulatory Health Care Services',
    parentId: '62',
  },
  {
    id: '622',
    name: 'Hospitals',
    parentId: '62',
  },
  {
    id: '623',
    name: 'Nursing and Residential Care Facilities',
    parentId: '62',
  },
  {
    id: '624',
    name: 'Social Assistance',
    parentId: '62',
  },
  {
    id: '711',
    name: 'Performing Arts, Spectator Sports, and Related Industries',
    parentId: '71',
  },
  {
    id: '712',
    name: 'Museums, Historical Sites, and Similar Institutions',
    parentId: '71',
  },
  {
    id: '713',
    name: 'Amusement, Gambling, and Recreation Industries',
    parentId: '71',
  },
  {
    id: '721',
    name: 'Accommodation',
    parentId: '72',
  },
  {
    id: '722',
    name: 'Food Services and Drinking Places',
    parentId: '72',
  },
  {
    id: '811',
    name: 'Repair and Maintenance',
    parentId: '81',
  },
  {
    id: '812',
    name: 'Personal and Laundry Services',
    parentId: '81',
  },
  {
    id: '813',
    name: 'Religious, Grantmaking, Civic, Professional, and Similar Organizations',
    parentId: '81',
  },
  {
    id: '814',
    name: 'Private Households',
    parentId: '81',
  },
  {
    id: '921',
    name: 'Executive, Legislative, and Other General Government Support ',
    parentId: '92',
  },
  {
    id: '922',
    name: 'Justice, Public Order, and Safety Activities ',
    parentId: '92',
  },
  {
    id: '923',
    name: 'Administration of Human Resource Programs ',
    parentId: '92',
  },
  {
    id: '924',
    name: 'Administration of Environmental Quality Programs ',
    parentId: '92',
  },
  {
    id: '925',
    name: 'Administration of Housing Programs, Urban Planning, and Community Development ',
    parentId: '92',
  },
  {
    id: '926',
    name: 'Administration of Economic Programs ',
    parentId: '92',
  },
  {
    id: '927',
    name: 'Space Research and Technology ',
    parentId: '92',
  },
  {
    id: '928',
    name: 'National Security and International Affairs ',
    parentId: '92',
  },
  {
    id: '1111',
    name: 'Oilseed and Grain Farming',
    parentId: '111',
  },
  {
    id: '1112',
    name: 'Vegetable and Melon Farming',
    parentId: '111',
  },
  {
    id: '1113',
    name: 'Fruit and Tree Nut Farming',
    parentId: '111',
  },
  {
    id: '1114',
    name: 'Greenhouse, Nursery, and Floriculture Production',
    parentId: '111',
  },
  {
    id: '1119',
    name: 'Other Crop Farming',
    parentId: '111',
  },
  {
    id: '1121',
    name: 'Cattle Ranching and Farming',
    parentId: '112',
  },
  {
    id: '1122',
    name: 'Hog and Pig Farming',
    parentId: '112',
  },
  {
    id: '1123',
    name: 'Poultry and Egg Production',
    parentId: '112',
  },
  {
    id: '1124',
    name: 'Sheep and Goat Farming',
    parentId: '112',
  },
  {
    id: '1125',
    name: 'Aquaculture',
    parentId: '112',
  },
  {
    id: '1129',
    name: 'Other Animal Production',
    parentId: '112',
  },
  {
    id: '1131',
    name: 'Timber Tract Operations',
    parentId: '113',
  },
  {
    id: '1132',
    name: 'Forest Nurseries and Gathering of Forest Products',
    parentId: '113',
  },
  {
    id: '1133',
    name: 'Logging',
    parentId: '113',
  },
  {
    id: '1141',
    name: 'Fishing',
    parentId: '114',
  },
  {
    id: '1142',
    name: 'Hunting and Trapping',
    parentId: '114',
  },
  {
    id: '1151',
    name: 'Support Activities for Crop Production',
    parentId: '115',
  },
  {
    id: '1152',
    name: 'Support Activities for Animal Production',
    parentId: '115',
  },
  {
    id: '1153',
    name: 'Support Activities for Forestry',
    parentId: '115',
  },
  {
    id: '2111',
    name: 'Oil and Gas Extraction',
    parentId: '211',
  },
  {
    id: '2121',
    name: 'Coal Mining',
    parentId: '212',
  },
  {
    id: '2122',
    name: 'Metal Ore Mining',
    parentId: '212',
  },
  {
    id: '2123',
    name: 'Nonmetallic Mineral Mining and Quarrying',
    parentId: '212',
  },
  {
    id: '2131',
    name: 'Support Activities for Mining',
    parentId: '213',
  },
  {
    id: '2211',
    name: 'Electric Power Generation, Transmission and Distribution',
    parentId: '221',
  },
  {
    id: '2212',
    name: 'Natural Gas Distribution ',
    parentId: '221',
  },
  {
    id: '2213',
    name: 'Water, Sewage and Other Systems ',
    parentId: '221',
  },
  {
    id: '2361',
    name: 'Residential Building Construction',
    parentId: '236',
  },
  {
    id: '2362',
    name: 'Nonresidential Building Construction',
    parentId: '236',
  },
  {
    id: '2371',
    name: 'Utility System Construction',
    parentId: '237',
  },
  {
    id: '2372',
    name: 'Land Subdivision',
    parentId: '237',
  },
  {
    id: '2373',
    name: 'Highway, Street, and Bridge Construction',
    parentId: '237',
  },
  {
    id: '2379',
    name: 'Other Heavy and Civil Engineering Construction',
    parentId: '237',
  },
  {
    id: '2381',
    name: 'Foundation, Structure, and Building Exterior Contractors',
    parentId: '238',
  },
  {
    id: '2382',
    name: 'Building Equipment Contractors',
    parentId: '238',
  },
  {
    id: '2383',
    name: 'Building Finishing Contractors',
    parentId: '238',
  },
  {
    id: '2389',
    name: 'Other Specialty Trade Contractors',
    parentId: '238',
  },
  {
    id: '3111',
    name: 'Animal Food Manufacturing',
    parentId: '311',
  },
  {
    id: '3112',
    name: 'Grain and Oilseed Milling',
    parentId: '311',
  },
  {
    id: '3113',
    name: 'Sugar and Confectionery Product Manufacturing',
    parentId: '311',
  },
  {
    id: '3114',
    name: 'Fruit and Vegetable Preserving and Specialty Food Manufacturing',
    parentId: '311',
  },
  {
    id: '3115',
    name: 'Dairy Product Manufacturing',
    parentId: '311',
  },
  {
    id: '3116',
    name: 'Animal Slaughtering and Processing',
    parentId: '311',
  },
  {
    id: '3117',
    name: 'Seafood Product Preparation and Packaging',
    parentId: '311',
  },
  {
    id: '3118',
    name: 'Bakeries and Tortilla Manufacturing',
    parentId: '311',
  },
  {
    id: '3119',
    name: 'Other Food Manufacturing',
    parentId: '311',
  },
  {
    id: '3121',
    name: 'Beverage Manufacturing',
    parentId: '312',
  },
  {
    id: '3122',
    name: 'Tobacco Manufacturing',
    parentId: '312',
  },
  {
    id: '3131',
    name: 'Fiber, Yarn, and Thread Mills',
    parentId: '313',
  },
  {
    id: '3132',
    name: 'Fabric Mills',
    parentId: '313',
  },
  {
    id: '3133',
    name: 'Textile and Fabric Finishing and Fabric Coating Mills',
    parentId: '313',
  },
  {
    id: '3141',
    name: 'Textile Furnishings Mills',
    parentId: '314',
  },
  {
    id: '3149',
    name: 'Other Textile Product Mills',
    parentId: '314',
  },
  {
    id: '3151',
    name: 'Apparel Knitting Mills',
    parentId: '315',
  },
  {
    id: '3152',
    name: 'Cut and Sew Apparel Manufacturing',
    parentId: '315',
  },
  {
    id: '3159',
    name: 'Apparel Accessories and Other Apparel Manufacturing',
    parentId: '315',
  },
  {
    id: '3161',
    name: 'Leather and Hide Tanning and Finishing',
    parentId: '316',
  },
  {
    id: '3162',
    name: 'Footwear Manufacturing',
    parentId: '316',
  },
  {
    id: '3169',
    name: 'Other Leather and Allied Product Manufacturing',
    parentId: '316',
  },
  {
    id: '3211',
    name: 'Sawmills and Wood Preservation',
    parentId: '321',
  },
  {
    id: '3212',
    name: 'Veneer, Plywood, and Engineered Wood Product Manufacturing',
    parentId: '321',
  },
  {
    id: '3219',
    name: 'Other Wood Product Manufacturing',
    parentId: '321',
  },
  {
    id: '3221',
    name: 'Pulp, Paper, and Paperboard Mills',
    parentId: '322',
  },
  {
    id: '3222',
    name: 'Converted Paper Product Manufacturing',
    parentId: '322',
  },
  {
    id: '3231',
    name: 'Printing and Related Support Activities',
    parentId: '323',
  },
  {
    id: '3241',
    name: 'Petroleum and Coal Products Manufacturing',
    parentId: '324',
  },
  {
    id: '3251',
    name: 'Basic Chemical Manufacturing',
    parentId: '325',
  },
  {
    id: '3252',
    name: 'Resin, Synthetic Rubber, and Artificial and Synthetic Fibers and Filaments Manufacturing',
    parentId: '325',
  },
  {
    id: '3253',
    name: 'Pesticide, Fertilizer, and Other Agricultural Chemical Manufacturing',
    parentId: '325',
  },
  {
    id: '3254',
    name: 'Pharmaceutical and Medicine Manufacturing',
    parentId: '325',
  },
  {
    id: '3255',
    name: 'Paint, Coating, and Adhesive Manufacturing',
    parentId: '325',
  },
  {
    id: '3256',
    name: 'Soap, Cleaning Compound, and Toilet Preparation Manufacturing',
    parentId: '325',
  },
  {
    id: '3259',
    name: 'Other Chemical Product and Preparation Manufacturing',
    parentId: '325',
  },
  {
    id: '3261',
    name: 'Plastics Product Manufacturing',
    parentId: '326',
  },
  {
    id: '3262',
    name: 'Rubber Product Manufacturing',
    parentId: '326',
  },
  {
    id: '3271',
    name: 'Clay Product and Refractory Manufacturing',
    parentId: '327',
  },
  {
    id: '3272',
    name: 'Glass and Glass Product Manufacturing',
    parentId: '327',
  },
  {
    id: '3273',
    name: 'Cement and Concrete Product Manufacturing',
    parentId: '327',
  },
  {
    id: '3274',
    name: 'Lime and Gypsum Product Manufacturing',
    parentId: '327',
  },
  {
    id: '3279',
    name: 'Other Nonmetallic Mineral Product Manufacturing',
    parentId: '327',
  },
  {
    id: '3311',
    name: 'Iron and Steel Mills and Ferroalloy Manufacturing',
    parentId: '331',
  },
  {
    id: '3312',
    name: 'Steel Product Manufacturing from Purchased Steel',
    parentId: '331',
  },
  {
    id: '3313',
    name: 'Alumina and Aluminum Production and Processing',
    parentId: '331',
  },
  {
    id: '3314',
    name: 'Nonferrous Metal (except Aluminum) Production and Processing',
    parentId: '331',
  },
  {
    id: '3315',
    name: 'Foundries',
    parentId: '331',
  },
  {
    id: '3321',
    name: 'Forging and Stamping',
    parentId: '332',
  },
  {
    id: '3322',
    name: 'Cutlery and Handtool Manufacturing',
    parentId: '332',
  },
  {
    id: '3323',
    name: 'Architectural and Structural Metals Manufacturing',
    parentId: '332',
  },
  {
    id: '3324',
    name: 'Boiler, Tank, and Shipping Container Manufacturing',
    parentId: '332',
  },
  {
    id: '3325',
    name: 'Hardware Manufacturing',
    parentId: '332',
  },
  {
    id: '3326',
    name: 'Spring and Wire Product Manufacturing',
    parentId: '332',
  },
  {
    id: '3327',
    name: 'Machine Shops; Turned Product; and Screw, Nut, and Bolt Manufacturing',
    parentId: '332',
  },
  {
    id: '3328',
    name: 'Coating, Engraving, Heat Treating, and Allied Activities',
    parentId: '332',
  },
  {
    id: '3329',
    name: 'Other Fabricated Metal Product Manufacturing',
    parentId: '332',
  },
  {
    id: '3331',
    name: 'Agriculture, Construction, and Mining Machinery Manufacturing',
    parentId: '333',
  },
  {
    id: '3332',
    name: 'Industrial Machinery Manufacturing',
    parentId: '333',
  },
  {
    id: '3333',
    name: 'Commercial and Service Industry Machinery Manufacturing',
    parentId: '333',
  },
  {
    id: '3334',
    name: 'Ventilation, Heating, Air-Conditioning, and Commercial Refrigeration Equipment Manufacturing',
    parentId: '333',
  },
  {
    id: '3335',
    name: 'Metalworking Machinery Manufacturing',
    parentId: '333',
  },
  {
    id: '3336',
    name: 'Engine, Turbine, and Power Transmission Equipment Manufacturing',
    parentId: '333',
  },
  {
    id: '3339',
    name: 'Other General Purpose Machinery Manufacturing',
    parentId: '333',
  },
  {
    id: '3341',
    name: 'Computer and Peripheral Equipment Manufacturing',
    parentId: '334',
  },
  {
    id: '3342',
    name: 'Communications Equipment Manufacturing',
    parentId: '334',
  },
  {
    id: '3343',
    name: 'Audio and Video Equipment Manufacturing',
    parentId: '334',
  },
  {
    id: '3344',
    name: 'Semiconductor and Other Electronic Component Manufacturing',
    parentId: '334',
  },
  {
    id: '3345',
    name: 'Navigational, Measuring, Electromedical, and Control Instruments Manufacturing',
    parentId: '334',
  },
  {
    id: '3346',
    name: 'Manufacturing and Reproducing Magnetic and Optical Media',
    parentId: '334',
  },
  {
    id: '3351',
    name: 'Electric Lighting Equipment Manufacturing',
    parentId: '335',
  },
  {
    id: '3352',
    name: 'Household Appliance Manufacturing',
    parentId: '335',
  },
  {
    id: '3353',
    name: 'Electrical Equipment Manufacturing',
    parentId: '335',
  },
  {
    id: '3359',
    name: 'Other Electrical Equipment and Component Manufacturing',
    parentId: '335',
  },
  {
    id: '3361',
    name: 'Motor Vehicle Manufacturing',
    parentId: '336',
  },
  {
    id: '3362',
    name: 'Motor Vehicle Body and Trailer Manufacturing',
    parentId: '336',
  },
  {
    id: '3363',
    name: 'Motor Vehicle Parts Manufacturing',
    parentId: '336',
  },
  {
    id: '3364',
    name: 'Aerospace Product and Parts Manufacturing',
    parentId: '336',
  },
  {
    id: '3365',
    name: 'Railroad Rolling Stock Manufacturing',
    parentId: '336',
  },
  {
    id: '3366',
    name: 'Ship and Boat Building',
    parentId: '336',
  },
  {
    id: '3369',
    name: 'Other Transportation Equipment Manufacturing',
    parentId: '336',
  },
  {
    id: '3371',
    name: 'Household and Institutional Furniture and Kitchen Cabinet Manufacturing',
    parentId: '337',
  },
  {
    id: '3372',
    name: 'Office Furniture (including Fixtures) Manufacturing',
    parentId: '337',
  },
  {
    id: '3379',
    name: 'Other Furniture Related Product Manufacturing',
    parentId: '337',
  },
  {
    id: '3391',
    name: 'Medical Equipment and Supplies Manufacturing',
    parentId: '339',
  },
  {
    id: '3399',
    name: 'Other Miscellaneous Manufacturing',
    parentId: '339',
  },
  {
    id: '4231',
    name: 'Motor Vehicle and Motor Vehicle Parts and Supplies Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4232',
    name: 'Furniture and Home Furnishing Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4233',
    name: 'Lumber and Other Construction Materials Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4234',
    name: 'Professional and Commercial Equipment and Supplies Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4235',
    name: 'Metal and Mineral (except Petroleum) Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4236',
    name: 'Household Appliances and Electrical and Electronic Goods Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4237',
    name: 'Hardware, and Plumbing and Heating Equipment and Supplies Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4238',
    name: 'Machinery, Equipment, and Supplies Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4239',
    name: 'Miscellaneous Durable Goods Merchant Wholesalers ',
    parentId: '423',
  },
  {
    id: '4241',
    name: 'Paper and Paper Product Merchant Wholesalers ',
    parentId: '424',
  },
  {
    id: '4242',
    name: "Drugs and Druggists' Sundries Merchant Wholesalers ",
    parentId: '424',
  },
  {
    id: '4243',
    name: 'Apparel, Piece Goods, and Notions Merchant Wholesalers ',
    parentId: '424',
  },
  {
    id: '4244',
    name: 'Grocery and Related Product Merchant Wholesalers ',
    parentId: '424',
  },
  {
    id: '4245',
    name: 'Farm Product Raw Material Merchant Wholesalers ',
    parentId: '424',
  },
  {
    id: '4246',
    name: 'Chemical and Allied Products Merchant Wholesalers ',
    parentId: '424',
  },
  {
    id: '4247',
    name: 'Petroleum and Petroleum Products Merchant Wholesalers ',
    parentId: '424',
  },
  {
    id: '4248',
    name: 'Beer, Wine, and Distilled Alcoholic Beverage Merchant Wholesalers ',
    parentId: '424',
  },
  {
    id: '4249',
    name: 'Miscellaneous Nondurable Goods Merchant Wholesalers ',
    parentId: '424',
  },
  {
    id: '4251',
    name: 'Wholesale Trade Agents and Brokers ',
    parentId: '425',
  },
  {
    id: '4411',
    name: 'Automobile Dealers ',
    parentId: '441',
  },
  {
    id: '4412',
    name: 'Other Motor Vehicle Dealers ',
    parentId: '441',
  },
  {
    id: '4413',
    name: 'Automotive Parts, Accessories, and Tire Retailers ',
    parentId: '441',
  },
  {
    id: '4441',
    name: 'Building Material and Supplies Dealers ',
    parentId: '444',
  },
  {
    id: '4442',
    name: 'Lawn and Garden Equipment and Supplies Retailers ',
    parentId: '444',
  },
  {
    id: '4451',
    name: 'Grocery and Convenience Retailers ',
    parentId: '445',
  },
  {
    id: '4452',
    name: 'Specialty Food Retailers ',
    parentId: '445',
  },
  {
    id: '4453',
    name: 'Beer, Wine, and Liquor Retailers ',
    parentId: '445',
  },
  {
    id: '4491',
    name: 'Furniture and Home Furnishings Retailers ',
    parentId: '449',
  },
  {
    id: '4492',
    name: 'Electronics and Appliance Retailers ',
    parentId: '449',
  },
  {
    id: '4551',
    name: 'Department Stores ',
    parentId: '455',
  },
  {
    id: '4552',
    name: 'Warehouse Clubs, Supercenters, and Other General Merchandise Retailers ',
    parentId: '455',
  },
  {
    id: '4561',
    name: 'Health and Personal Care Retailers ',
    parentId: '456',
  },
  {
    id: '4571',
    name: 'Gasoline Stations ',
    parentId: '457',
  },
  {
    id: '4572',
    name: 'Fuel Dealers',
    parentId: '457',
  },
  {
    id: '4581',
    name: 'Clothing and Clothing Accessories Retailers ',
    parentId: '458',
  },
  {
    id: '4582',
    name: 'Shoe Retailers ',
    parentId: '458',
  },
  {
    id: '4583',
    name: 'Jewelry, Luggage, and Leather Goods Retailers ',
    parentId: '458',
  },
  {
    id: '4591',
    name: 'Sporting Goods, Hobby, and Musical Instrument Retailers ',
    parentId: '459',
  },
  {
    id: '4592',
    name: 'Book Retailers and News Dealers ',
    parentId: '459',
  },
  {
    id: '4593',
    name: 'Florists ',
    parentId: '459',
  },
  {
    id: '4594',
    name: 'Office Supplies, Stationery, and Gift Retailers ',
    parentId: '459',
  },
  {
    id: '4595',
    name: 'Used Merchandise Retailers ',
    parentId: '459',
  },
  {
    id: '4599',
    name: 'Other Miscellaneous Retailers ',
    parentId: '459',
  },
  {
    id: '4811',
    name: 'Scheduled Air Transportation',
    parentId: '481',
  },
  {
    id: '4812',
    name: 'Nonscheduled Air Transportation',
    parentId: '481',
  },
  {
    id: '4821',
    name: 'Rail Transportation',
    parentId: '482',
  },
  {
    id: '4831',
    name: 'Deep Sea, Coastal, and Great Lakes Water Transportation',
    parentId: '483',
  },
  {
    id: '4832',
    name: 'Inland Water Transportation',
    parentId: '483',
  },
  {
    id: '4841',
    name: 'General Freight Trucking',
    parentId: '484',
  },
  {
    id: '4842',
    name: 'Specialized Freight Trucking',
    parentId: '484',
  },
  {
    id: '4851',
    name: 'Urban Transit Systems',
    parentId: '485',
  },
  {
    id: '4852',
    name: 'Interurban and Rural Bus Transportation',
    parentId: '485',
  },
  {
    id: '4853',
    name: 'Taxi and Limousine Service',
    parentId: '485',
  },
  {
    id: '4854',
    name: 'School and Employee Bus Transportation',
    parentId: '485',
  },
  {
    id: '4855',
    name: 'Charter Bus Industry',
    parentId: '485',
  },
  {
    id: '4859',
    name: 'Other Transit and Ground Passenger Transportation',
    parentId: '485',
  },
  {
    id: '4861',
    name: 'Pipeline Transportation of Crude Oil',
    parentId: '486',
  },
  {
    id: '4862',
    name: 'Pipeline Transportation of Natural Gas',
    parentId: '486',
  },
  {
    id: '4869',
    name: 'Other Pipeline Transportation',
    parentId: '486',
  },
  {
    id: '4871',
    name: 'Scenic and Sightseeing Transportation, Land',
    parentId: '487',
  },
  {
    id: '4872',
    name: 'Scenic and Sightseeing Transportation, Water',
    parentId: '487',
  },
  {
    id: '4879',
    name: 'Scenic and Sightseeing Transportation, Other',
    parentId: '487',
  },
  {
    id: '4881',
    name: 'Support Activities for Air Transportation',
    parentId: '488',
  },
  {
    id: '4882',
    name: 'Support Activities for Rail Transportation',
    parentId: '488',
  },
  {
    id: '4883',
    name: 'Support Activities for Water Transportation',
    parentId: '488',
  },
  {
    id: '4884',
    name: 'Support Activities for Road Transportation',
    parentId: '488',
  },
  {
    id: '4885',
    name: 'Freight Transportation Arrangement',
    parentId: '488',
  },
  {
    id: '4889',
    name: 'Other Support Activities for Transportation',
    parentId: '488',
  },
  {
    id: '4911',
    name: 'Postal Service',
    parentId: '491',
  },
  {
    id: '4921',
    name: 'Couriers and Express Delivery Services',
    parentId: '492',
  },
  {
    id: '4922',
    name: 'Local Messengers and Local Delivery',
    parentId: '492',
  },
  {
    id: '4931',
    name: 'Warehousing and Storage',
    parentId: '493',
  },
  {
    id: '5121',
    name: 'Motion Picture and Video Industries',
    parentId: '512',
  },
  {
    id: '5122',
    name: 'Sound Recording Industries',
    parentId: '512',
  },
  {
    id: '5131',
    name: 'Newspaper, Periodical, Book, and Directory Publishers',
    parentId: '513',
  },
  {
    id: '5132',
    name: 'Software Publishers',
    parentId: '513',
  },
  {
    id: '5161',
    name: 'Radio and Television Broadcasting Stations',
    parentId: '516',
  },
  {
    id: '5162',
    name: 'Media Streaming Distribution Services, Social Networks, and Other Media Networks and Content Providers',
    parentId: '516',
  },
  {
    id: '5171',
    name: 'Wired and Wireless Telecommunications (except Satellite)',
    parentId: '517',
  },
  {
    id: '5174',
    name: 'Satellite Telecommunications',
    parentId: '517',
  },
  {
    id: '5178',
    name: 'All Other Telecommunications',
    parentId: '517',
  },
  {
    id: '5182',
    name: 'Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services',
    parentId: '518',
  },
  {
    id: '5192',
    name: 'Web Search Portals, Libraries, Archives, and Other Information Services',
    parentId: '519',
  },
  {
    id: '5211',
    name: 'Monetary Authorities-Central Bank',
    parentId: '521',
  },
  {
    id: '5221',
    name: 'Depository Credit Intermediation ',
    parentId: '522',
  },
  {
    id: '5222',
    name: 'Nondepository Credit Intermediation ',
    parentId: '522',
  },
  {
    id: '5223',
    name: 'Activities Related to Credit Intermediation ',
    parentId: '522',
  },
  {
    id: '5231',
    name: 'Securities and Commodity Contracts Intermediation and Brokerage',
    parentId: '523',
  },
  {
    id: '5232',
    name: 'Securities and Commodity Exchanges',
    parentId: '523',
  },
  {
    id: '5239',
    name: 'Other Financial Investment Activities',
    parentId: '523',
  },
  {
    id: '5241',
    name: 'Insurance Carriers',
    parentId: '524',
  },
  {
    id: '5242',
    name: 'Agencies, Brokerages, and Other Insurance Related Activities',
    parentId: '524',
  },
  {
    id: '5251',
    name: 'Insurance and Employee Benefit Funds ',
    parentId: '525',
  },
  {
    id: '5259',
    name: 'Other Investment Pools and Funds',
    parentId: '525',
  },
  {
    id: '5311',
    name: 'Lessors of Real Estate',
    parentId: '531',
  },
  {
    id: '5312',
    name: 'Offices of Real Estate Agents and Brokers',
    parentId: '531',
  },
  {
    id: '5313',
    name: 'Activities Related to Real Estate',
    parentId: '531',
  },
  {
    id: '5321',
    name: 'Automotive Equipment Rental and Leasing',
    parentId: '532',
  },
  {
    id: '5322',
    name: 'Consumer Goods Rental',
    parentId: '532',
  },
  {
    id: '5323',
    name: 'General Rental Centers',
    parentId: '532',
  },
  {
    id: '5324',
    name: 'Commercial and Industrial Machinery and Equipment Rental and Leasing',
    parentId: '532',
  },
  {
    id: '5331',
    name: 'Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)',
    parentId: '533',
  },
  {
    id: '5411',
    name: 'Legal Services',
    parentId: '541',
  },
  {
    id: '5412',
    name: 'Accounting, Tax Preparation, Bookkeeping, and Payroll Services',
    parentId: '541',
  },
  {
    id: '5413',
    name: 'Architectural, Engineering, and Related Services',
    parentId: '541',
  },
  {
    id: '5414',
    name: 'Specialized Design Services',
    parentId: '541',
  },
  {
    id: '5415',
    name: 'Computer Systems Design and Related Services',
    parentId: '541',
  },
  {
    id: '5416',
    name: 'Management, Scientific, and Technical Consulting Services',
    parentId: '541',
  },
  {
    id: '5417',
    name: 'Scientific Research and Development Services',
    parentId: '541',
  },
  {
    id: '5418',
    name: 'Advertising, Public Relations, and Related Services',
    parentId: '541',
  },
  {
    id: '5419',
    name: 'Other Professional, Scientific, and Technical Services',
    parentId: '541',
  },
  {
    id: '5511',
    name: 'Management of Companies and Enterprises',
    parentId: '551',
  },
  {
    id: '5611',
    name: 'Office Administrative Services',
    parentId: '561',
  },
  {
    id: '5612',
    name: 'Facilities Support Services',
    parentId: '561',
  },
  {
    id: '5613',
    name: 'Employment Services',
    parentId: '561',
  },
  {
    id: '5614',
    name: 'Business Support Services',
    parentId: '561',
  },
  {
    id: '5615',
    name: 'Travel Arrangement and Reservation Services',
    parentId: '561',
  },
  {
    id: '5616',
    name: 'Investigation and Security Services',
    parentId: '561',
  },
  {
    id: '5617',
    name: 'Services to Buildings and Dwellings',
    parentId: '561',
  },
  {
    id: '5619',
    name: 'Other Support Services',
    parentId: '561',
  },
  {
    id: '5621',
    name: 'Waste Collection ',
    parentId: '562',
  },
  {
    id: '5622',
    name: 'Waste Treatment and Disposal ',
    parentId: '562',
  },
  {
    id: '5629',
    name: 'Remediation and Other Waste Management Services ',
    parentId: '562',
  },
  {
    id: '6111',
    name: 'Elementary and Secondary Schools',
    parentId: '611',
  },
  {
    id: '6112',
    name: 'Junior Colleges',
    parentId: '611',
  },
  {
    id: '6113',
    name: 'Colleges, Universities, and Professional Schools',
    parentId: '611',
  },
  {
    id: '6114',
    name: 'Business Schools and Computer and Management Training',
    parentId: '611',
  },
  {
    id: '6115',
    name: 'Technical and Trade Schools ',
    parentId: '611',
  },
  {
    id: '6116',
    name: 'Other Schools and Instruction',
    parentId: '611',
  },
  {
    id: '6117',
    name: 'Educational Support Services',
    parentId: '611',
  },
  {
    id: '6211',
    name: 'Offices of Physicians',
    parentId: '621',
  },
  {
    id: '6212',
    name: 'Offices of Dentists',
    parentId: '621',
  },
  {
    id: '6213',
    name: 'Offices of Other Health Practitioners',
    parentId: '621',
  },
  {
    id: '6214',
    name: 'Outpatient Care Centers',
    parentId: '621',
  },
  {
    id: '6215',
    name: 'Medical and Diagnostic Laboratories',
    parentId: '621',
  },
  {
    id: '6216',
    name: 'Home Health Care Services',
    parentId: '621',
  },
  {
    id: '6219',
    name: 'Other Ambulatory Health Care Services',
    parentId: '621',
  },
  {
    id: '6221',
    name: 'General Medical and Surgical Hospitals',
    parentId: '622',
  },
  {
    id: '6222',
    name: 'Psychiatric and Substance Abuse Hospitals',
    parentId: '622',
  },
  {
    id: '6223',
    name: 'Specialty (except Psychiatric and Substance Abuse) Hospitals',
    parentId: '622',
  },
  {
    id: '6231',
    name: 'Nursing Care Facilities (Skilled Nursing Facilities)',
    parentId: '623',
  },
  {
    id: '6232',
    name: 'Residential Intellectual and Developmental Disability, Mental Health, and Substance Abuse Facilities',
    parentId: '623',
  },
  {
    id: '6233',
    name: 'Continuing Care Retirement Communities and Assisted Living Facilities for the Elderly',
    parentId: '623',
  },
  {
    id: '6239',
    name: 'Other Residential Care Facilities',
    parentId: '623',
  },
  {
    id: '6241',
    name: 'Individual and Family Services',
    parentId: '624',
  },
  {
    id: '6242',
    name: 'Community Food and Housing, and Emergency and Other Relief Services',
    parentId: '624',
  },
  {
    id: '6243',
    name: 'Vocational Rehabilitation Services',
    parentId: '624',
  },
  {
    id: '6244',
    name: 'Child Care Services',
    parentId: '624',
  },
  {
    id: '7111',
    name: 'Performing Arts Companies',
    parentId: '711',
  },
  {
    id: '7112',
    name: 'Spectator Sports',
    parentId: '711',
  },
  {
    id: '7113',
    name: 'Promoters of Performing Arts, Sports, and Similar Events',
    parentId: '711',
  },
  {
    id: '7114',
    name: 'Agents and Managers for Artists, Athletes, Entertainers, and Other Public Figures',
    parentId: '711',
  },
  {
    id: '7115',
    name: 'Independent Artists, Writers, and Performers',
    parentId: '711',
  },
  {
    id: '7121',
    name: 'Museums, Historical Sites, and Similar Institutions',
    parentId: '712',
  },
  {
    id: '7131',
    name: 'Amusement Parks and Arcades',
    parentId: '713',
  },
  {
    id: '7132',
    name: 'Gambling Industries',
    parentId: '713',
  },
  {
    id: '7139',
    name: 'Other Amusement and Recreation Industries',
    parentId: '713',
  },
  {
    id: '7211',
    name: 'Traveler Accommodation',
    parentId: '721',
  },
  {
    id: '7212',
    name: 'RV (Recreational Vehicle) Parks and Recreational Camps',
    parentId: '721',
  },
  {
    id: '7213',
    name: "Rooming and Boarding Houses, Dormitories, and Workers' Camps",
    parentId: '721',
  },
  {
    id: '7223',
    name: 'Special Food Services',
    parentId: '722',
  },
  {
    id: '7224',
    name: 'Drinking Places (Alcoholic Beverages)',
    parentId: '722',
  },
  {
    id: '7225',
    name: 'Restaurants and Other Eating Places',
    parentId: '722',
  },
  {
    id: '8111',
    name: 'Automotive Repair and Maintenance',
    parentId: '811',
  },
  {
    id: '8112',
    name: 'Electronic and Precision Equipment Repair and Maintenance',
    parentId: '811',
  },
  {
    id: '8113',
    name: 'Commercial and Industrial Machinery and Equipment (except Automotive and Electronic) Repair and Maintenance',
    parentId: '811',
  },
  {
    id: '8114',
    name: 'Personal and Household Goods Repair and Maintenance',
    parentId: '811',
  },
  {
    id: '8121',
    name: 'Personal Care Services ',
    parentId: '812',
  },
  {
    id: '8122',
    name: 'Death Care Services ',
    parentId: '812',
  },
  {
    id: '8123',
    name: 'Drycleaning and Laundry Services ',
    parentId: '812',
  },
  {
    id: '8129',
    name: 'Other Personal Services ',
    parentId: '812',
  },
  {
    id: '8131',
    name: 'Religious Organizations ',
    parentId: '813',
  },
  {
    id: '8132',
    name: 'Grantmaking and Giving Services ',
    parentId: '813',
  },
  {
    id: '8133',
    name: 'Social Advocacy Organizations ',
    parentId: '813',
  },
  {
    id: '8134',
    name: 'Civic and Social Organizations ',
    parentId: '813',
  },
  {
    id: '8139',
    name: 'Business, Professional, Labor, Political, and Similar Organizations ',
    parentId: '813',
  },
  {
    id: '8141',
    name: 'Private Households',
    parentId: '814',
  },
  {
    id: '9211',
    name: 'Executive, Legislative, and Other General Government Support ',
    parentId: '921',
  },
  {
    id: '9221',
    name: 'Justice, Public Order, and Safety Activities ',
    parentId: '922',
  },
  {
    id: '9231',
    name: 'Administration of Human Resource Programs ',
    parentId: '923',
  },
  {
    id: '9241',
    name: 'Administration of Environmental Quality Programs ',
    parentId: '924',
  },
  {
    id: '9251',
    name: 'Administration of Housing Programs, Urban Planning, and Community Development ',
    parentId: '925',
  },
  {
    id: '9261',
    name: 'Administration of Economic Programs ',
    parentId: '926',
  },
  {
    id: '9271',
    name: 'Space Research and Technology ',
    parentId: '927',
  },
  {
    id: '9281',
    name: 'National Security and International Affairs ',
    parentId: '928',
  },
  {
    id: '11111',
    name: 'Soybean Farming',
    parentId: '1111',
  },
  {
    id: '11112',
    name: 'Oilseed (except Soybean) Farming',
    parentId: '1111',
  },
  {
    id: '11113',
    name: 'Dry Pea and Bean Farming',
    parentId: '1111',
  },
  {
    id: '11114',
    name: 'Wheat Farming',
    parentId: '1111',
  },
  {
    id: '11115',
    name: 'Corn Farming',
    parentId: '1111',
  },
  {
    id: '11116',
    name: 'Rice Farming',
    parentId: '1111',
  },
  {
    id: '11119',
    name: 'Other Grain Farming',
    parentId: '1111',
  },
  {
    id: '11121',
    name: 'Vegetable and Melon Farming',
    parentId: '1112',
  },
  {
    id: '11131',
    name: 'Orange Groves',
    parentId: '1113',
  },
  {
    id: '11132',
    name: 'Citrus (except Orange) Groves',
    parentId: '1113',
  },
  {
    id: '11133',
    name: 'Noncitrus Fruit and Tree Nut Farming',
    parentId: '1113',
  },
  {
    id: '11141',
    name: 'Food Crops Grown Under Cover',
    parentId: '1114',
  },
  {
    id: '11142',
    name: 'Nursery and Floriculture Production',
    parentId: '1114',
  },
  {
    id: '11191',
    name: 'Tobacco Farming',
    parentId: '1119',
  },
  {
    id: '11192',
    name: 'Cotton Farming',
    parentId: '1119',
  },
  {
    id: '11193',
    name: 'Sugarcane Farming',
    parentId: '1119',
  },
  {
    id: '11194',
    name: 'Hay Farming',
    parentId: '1119',
  },
  {
    id: '11199',
    name: 'All Other Crop Farming',
    parentId: '1119',
  },
  {
    id: '11211',
    name: 'Beef Cattle Ranching and Farming, including Feedlots',
    parentId: '1121',
  },
  {
    id: '11212',
    name: 'Dairy Cattle and Milk Production',
    parentId: '1121',
  },
  {
    id: '11213',
    name: 'Dual-Purpose Cattle Ranching and Farming',
    parentId: '1121',
  },
  {
    id: '11221',
    name: 'Hog and Pig Farming',
    parentId: '1122',
  },
  {
    id: '11231',
    name: 'Chicken Egg Production',
    parentId: '1123',
  },
  {
    id: '11232',
    name: 'Broilers and Other Meat Type Chicken Production',
    parentId: '1123',
  },
  {
    id: '11233',
    name: 'Turkey Production',
    parentId: '1123',
  },
  {
    id: '11234',
    name: 'Poultry Hatcheries',
    parentId: '1123',
  },
  {
    id: '11239',
    name: 'Other Poultry Production',
    parentId: '1123',
  },
  {
    id: '11241',
    name: 'Sheep Farming',
    parentId: '1124',
  },
  {
    id: '11242',
    name: 'Goat Farming',
    parentId: '1124',
  },
  {
    id: '11251',
    name: 'Aquaculture',
    parentId: '1125',
  },
  {
    id: '11291',
    name: 'Apiculture',
    parentId: '1129',
  },
  {
    id: '11292',
    name: 'Horses and Other Equine Production',
    parentId: '1129',
  },
  {
    id: '11293',
    name: 'Fur-Bearing Animal and Rabbit Production',
    parentId: '1129',
  },
  {
    id: '11299',
    name: 'All Other Animal Production',
    parentId: '1129',
  },
  {
    id: '11311',
    name: 'Timber Tract Operations',
    parentId: '1131',
  },
  {
    id: '11321',
    name: 'Forest Nurseries and Gathering of Forest Products',
    parentId: '1132',
  },
  {
    id: '11331',
    name: 'Logging',
    parentId: '1133',
  },
  {
    id: '11411',
    name: 'Fishing',
    parentId: '1141',
  },
  {
    id: '11421',
    name: 'Hunting and Trapping',
    parentId: '1142',
  },
  {
    id: '11511',
    name: 'Support Activities for Crop Production',
    parentId: '1151',
  },
  {
    id: '11521',
    name: 'Support Activities for Animal Production',
    parentId: '1152',
  },
  {
    id: '11531',
    name: 'Support Activities for Forestry',
    parentId: '1153',
  },
  {
    id: '21112',
    name: 'Crude Petroleum Extraction ',
    parentId: '2111',
  },
  {
    id: '21113',
    name: 'Natural Gas Extraction ',
    parentId: '2111',
  },
  {
    id: '21211',
    name: 'Coal Mining',
    parentId: '2121',
  },
  {
    id: '21221',
    name: 'Iron Ore Mining',
    parentId: '2122',
  },
  {
    id: '21222',
    name: 'Gold Ore and Silver Ore Mining',
    parentId: '2122',
  },
  {
    id: '21223',
    name: 'Copper, Nickel, Lead, and Zinc Mining',
    parentId: '2122',
  },
  {
    id: '21229',
    name: 'Other Metal Ore Mining',
    parentId: '2122',
  },
  {
    id: '21231',
    name: 'Stone Mining and Quarrying',
    parentId: '2123',
  },
  {
    id: '21232',
    name: 'Sand, Gravel, Clay, and Ceramic and Refractory Minerals Mining and Quarrying',
    parentId: '2123',
  },
  {
    id: '21239',
    name: 'Other Nonmetallic Mineral Mining and Quarrying',
    parentId: '2123',
  },
  {
    id: '21311',
    name: 'Support Activities for Mining',
    parentId: '2131',
  },
  {
    id: '22111',
    name: 'Electric Power Generation ',
    parentId: '2211',
  },
  {
    id: '22112',
    name: 'Electric Power Transmission, Control, and Distribution ',
    parentId: '2211',
  },
  {
    id: '22121',
    name: 'Natural Gas Distribution ',
    parentId: '2212',
  },
  {
    id: '22131',
    name: 'Water Supply and Irrigation Systems ',
    parentId: '2213',
  },
  {
    id: '22132',
    name: 'Sewage Treatment Facilities ',
    parentId: '2213',
  },
  {
    id: '22133',
    name: 'Steam and Air-Conditioning Supply ',
    parentId: '2213',
  },
  {
    id: '23611',
    name: 'Residential Building Construction',
    parentId: '2361',
  },
  {
    id: '23621',
    name: 'Industrial Building Construction',
    parentId: '2362',
  },
  {
    id: '23622',
    name: 'Commercial and Institutional Building Construction',
    parentId: '2362',
  },
  {
    id: '23711',
    name: 'Water and Sewer Line and Related Structures Construction',
    parentId: '2371',
  },
  {
    id: '23712',
    name: 'Oil and Gas Pipeline and Related Structures Construction',
    parentId: '2371',
  },
  {
    id: '23713',
    name: 'Power and Communication Line and Related Structures Construction',
    parentId: '2371',
  },
  {
    id: '23721',
    name: 'Land Subdivision',
    parentId: '2372',
  },
  {
    id: '23731',
    name: 'Highway, Street, and Bridge Construction',
    parentId: '2373',
  },
  {
    id: '23799',
    name: 'Other Heavy and Civil Engineering Construction',
    parentId: '2379',
  },
  {
    id: '23811',
    name: 'Poured Concrete Foundation and Structure Contractors ',
    parentId: '2381',
  },
  {
    id: '23812',
    name: 'Structural Steel and Precast Concrete Contractors ',
    parentId: '2381',
  },
  {
    id: '23813',
    name: 'Framing Contractors ',
    parentId: '2381',
  },
  {
    id: '23814',
    name: 'Masonry Contractors ',
    parentId: '2381',
  },
  {
    id: '23815',
    name: 'Glass and Glazing Contractors ',
    parentId: '2381',
  },
  {
    id: '23816',
    name: 'Roofing Contractors ',
    parentId: '2381',
  },
  {
    id: '23817',
    name: 'Siding Contractors ',
    parentId: '2381',
  },
  {
    id: '23819',
    name: 'Other Foundation, Structure, and Building Exterior Contractors ',
    parentId: '2381',
  },
  {
    id: '23821',
    name: 'Electrical Contractors and Other Wiring Installation Contractors',
    parentId: '2382',
  },
  {
    id: '23822',
    name: 'Plumbing, Heating, and Air-Conditioning Contractors',
    parentId: '2382',
  },
  {
    id: '23829',
    name: 'Other Building Equipment Contractors',
    parentId: '2382',
  },
  {
    id: '23831',
    name: 'Drywall and Insulation Contractors',
    parentId: '2383',
  },
  {
    id: '23832',
    name: 'Painting and Wall Covering Contractors',
    parentId: '2383',
  },
  {
    id: '23833',
    name: 'Flooring Contractors',
    parentId: '2383',
  },
  {
    id: '23834',
    name: 'Tile and Terrazzo Contractors',
    parentId: '2383',
  },
  {
    id: '23835',
    name: 'Finish Carpentry Contractors',
    parentId: '2383',
  },
  {
    id: '23839',
    name: 'Other Building Finishing Contractors',
    parentId: '2383',
  },
  {
    id: '23891',
    name: 'Site Preparation Contractors',
    parentId: '2389',
  },
  {
    id: '23899',
    name: 'All Other Specialty Trade Contractors',
    parentId: '2389',
  },
  {
    id: '31111',
    name: 'Animal Food Manufacturing',
    parentId: '3111',
  },
  {
    id: '31121',
    name: 'Flour Milling and Malt Manufacturing',
    parentId: '3112',
  },
  {
    id: '31122',
    name: 'Starch and Vegetable Fats and Oils Manufacturing',
    parentId: '3112',
  },
  {
    id: '31123',
    name: 'Breakfast Cereal Manufacturing',
    parentId: '3112',
  },
  {
    id: '31131',
    name: 'Sugar Manufacturing',
    parentId: '3113',
  },
  {
    id: '31134',
    name: 'Nonchocolate Confectionery Manufacturing',
    parentId: '3113',
  },
  {
    id: '31135',
    name: 'Chocolate and Confectionery Manufacturing',
    parentId: '3113',
  },
  {
    id: '31141',
    name: 'Frozen Food Manufacturing',
    parentId: '3114',
  },
  {
    id: '31142',
    name: 'Fruit and Vegetable Canning, Pickling, and Drying',
    parentId: '3114',
  },
  {
    id: '31151',
    name: 'Dairy Product (except Frozen) Manufacturing',
    parentId: '3115',
  },
  {
    id: '31152',
    name: 'Ice Cream and Frozen Dessert Manufacturing',
    parentId: '3115',
  },
  {
    id: '31161',
    name: 'Animal Slaughtering and Processing',
    parentId: '3116',
  },
  {
    id: '31171',
    name: 'Seafood Product Preparation and Packaging',
    parentId: '3117',
  },
  {
    id: '31181',
    name: 'Bread and Bakery Product Manufacturing',
    parentId: '3118',
  },
  {
    id: '31182',
    name: 'Cookie, Cracker, and Pasta Manufacturing',
    parentId: '3118',
  },
  {
    id: '31183',
    name: 'Tortilla Manufacturing',
    parentId: '3118',
  },
  {
    id: '31191',
    name: 'Snack Food Manufacturing',
    parentId: '3119',
  },
  {
    id: '31192',
    name: 'Coffee and Tea Manufacturing',
    parentId: '3119',
  },
  {
    id: '31193',
    name: 'Flavoring Syrup and Concentrate Manufacturing',
    parentId: '3119',
  },
  {
    id: '31194',
    name: 'Seasoning and Dressing Manufacturing',
    parentId: '3119',
  },
  {
    id: '31199',
    name: 'All Other Food Manufacturing',
    parentId: '3119',
  },
  {
    id: '31211',
    name: 'Soft Drink and Ice Manufacturing',
    parentId: '3121',
  },
  {
    id: '31212',
    name: 'Breweries',
    parentId: '3121',
  },
  {
    id: '31213',
    name: 'Wineries',
    parentId: '3121',
  },
  {
    id: '31214',
    name: 'Distilleries',
    parentId: '3121',
  },
  {
    id: '31223',
    name: 'Tobacco Manufacturing',
    parentId: '3122',
  },
  {
    id: '31311',
    name: 'Fiber, Yarn, and Thread Mills',
    parentId: '3131',
  },
  {
    id: '31321',
    name: 'Broadwoven Fabric Mills',
    parentId: '3132',
  },
  {
    id: '31322',
    name: 'Narrow Fabric Mills and Schiffli Machine Embroidery',
    parentId: '3132',
  },
  {
    id: '31323',
    name: 'Nonwoven Fabric Mills',
    parentId: '3132',
  },
  {
    id: '31324',
    name: 'Knit Fabric Mills',
    parentId: '3132',
  },
  {
    id: '31331',
    name: 'Textile and Fabric Finishing Mills',
    parentId: '3133',
  },
  {
    id: '31332',
    name: 'Fabric Coating Mills',
    parentId: '3133',
  },
  {
    id: '31411',
    name: 'Carpet and Rug Mills',
    parentId: '3141',
  },
  {
    id: '31412',
    name: 'Curtain and Linen Mills',
    parentId: '3141',
  },
  {
    id: '31491',
    name: 'Textile Bag and Canvas Mills',
    parentId: '3149',
  },
  {
    id: '31499',
    name: 'All Other Textile Product Mills',
    parentId: '3149',
  },
  {
    id: '31512',
    name: 'Apparel Knitting Mills',
    parentId: '3151',
  },
  {
    id: '31521',
    name: 'Cut and Sew Apparel Contractors ',
    parentId: '3152',
  },
  {
    id: '31525',
    name: 'Cut and Sew Apparel Manufacturing (except Contractors) ',
    parentId: '3152',
  },
  {
    id: '31599',
    name: 'Apparel Accessories and Other Apparel Manufacturing',
    parentId: '3159',
  },
  {
    id: '31611',
    name: 'Leather and Hide Tanning and Finishing',
    parentId: '3161',
  },
  {
    id: '31621',
    name: 'Footwear Manufacturing',
    parentId: '3162',
  },
  {
    id: '31699',
    name: 'Other Leather and Allied Product Manufacturing',
    parentId: '3169',
  },
  {
    id: '32111',
    name: 'Sawmills and Wood Preservation',
    parentId: '3211',
  },
  {
    id: '32121',
    name: 'Veneer, Plywood, and Engineered Wood Product Manufacturing',
    parentId: '3212',
  },
  {
    id: '32191',
    name: 'Millwork',
    parentId: '3219',
  },
  {
    id: '32192',
    name: 'Wood Container and Pallet Manufacturing',
    parentId: '3219',
  },
  {
    id: '32199',
    name: 'All Other Wood Product Manufacturing',
    parentId: '3219',
  },
  {
    id: '32211',
    name: 'Pulp Mills',
    parentId: '3221',
  },
  {
    id: '32212',
    name: 'Paper Mills',
    parentId: '3221',
  },
  {
    id: '32213',
    name: 'Paperboard Mills',
    parentId: '3221',
  },
  {
    id: '32221',
    name: 'Paperboard Container Manufacturing',
    parentId: '3222',
  },
  {
    id: '32222',
    name: 'Paper Bag and Coated and Treated Paper Manufacturing',
    parentId: '3222',
  },
  {
    id: '32223',
    name: 'Stationery Product Manufacturing',
    parentId: '3222',
  },
  {
    id: '32229',
    name: 'Other Converted Paper Product Manufacturing',
    parentId: '3222',
  },
  {
    id: '32311',
    name: 'Printing',
    parentId: '3231',
  },
  {
    id: '32312',
    name: 'Support Activities for Printing',
    parentId: '3231',
  },
  {
    id: '32411',
    name: 'Petroleum Refineries',
    parentId: '3241',
  },
  {
    id: '32412',
    name: 'Asphalt Paving, Roofing, and Saturated Materials Manufacturing',
    parentId: '3241',
  },
  {
    id: '32419',
    name: 'Other Petroleum and Coal Products Manufacturing',
    parentId: '3241',
  },
  {
    id: '32511',
    name: 'Petrochemical Manufacturing',
    parentId: '3251',
  },
  {
    id: '32512',
    name: 'Industrial Gas Manufacturing',
    parentId: '3251',
  },
  {
    id: '32513',
    name: 'Synthetic Dye and Pigment Manufacturing',
    parentId: '3251',
  },
  {
    id: '32518',
    name: 'Other Basic Inorganic Chemical Manufacturing',
    parentId: '3251',
  },
  {
    id: '32519',
    name: 'Other Basic Organic Chemical Manufacturing',
    parentId: '3251',
  },
  {
    id: '32521',
    name: 'Resin and Synthetic Rubber Manufacturing',
    parentId: '3252',
  },
  {
    id: '32522',
    name: 'Artificial and Synthetic Fibers and Filaments Manufacturing',
    parentId: '3252',
  },
  {
    id: '32531',
    name: 'Fertilizer and Compost Manufacturing',
    parentId: '3253',
  },
  {
    id: '32532',
    name: 'Pesticide and Other Agricultural Chemical Manufacturing',
    parentId: '3253',
  },
  {
    id: '32541',
    name: 'Pharmaceutical and Medicine Manufacturing',
    parentId: '3254',
  },
  {
    id: '32551',
    name: 'Paint and Coating Manufacturing',
    parentId: '3255',
  },
  {
    id: '32552',
    name: 'Adhesive Manufacturing',
    parentId: '3255',
  },
  {
    id: '32561',
    name: 'Soap and Cleaning Compound Manufacturing',
    parentId: '3256',
  },
  {
    id: '32562',
    name: 'Toilet Preparation Manufacturing',
    parentId: '3256',
  },
  {
    id: '32591',
    name: 'Printing Ink Manufacturing',
    parentId: '3259',
  },
  {
    id: '32592',
    name: 'Explosives Manufacturing',
    parentId: '3259',
  },
  {
    id: '32599',
    name: 'All Other Chemical Product and Preparation Manufacturing',
    parentId: '3259',
  },
  {
    id: '32611',
    name: 'Plastics Packaging Materials and Unlaminated Film and Sheet Manufacturing',
    parentId: '3261',
  },
  {
    id: '32612',
    name: 'Plastics Pipe, Pipe Fitting, and Unlaminated Profile Shape Manufacturing',
    parentId: '3261',
  },
  {
    id: '32613',
    name: 'Laminated Plastics Plate, Sheet (except Packaging), and Shape Manufacturing',
    parentId: '3261',
  },
  {
    id: '32614',
    name: 'Polystyrene Foam Product Manufacturing',
    parentId: '3261',
  },
  {
    id: '32615',
    name: 'Urethane and Other Foam Product (except Polystyrene) Manufacturing',
    parentId: '3261',
  },
  {
    id: '32616',
    name: 'Plastics Bottle Manufacturing',
    parentId: '3261',
  },
  {
    id: '32619',
    name: 'Other Plastics Product Manufacturing',
    parentId: '3261',
  },
  {
    id: '32621',
    name: 'Tire Manufacturing',
    parentId: '3262',
  },
  {
    id: '32622',
    name: 'Rubber and Plastics Hoses and Belting Manufacturing',
    parentId: '3262',
  },
  {
    id: '32629',
    name: 'Other Rubber Product Manufacturing',
    parentId: '3262',
  },
  {
    id: '32711',
    name: 'Pottery, Ceramics, and Plumbing Fixture Manufacturing',
    parentId: '3271',
  },
  {
    id: '32712',
    name: 'Clay Building Material and Refractories Manufacturing',
    parentId: '3271',
  },
  {
    id: '32721',
    name: 'Glass and Glass Product Manufacturing',
    parentId: '3272',
  },
  {
    id: '32731',
    name: 'Cement Manufacturing',
    parentId: '3273',
  },
  {
    id: '32732',
    name: 'Ready-Mix Concrete Manufacturing',
    parentId: '3273',
  },
  {
    id: '32733',
    name: 'Concrete Pipe, Brick, and Block Manufacturing',
    parentId: '3273',
  },
  {
    id: '32739',
    name: 'Other Concrete Product Manufacturing',
    parentId: '3273',
  },
  {
    id: '32741',
    name: 'Lime Manufacturing',
    parentId: '3274',
  },
  {
    id: '32742',
    name: 'Gypsum Product Manufacturing',
    parentId: '3274',
  },
  {
    id: '32791',
    name: 'Abrasive Product Manufacturing',
    parentId: '3279',
  },
  {
    id: '32799',
    name: 'All Other Nonmetallic Mineral Product Manufacturing',
    parentId: '3279',
  },
  {
    id: '33111',
    name: 'Iron and Steel Mills and Ferroalloy Manufacturing',
    parentId: '3311',
  },
  {
    id: '33121',
    name: 'Iron and Steel Pipe and Tube Manufacturing from Purchased Steel',
    parentId: '3312',
  },
  {
    id: '33122',
    name: 'Rolling and Drawing of Purchased Steel',
    parentId: '3312',
  },
  {
    id: '33131',
    name: 'Alumina and Aluminum Production and Processing',
    parentId: '3313',
  },
  {
    id: '33141',
    name: 'Nonferrous Metal (except Aluminum) Smelting and Refining',
    parentId: '3314',
  },
  {
    id: '33142',
    name: 'Copper Rolling, Drawing, Extruding, and Alloying',
    parentId: '3314',
  },
  {
    id: '33149',
    name: 'Nonferrous Metal (except Copper and Aluminum) Rolling, Drawing, Extruding, and Alloying',
    parentId: '3314',
  },
  {
    id: '33151',
    name: 'Ferrous Metal Foundries',
    parentId: '3315',
  },
  {
    id: '33152',
    name: 'Nonferrous Metal Foundries',
    parentId: '3315',
  },
  {
    id: '33211',
    name: 'Forging and Stamping',
    parentId: '3321',
  },
  {
    id: '33221',
    name: 'Cutlery and Handtool Manufacturing',
    parentId: '3322',
  },
  {
    id: '33231',
    name: 'Plate Work and Fabricated Structural Product Manufacturing',
    parentId: '3323',
  },
  {
    id: '33232',
    name: 'Ornamental and Architectural Metal Products Manufacturing',
    parentId: '3323',
  },
  {
    id: '33241',
    name: 'Power Boiler and Heat Exchanger Manufacturing',
    parentId: '3324',
  },
  {
    id: '33242',
    name: 'Metal Tank (Heavy Gauge) Manufacturing',
    parentId: '3324',
  },
  {
    id: '33243',
    name: 'Metal Can, Box, and Other Metal Container (Light Gauge) Manufacturing',
    parentId: '3324',
  },
  {
    id: '33251',
    name: 'Hardware Manufacturing',
    parentId: '3325',
  },
  {
    id: '33261',
    name: 'Spring and Wire Product Manufacturing',
    parentId: '3326',
  },
  {
    id: '33271',
    name: 'Machine Shops',
    parentId: '3327',
  },
  {
    id: '33272',
    name: 'Turned Product and Screw, Nut, and Bolt Manufacturing',
    parentId: '3327',
  },
  {
    id: '33281',
    name: 'Coating, Engraving, Heat Treating, and Allied Activities',
    parentId: '3328',
  },
  {
    id: '33291',
    name: 'Metal Valve Manufacturing',
    parentId: '3329',
  },
  {
    id: '33299',
    name: 'All Other Fabricated Metal Product Manufacturing',
    parentId: '3329',
  },
  {
    id: '33311',
    name: 'Agricultural Implement Manufacturing',
    parentId: '3331',
  },
  {
    id: '33312',
    name: 'Construction Machinery Manufacturing',
    parentId: '3331',
  },
  {
    id: '33313',
    name: 'Mining and Oil and Gas Field Machinery Manufacturing',
    parentId: '3331',
  },
  {
    id: '33324',
    name: 'Industrial Machinery Manufacturing',
    parentId: '3332',
  },
  {
    id: '33331',
    name: 'Commercial and Service Industry Machinery Manufacturing',
    parentId: '3333',
  },
  {
    id: '33341',
    name: 'Ventilation, Heating, Air-Conditioning, and Commercial Refrigeration Equipment Manufacturing',
    parentId: '3334',
  },
  {
    id: '33351',
    name: 'Metalworking Machinery Manufacturing',
    parentId: '3335',
  },
  {
    id: '33361',
    name: 'Engine, Turbine, and Power Transmission Equipment Manufacturing',
    parentId: '3336',
  },
  {
    id: '33391',
    name: 'Pump and Compressor Manufacturing',
    parentId: '3339',
  },
  {
    id: '33392',
    name: 'Material Handling Equipment Manufacturing',
    parentId: '3339',
  },
  {
    id: '33399',
    name: 'All Other General Purpose Machinery Manufacturing',
    parentId: '3339',
  },
  {
    id: '33411',
    name: 'Computer and Peripheral Equipment Manufacturing',
    parentId: '3341',
  },
  {
    id: '33421',
    name: 'Telephone Apparatus Manufacturing',
    parentId: '3342',
  },
  {
    id: '33422',
    name: 'Radio and Television Broadcasting and Wireless Communications Equipment Manufacturing',
    parentId: '3342',
  },
  {
    id: '33429',
    name: 'Other Communications Equipment Manufacturing',
    parentId: '3342',
  },
  {
    id: '33431',
    name: 'Audio and Video Equipment Manufacturing',
    parentId: '3343',
  },
  {
    id: '33441',
    name: 'Semiconductor and Other Electronic Component Manufacturing',
    parentId: '3344',
  },
  {
    id: '33451',
    name: 'Navigational, Measuring, Electromedical, and Control Instruments Manufacturing',
    parentId: '3345',
  },
  {
    id: '33461',
    name: 'Manufacturing and Reproducing Magnetic and Optical Media',
    parentId: '3346',
  },
  {
    id: '33513',
    name: 'Electric Lighting Equipment Manufacturing',
    parentId: '3351',
  },
  {
    id: '33521',
    name: 'Small Electrical Appliance Manufacturing',
    parentId: '3352',
  },
  {
    id: '33522',
    name: 'Major Household Appliance Manufacturing ',
    parentId: '3352',
  },
  {
    id: '33531',
    name: 'Electrical Equipment Manufacturing',
    parentId: '3353',
  },
  {
    id: '33591',
    name: 'Battery Manufacturing',
    parentId: '3359',
  },
  {
    id: '33592',
    name: 'Communication and Energy Wire and Cable Manufacturing',
    parentId: '3359',
  },
  {
    id: '33593',
    name: 'Wiring Device Manufacturing',
    parentId: '3359',
  },
  {
    id: '33599',
    name: 'All Other Electrical Equipment and Component Manufacturing',
    parentId: '3359',
  },
  {
    id: '33611',
    name: 'Automobile and Light Duty Motor Vehicle Manufacturing',
    parentId: '3361',
  },
  {
    id: '33612',
    name: 'Heavy Duty Truck Manufacturing',
    parentId: '3361',
  },
  {
    id: '33621',
    name: 'Motor Vehicle Body and Trailer Manufacturing',
    parentId: '3362',
  },
  {
    id: '33631',
    name: 'Motor Vehicle Gasoline Engine and Engine Parts Manufacturing',
    parentId: '3363',
  },
  {
    id: '33632',
    name: 'Motor Vehicle Electrical and Electronic Equipment Manufacturing',
    parentId: '3363',
  },
  {
    id: '33633',
    name: 'Motor Vehicle Steering and Suspension Components (except Spring) Manufacturing',
    parentId: '3363',
  },
  {
    id: '33634',
    name: 'Motor Vehicle Brake System Manufacturing',
    parentId: '3363',
  },
  {
    id: '33635',
    name: 'Motor Vehicle Transmission and Power Train Parts Manufacturing',
    parentId: '3363',
  },
  {
    id: '33636',
    name: 'Motor Vehicle Seating and Interior Trim Manufacturing',
    parentId: '3363',
  },
  {
    id: '33637',
    name: 'Motor Vehicle Metal Stamping',
    parentId: '3363',
  },
  {
    id: '33639',
    name: 'Other Motor Vehicle Parts Manufacturing',
    parentId: '3363',
  },
  {
    id: '33641',
    name: 'Aerospace Product and Parts Manufacturing',
    parentId: '3364',
  },
  {
    id: '33651',
    name: 'Railroad Rolling Stock Manufacturing',
    parentId: '3365',
  },
  {
    id: '33661',
    name: 'Ship and Boat Building',
    parentId: '3366',
  },
  {
    id: '33699',
    name: 'Other Transportation Equipment Manufacturing',
    parentId: '3369',
  },
  {
    id: '33711',
    name: 'Wood Kitchen Cabinet and Countertop Manufacturing',
    parentId: '3371',
  },
  {
    id: '33712',
    name: 'Household and Institutional Furniture Manufacturing',
    parentId: '3371',
  },
  {
    id: '33721',
    name: 'Office Furniture (including Fixtures) Manufacturing',
    parentId: '3372',
  },
  {
    id: '33791',
    name: 'Mattress Manufacturing',
    parentId: '3379',
  },
  {
    id: '33792',
    name: 'Blind and Shade Manufacturing',
    parentId: '3379',
  },
  {
    id: '33911',
    name: 'Medical Equipment and Supplies Manufacturing',
    parentId: '3391',
  },
  {
    id: '33991',
    name: 'Jewelry and Silverware Manufacturing',
    parentId: '3399',
  },
  {
    id: '33992',
    name: 'Sporting and Athletic Goods Manufacturing',
    parentId: '3399',
  },
  {
    id: '33993',
    name: 'Doll, Toy, and Game Manufacturing',
    parentId: '3399',
  },
  {
    id: '33994',
    name: 'Office Supplies (except Paper) Manufacturing',
    parentId: '3399',
  },
  {
    id: '33995',
    name: 'Sign Manufacturing',
    parentId: '3399',
  },
  {
    id: '33999',
    name: 'All Other Miscellaneous Manufacturing',
    parentId: '3399',
  },
  {
    id: '42311',
    name: 'Automobile and Other Motor Vehicle Merchant Wholesalers ',
    parentId: '4231',
  },
  {
    id: '42312',
    name: 'Motor Vehicle Supplies and New Parts Merchant Wholesalers ',
    parentId: '4231',
  },
  {
    id: '42313',
    name: 'Tire and Tube Merchant Wholesalers ',
    parentId: '4231',
  },
  {
    id: '42314',
    name: 'Motor Vehicle Parts (Used) Merchant Wholesalers ',
    parentId: '4231',
  },
  {
    id: '42321',
    name: 'Furniture Merchant Wholesalers ',
    parentId: '4232',
  },
  {
    id: '42322',
    name: 'Home Furnishing Merchant Wholesalers ',
    parentId: '4232',
  },
  {
    id: '42331',
    name: 'Lumber, Plywood, Millwork, and Wood Panel Merchant Wholesalers ',
    parentId: '4233',
  },
  {
    id: '42332',
    name: 'Brick, Stone, and Related Construction Material Merchant Wholesalers ',
    parentId: '4233',
  },
  {
    id: '42333',
    name: 'Roofing, Siding, and Insulation Material Merchant Wholesalers ',
    parentId: '4233',
  },
  {
    id: '42339',
    name: 'Other Construction Material Merchant Wholesalers ',
    parentId: '4233',
  },
  {
    id: '42341',
    name: 'Photographic Equipment and Supplies Merchant Wholesalers ',
    parentId: '4234',
  },
  {
    id: '42342',
    name: 'Office Equipment Merchant Wholesalers ',
    parentId: '4234',
  },
  {
    id: '42343',
    name: 'Computer and Computer Peripheral Equipment and Software Merchant Wholesalers ',
    parentId: '4234',
  },
  {
    id: '42344',
    name: 'Other Commercial Equipment Merchant Wholesalers ',
    parentId: '4234',
  },
  {
    id: '42345',
    name: 'Medical, Dental, and Hospital Equipment and Supplies Merchant Wholesalers ',
    parentId: '4234',
  },
  {
    id: '42346',
    name: 'Ophthalmic Goods Merchant Wholesalers ',
    parentId: '4234',
  },
  {
    id: '42349',
    name: 'Other Professional Equipment and Supplies Merchant Wholesalers ',
    parentId: '4234',
  },
  {
    id: '42351',
    name: 'Metal Service Centers and Other Metal Merchant Wholesalers ',
    parentId: '4235',
  },
  {
    id: '42352',
    name: 'Coal and Other Mineral and Ore Merchant Wholesalers ',
    parentId: '4235',
  },
  {
    id: '42361',
    name: 'Electrical Apparatus and Equipment, Wiring Supplies, and Related Equipment Merchant Wholesalers ',
    parentId: '4236',
  },
  {
    id: '42362',
    name: 'Household Appliances, Electric Housewares, and Consumer Electronics Merchant Wholesalers ',
    parentId: '4236',
  },
  {
    id: '42369',
    name: 'Other Electronic Parts and Equipment Merchant Wholesalers ',
    parentId: '4236',
  },
  {
    id: '42371',
    name: 'Hardware Merchant Wholesalers ',
    parentId: '4237',
  },
  {
    id: '42372',
    name: 'Plumbing and Heating Equipment and Supplies (Hydronics) Merchant Wholesalers ',
    parentId: '4237',
  },
  {
    id: '42373',
    name: 'Warm Air Heating and Air-Conditioning Equipment and Supplies Merchant Wholesalers ',
    parentId: '4237',
  },
  {
    id: '42374',
    name: 'Refrigeration Equipment and Supplies Merchant Wholesalers ',
    parentId: '4237',
  },
  {
    id: '42381',
    name: 'Construction and Mining (except Oil Well) Machinery and Equipment Merchant Wholesalers ',
    parentId: '4238',
  },
  {
    id: '42382',
    name: 'Farm and Garden Machinery and Equipment Merchant Wholesalers ',
    parentId: '4238',
  },
  {
    id: '42383',
    name: 'Industrial Machinery and Equipment Merchant Wholesalers ',
    parentId: '4238',
  },
  {
    id: '42384',
    name: 'Industrial Supplies Merchant Wholesalers ',
    parentId: '4238',
  },
  {
    id: '42385',
    name: 'Service Establishment Equipment and Supplies Merchant Wholesalers ',
    parentId: '4238',
  },
  {
    id: '42386',
    name: 'Transportation Equipment and Supplies (except Motor Vehicle) Merchant Wholesalers ',
    parentId: '4238',
  },
  {
    id: '42391',
    name: 'Sporting and Recreational Goods and Supplies Merchant Wholesalers',
    parentId: '4239',
  },
  {
    id: '42392',
    name: 'Toy and Hobby Goods and Supplies Merchant Wholesalers ',
    parentId: '4239',
  },
  {
    id: '42393',
    name: 'Recyclable Material Merchant Wholesalers ',
    parentId: '4239',
  },
  {
    id: '42394',
    name: 'Jewelry, Watch, Precious Stone, and Precious Metal Merchant Wholesalers ',
    parentId: '4239',
  },
  {
    id: '42399',
    name: 'Other Miscellaneous Durable Goods Merchant Wholesalers ',
    parentId: '4239',
  },
  {
    id: '42411',
    name: 'Printing and Writing Paper Merchant Wholesalers ',
    parentId: '4241',
  },
  {
    id: '42412',
    name: 'Stationery and Office Supplies Merchant Wholesalers ',
    parentId: '4241',
  },
  {
    id: '42413',
    name: 'Industrial and Personal Service Paper Merchant Wholesalers ',
    parentId: '4241',
  },
  {
    id: '42421',
    name: "Drugs and Druggists' Sundries Merchant Wholesalers ",
    parentId: '4242',
  },
  {
    id: '42431',
    name: 'Piece Goods, Notions, and Other Dry Goods Merchant Wholesalers ',
    parentId: '4243',
  },
  {
    id: '42434',
    name: 'Footwear Merchant Wholesalers ',
    parentId: '4243',
  },
  {
    id: '42435',
    name: 'Clothing and Clothing Accessories Merchant Wholesalers',
    parentId: '4243',
  },
  {
    id: '42441',
    name: 'General Line Grocery Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42442',
    name: 'Packaged Frozen Food Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42443',
    name: 'Dairy Product (except Dried or Canned) Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42444',
    name: 'Poultry and Poultry Product Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42445',
    name: 'Confectionery Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42446',
    name: 'Fish and Seafood Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42447',
    name: 'Meat and Meat Product Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42448',
    name: 'Fresh Fruit and Vegetable Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42449',
    name: 'Other Grocery and Related Products Merchant Wholesalers ',
    parentId: '4244',
  },
  {
    id: '42451',
    name: 'Grain and Field Bean Merchant Wholesalers ',
    parentId: '4245',
  },
  {
    id: '42452',
    name: 'Livestock Merchant Wholesalers ',
    parentId: '4245',
  },
  {
    id: '42459',
    name: 'Other Farm Product Raw Material Merchant Wholesalers ',
    parentId: '4245',
  },
  {
    id: '42461',
    name: 'Plastics Materials and Basic Forms and Shapes Merchant Wholesalers ',
    parentId: '4246',
  },
  {
    id: '42469',
    name: 'Other Chemical and Allied Products Merchant Wholesalers ',
    parentId: '4246',
  },
  {
    id: '42471',
    name: 'Petroleum Bulk Stations and Terminals ',
    parentId: '4247',
  },
  {
    id: '42472',
    name: 'Petroleum and Petroleum Products Merchant Wholesalers (except Bulk Stations and Terminals) ',
    parentId: '4247',
  },
  {
    id: '42481',
    name: 'Beer and Ale Merchant Wholesalers ',
    parentId: '4248',
  },
  {
    id: '42482',
    name: 'Wine and Distilled Alcoholic Beverage Merchant Wholesalers ',
    parentId: '4248',
  },
  {
    id: '42491',
    name: 'Farm Supplies Merchant Wholesalers ',
    parentId: '4249',
  },
  {
    id: '42492',
    name: 'Book, Periodical, and Newspaper Merchant Wholesalers ',
    parentId: '4249',
  },
  {
    id: '42493',
    name: "Flower, Nursery Stock, and Florists' Supplies Merchant Wholesalers ",
    parentId: '4249',
  },
  {
    id: '42494',
    name: 'Tobacco Product and Electronic Cigarette Merchant Wholesalers ',
    parentId: '4249',
  },
  {
    id: '42495',
    name: 'Paint, Varnish, and Supplies Merchant Wholesalers ',
    parentId: '4249',
  },
  {
    id: '42499',
    name: 'Other Miscellaneous Nondurable Goods Merchant Wholesalers ',
    parentId: '4249',
  },
  {
    id: '42512',
    name: 'Wholesale Trade Agents and Brokers ',
    parentId: '4251',
  },
  {
    id: '44111',
    name: 'New Car Dealers ',
    parentId: '4411',
  },
  {
    id: '44112',
    name: 'Used Car Dealers ',
    parentId: '4411',
  },
  {
    id: '44121',
    name: 'Recreational Vehicle Dealers ',
    parentId: '4412',
  },
  {
    id: '44122',
    name: 'Motorcycle, Boat, and Other Motor Vehicle Dealers ',
    parentId: '4412',
  },
  {
    id: '44133',
    name: 'Automotive Parts and Accessories Retailers ',
    parentId: '4413',
  },
  {
    id: '44134',
    name: 'Tire Dealers ',
    parentId: '4413',
  },
  {
    id: '44411',
    name: 'Home Centers ',
    parentId: '4441',
  },
  {
    id: '44412',
    name: 'Paint and Wallpaper Retailers ',
    parentId: '4441',
  },
  {
    id: '44414',
    name: 'Hardware Retailers ',
    parentId: '4441',
  },
  {
    id: '44418',
    name: 'Other Building Material Dealers ',
    parentId: '4441',
  },
  {
    id: '44423',
    name: 'Outdoor Power Equipment Retailers ',
    parentId: '4442',
  },
  {
    id: '44424',
    name: 'Nursery, Garden Center, and Farm Supply Retailers ',
    parentId: '4442',
  },
  {
    id: '44511',
    name: 'Supermarkets and Other Grocery Retailers (except Convenience Retailers) ',
    parentId: '4451',
  },
  {
    id: '44513',
    name: 'Convenience Retailers and Vending Machine Operators ',
    parentId: '4451',
  },
  {
    id: '44523',
    name: 'Fruit and Vegetable Retailers ',
    parentId: '4452',
  },
  {
    id: '44524',
    name: 'Meat Retailers ',
    parentId: '4452',
  },
  {
    id: '44525',
    name: 'Fish and Seafood Retailers ',
    parentId: '4452',
  },
  {
    id: '44529',
    name: 'Other Specialty Food Retailers ',
    parentId: '4452',
  },
  {
    id: '44532',
    name: 'Beer, Wine, and Liquor Retailers ',
    parentId: '4453',
  },
  {
    id: '44911',
    name: 'Furniture Retailers ',
    parentId: '4491',
  },
  {
    id: '44912',
    name: 'Home Furnishings Retailers ',
    parentId: '4491',
  },
  {
    id: '44921',
    name: 'Electronics and Appliance Retailers ',
    parentId: '4492',
  },
  {
    id: '45511',
    name: 'Department Stores ',
    parentId: '4551',
  },
  {
    id: '45521',
    name: 'Warehouse Clubs, Supercenters, and Other General Merchandise Retailers ',
    parentId: '4552',
  },
  {
    id: '45611',
    name: 'Pharmacies and Drug Retailers ',
    parentId: '4561',
  },
  {
    id: '45612',
    name: 'Cosmetics, Beauty Supplies, and Perfume Retailers ',
    parentId: '4561',
  },
  {
    id: '45613',
    name: 'Optical Goods Retailers ',
    parentId: '4561',
  },
  {
    id: '45619',
    name: 'Other Health and Personal Care Retailers ',
    parentId: '4561',
  },
  {
    id: '45711',
    name: 'Gasoline Stations with Convenience Stores ',
    parentId: '4571',
  },
  {
    id: '45712',
    name: 'Other Gasoline Stations ',
    parentId: '4571',
  },
  {
    id: '45721',
    name: 'Fuel Dealers',
    parentId: '4572',
  },
  {
    id: '45811',
    name: 'Clothing and Clothing Accessories Retailers ',
    parentId: '4581',
  },
  {
    id: '45821',
    name: 'Shoe Retailers ',
    parentId: '4582',
  },
  {
    id: '45831',
    name: 'Jewelry Retailers ',
    parentId: '4583',
  },
  {
    id: '45832',
    name: 'Luggage and Leather Goods Retailers ',
    parentId: '4583',
  },
  {
    id: '45911',
    name: 'Sporting Goods Retailers ',
    parentId: '4591',
  },
  {
    id: '45912',
    name: 'Hobby, Toy, and Game Retailers ',
    parentId: '4591',
  },
  {
    id: '45913',
    name: 'Sewing, Needlework, and Piece Goods Retailers ',
    parentId: '4591',
  },
  {
    id: '45914',
    name: 'Musical Instrument and Supplies Retailers ',
    parentId: '4591',
  },
  {
    id: '45921',
    name: 'Book Retailers and News Dealers ',
    parentId: '4592',
  },
  {
    id: '45931',
    name: 'Florists ',
    parentId: '4593',
  },
  {
    id: '45941',
    name: 'Office Supplies and Stationery Retailers ',
    parentId: '4594',
  },
  {
    id: '45942',
    name: 'Gift, Novelty, and Souvenir Retailers ',
    parentId: '4594',
  },
  {
    id: '45951',
    name: 'Used Merchandise Retailers ',
    parentId: '4595',
  },
  {
    id: '45991',
    name: 'Pet and Pet Supplies Retailers ',
    parentId: '4599',
  },
  {
    id: '45992',
    name: 'Art Dealers ',
    parentId: '4599',
  },
  {
    id: '45993',
    name: 'Manufactured (Mobile) Home Dealers ',
    parentId: '4599',
  },
  {
    id: '45999',
    name: 'All Other Miscellaneous Retailers ',
    parentId: '4599',
  },
  {
    id: '48111',
    name: 'Scheduled Air Transportation',
    parentId: '4811',
  },
  {
    id: '48121',
    name: 'Nonscheduled Air Transportation',
    parentId: '4812',
  },
  {
    id: '48211',
    name: 'Rail Transportation',
    parentId: '4821',
  },
  {
    id: '48311',
    name: 'Deep Sea, Coastal, and Great Lakes Water Transportation',
    parentId: '4831',
  },
  {
    id: '48321',
    name: 'Inland Water Transportation',
    parentId: '4832',
  },
  {
    id: '48411',
    name: 'General Freight Trucking, Local',
    parentId: '4841',
  },
  {
    id: '48412',
    name: 'General Freight Trucking, Long-Distance',
    parentId: '4841',
  },
  {
    id: '48421',
    name: 'Used Household and Office Goods Moving',
    parentId: '4842',
  },
  {
    id: '48422',
    name: 'Specialized Freight (except Used Goods) Trucking, Local',
    parentId: '4842',
  },
  {
    id: '48423',
    name: 'Specialized Freight (except Used Goods) Trucking, Long-Distance',
    parentId: '4842',
  },
  {
    id: '48511',
    name: 'Urban Transit Systems',
    parentId: '4851',
  },
  {
    id: '48521',
    name: 'Interurban and Rural Bus Transportation',
    parentId: '4852',
  },
  {
    id: '48531',
    name: 'Taxi and Ridesharing Services',
    parentId: '4853',
  },
  {
    id: '48532',
    name: 'Limousine Service',
    parentId: '4853',
  },
  {
    id: '48541',
    name: 'School and Employee Bus Transportation',
    parentId: '4854',
  },
  {
    id: '48551',
    name: 'Charter Bus Industry',
    parentId: '4855',
  },
  {
    id: '48599',
    name: 'Other Transit and Ground Passenger Transportation',
    parentId: '4859',
  },
  {
    id: '48611',
    name: 'Pipeline Transportation of Crude Oil',
    parentId: '4861',
  },
  {
    id: '48621',
    name: 'Pipeline Transportation of Natural Gas',
    parentId: '4862',
  },
  {
    id: '48691',
    name: 'Pipeline Transportation of Refined Petroleum Products',
    parentId: '4869',
  },
  {
    id: '48699',
    name: 'All Other Pipeline Transportation',
    parentId: '4869',
  },
  {
    id: '48711',
    name: 'Scenic and Sightseeing Transportation, Land',
    parentId: '4871',
  },
  {
    id: '48721',
    name: 'Scenic and Sightseeing Transportation, Water',
    parentId: '4872',
  },
  {
    id: '48799',
    name: 'Scenic and Sightseeing Transportation, Other',
    parentId: '4879',
  },
  {
    id: '48811',
    name: 'Airport Operations',
    parentId: '4881',
  },
  {
    id: '48819',
    name: 'Other Support Activities for Air Transportation',
    parentId: '4881',
  },
  {
    id: '48821',
    name: 'Support Activities for Rail Transportation',
    parentId: '4882',
  },
  {
    id: '48831',
    name: 'Port and Harbor Operations',
    parentId: '4883',
  },
  {
    id: '48832',
    name: 'Marine Cargo Handling',
    parentId: '4883',
  },
  {
    id: '48833',
    name: 'Navigational Services to Shipping',
    parentId: '4883',
  },
  {
    id: '48839',
    name: 'Other Support Activities for Water Transportation',
    parentId: '4883',
  },
  {
    id: '48841',
    name: 'Motor Vehicle Towing',
    parentId: '4884',
  },
  {
    id: '48849',
    name: 'Other Support Activities for Road Transportation',
    parentId: '4884',
  },
  {
    id: '48851',
    name: 'Freight Transportation Arrangement',
    parentId: '4885',
  },
  {
    id: '48899',
    name: 'Other Support Activities for Transportation',
    parentId: '4889',
  },
  {
    id: '49111',
    name: 'Postal Service',
    parentId: '4911',
  },
  {
    id: '49211',
    name: 'Couriers and Express Delivery Services',
    parentId: '4921',
  },
  {
    id: '49221',
    name: 'Local Messengers and Local Delivery',
    parentId: '4922',
  },
  {
    id: '49311',
    name: 'General Warehousing and Storage',
    parentId: '4931',
  },
  {
    id: '49312',
    name: 'Refrigerated Warehousing and Storage',
    parentId: '4931',
  },
  {
    id: '49313',
    name: 'Farm Product Warehousing and Storage',
    parentId: '4931',
  },
  {
    id: '49319',
    name: 'Other Warehousing and Storage',
    parentId: '4931',
  },
  {
    id: '51211',
    name: 'Motion Picture and Video Production',
    parentId: '5121',
  },
  {
    id: '51212',
    name: 'Motion Picture and Video Distribution',
    parentId: '5121',
  },
  {
    id: '51213',
    name: 'Motion Picture and Video Exhibition',
    parentId: '5121',
  },
  {
    id: '51219',
    name: 'Postproduction Services and Other Motion Picture and Video Industries',
    parentId: '5121',
  },
  {
    id: '51223',
    name: 'Music Publishers',
    parentId: '5122',
  },
  {
    id: '51224',
    name: 'Sound Recording Studios',
    parentId: '5122',
  },
  {
    id: '51225',
    name: 'Record Production and Distribution',
    parentId: '5122',
  },
  {
    id: '51229',
    name: 'Other Sound Recording Industries',
    parentId: '5122',
  },
  {
    id: '51311',
    name: 'Newspaper Publishers',
    parentId: '5131',
  },
  {
    id: '51312',
    name: 'Periodical Publishers',
    parentId: '5131',
  },
  {
    id: '51313',
    name: 'Book Publishers',
    parentId: '5131',
  },
  {
    id: '51314',
    name: 'Directory and Mailing List Publishers',
    parentId: '5131',
  },
  {
    id: '51319',
    name: 'Other Publishers',
    parentId: '5131',
  },
  {
    id: '51321',
    name: 'Software Publishers',
    parentId: '5132',
  },
  {
    id: '51611',
    name: 'Radio Broadcasting Stations',
    parentId: '5161',
  },
  {
    id: '51612',
    name: 'Television Broadcasting Stations',
    parentId: '5161',
  },
  {
    id: '51621',
    name: 'Media Streaming Distribution Services, Social Networks, and Other Media Networks and Content Providers',
    parentId: '5162',
  },
  {
    id: '51711',
    name: 'Wired and Wireless Telecommunications Carriers (except Satellite)',
    parentId: '5171',
  },
  {
    id: '51712',
    name: 'Telecommunications Resellers and Agents for Wireless Telecommunication Services',
    parentId: '5171',
  },
  {
    id: '51741',
    name: 'Satellite Telecommunications',
    parentId: '5174',
  },
  {
    id: '51781',
    name: 'All Other Telecommunications',
    parentId: '5178',
  },
  {
    id: '51821',
    name: 'Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services',
    parentId: '5182',
  },
  {
    id: '51921',
    name: 'Libraries and Archives',
    parentId: '5192',
  },
  {
    id: '51929',
    name: 'Web Search Portals and All Other Information Services',
    parentId: '5192',
  },
  {
    id: '52111',
    name: 'Monetary Authorities-Central Bank',
    parentId: '5211',
  },
  {
    id: '52211',
    name: 'Commercial Banking ',
    parentId: '5221',
  },
  {
    id: '52213',
    name: 'Credit Unions ',
    parentId: '5221',
  },
  {
    id: '52218',
    name: 'Savings Institutions and Other Depository Credit Intermediation ',
    parentId: '5221',
  },
  {
    id: '52221',
    name: 'Credit Card Issuing ',
    parentId: '5222',
  },
  {
    id: '52222',
    name: 'Sales Financing ',
    parentId: '5222',
  },
  {
    id: '52229',
    name: 'Other Nondepository Credit Intermediation ',
    parentId: '5222',
  },
  {
    id: '52231',
    name: 'Mortgage and Nonmortgage Loan Brokers ',
    parentId: '5223',
  },
  {
    id: '52232',
    name: 'Financial Transactions Processing, Reserve, and Clearinghouse Activities ',
    parentId: '5223',
  },
  {
    id: '52239',
    name: 'Other Activities Related to Credit Intermediation ',
    parentId: '5223',
  },
  {
    id: '52315',
    name: 'Investment Banking and Securities Intermediation ',
    parentId: '5231',
  },
  {
    id: '52316',
    name: 'Commodity Contracts Intermediation ',
    parentId: '5231',
  },
  {
    id: '52321',
    name: 'Securities and Commodity Exchanges',
    parentId: '5232',
  },
  {
    id: '52391',
    name: 'Miscellaneous Intermediation ',
    parentId: '5239',
  },
  {
    id: '52394',
    name: 'Portfolio Management and Investment Advice ',
    parentId: '5239',
  },
  {
    id: '52399',
    name: 'All Other Financial Investment Activities ',
    parentId: '5239',
  },
  {
    id: '52411',
    name: 'Direct Life, Health, and Medical Insurance Carriers ',
    parentId: '5241',
  },
  {
    id: '52412',
    name: 'Direct Insurance (except Life, Health, and Medical) Carriers ',
    parentId: '5241',
  },
  {
    id: '52413',
    name: 'Reinsurance Carriers ',
    parentId: '5241',
  },
  {
    id: '52421',
    name: 'Insurance Agencies and Brokerages ',
    parentId: '5242',
  },
  {
    id: '52429',
    name: 'Other Insurance Related Activities ',
    parentId: '5242',
  },
  {
    id: '52511',
    name: 'Pension Funds ',
    parentId: '5251',
  },
  {
    id: '52512',
    name: 'Health and Welfare Funds ',
    parentId: '5251',
  },
  {
    id: '52519',
    name: 'Other Insurance Funds ',
    parentId: '5251',
  },
  {
    id: '52591',
    name: 'Open-End Investment Funds ',
    parentId: '5259',
  },
  {
    id: '52592',
    name: 'Trusts, Estates, and Agency Accounts ',
    parentId: '5259',
  },
  {
    id: '52599',
    name: 'Other Financial Vehicles ',
    parentId: '5259',
  },
  {
    id: '53111',
    name: 'Lessors of Residential Buildings and Dwellings ',
    parentId: '5311',
  },
  {
    id: '53112',
    name: 'Lessors of Nonresidential Buildings (except Miniwarehouses) ',
    parentId: '5311',
  },
  {
    id: '53113',
    name: 'Lessors of Miniwarehouses and Self-Storage Units ',
    parentId: '5311',
  },
  {
    id: '53119',
    name: 'Lessors of Other Real Estate Property ',
    parentId: '5311',
  },
  {
    id: '53121',
    name: 'Offices of Real Estate Agents and Brokers',
    parentId: '5312',
  },
  {
    id: '53131',
    name: 'Real Estate Property Managers ',
    parentId: '5313',
  },
  {
    id: '53132',
    name: 'Offices of Real Estate Appraisers ',
    parentId: '5313',
  },
  {
    id: '53139',
    name: 'Other Activities Related to Real Estate ',
    parentId: '5313',
  },
  {
    id: '53211',
    name: 'Passenger Car Rental and Leasing',
    parentId: '5321',
  },
  {
    id: '53212',
    name: 'Truck, Utility Trailer, and RV (Recreational Vehicle) Rental and Leasing',
    parentId: '5321',
  },
  {
    id: '53221',
    name: 'Consumer Electronics and Appliances Rental',
    parentId: '5322',
  },
  {
    id: '53228',
    name: 'Other Consumer Goods Rental ',
    parentId: '5322',
  },
  {
    id: '53231',
    name: 'General Rental Centers',
    parentId: '5323',
  },
  {
    id: '53241',
    name: 'Construction, Transportation, Mining, and Forestry Machinery and Equipment Rental and Leasing',
    parentId: '5324',
  },
  {
    id: '53242',
    name: 'Office Machinery and Equipment Rental and Leasing',
    parentId: '5324',
  },
  {
    id: '53249',
    name: 'Other Commercial and Industrial Machinery and Equipment Rental and Leasing',
    parentId: '5324',
  },
  {
    id: '53311',
    name: 'Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)',
    parentId: '5331',
  },
  {
    id: '54111',
    name: 'Offices of Lawyers',
    parentId: '5411',
  },
  {
    id: '54112',
    name: 'Offices of Notaries',
    parentId: '5411',
  },
  {
    id: '54119',
    name: 'Other Legal Services',
    parentId: '5411',
  },
  {
    id: '54121',
    name: 'Accounting, Tax Preparation, Bookkeeping, and Payroll Services',
    parentId: '5412',
  },
  {
    id: '54131',
    name: 'Architectural Services',
    parentId: '5413',
  },
  {
    id: '54132',
    name: 'Landscape Architectural Services',
    parentId: '5413',
  },
  {
    id: '54133',
    name: 'Engineering Services',
    parentId: '5413',
  },
  {
    id: '54134',
    name: 'Drafting Services',
    parentId: '5413',
  },
  {
    id: '54135',
    name: 'Building Inspection Services',
    parentId: '5413',
  },
  {
    id: '54136',
    name: 'Geophysical Surveying and Mapping Services',
    parentId: '5413',
  },
  {
    id: '54137',
    name: 'Surveying and Mapping (except Geophysical) Services',
    parentId: '5413',
  },
  {
    id: '54138',
    name: 'Testing Laboratories and Services',
    parentId: '5413',
  },
  {
    id: '54141',
    name: 'Interior Design Services',
    parentId: '5414',
  },
  {
    id: '54142',
    name: 'Industrial Design Services',
    parentId: '5414',
  },
  {
    id: '54143',
    name: 'Graphic Design Services',
    parentId: '5414',
  },
  {
    id: '54149',
    name: 'Other Specialized Design Services',
    parentId: '5414',
  },
  {
    id: '54151',
    name: 'Computer Systems Design and Related Services',
    parentId: '5415',
  },
  {
    id: '54161',
    name: 'Management Consulting Services',
    parentId: '5416',
  },
  {
    id: '54162',
    name: 'Environmental Consulting Services',
    parentId: '5416',
  },
  {
    id: '54169',
    name: 'Other Scientific and Technical Consulting Services',
    parentId: '5416',
  },
  {
    id: '54171',
    name: 'Research and Development in the Physical, Engineering, and Life Sciences',
    parentId: '5417',
  },
  {
    id: '54172',
    name: 'Research and Development in the Social Sciences and Humanities',
    parentId: '5417',
  },
  {
    id: '54181',
    name: 'Advertising Agencies',
    parentId: '5418',
  },
  {
    id: '54182',
    name: 'Public Relations Agencies',
    parentId: '5418',
  },
  {
    id: '54183',
    name: 'Media Buying Agencies',
    parentId: '5418',
  },
  {
    id: '54184',
    name: 'Media Representatives',
    parentId: '5418',
  },
  {
    id: '54185',
    name: 'Indoor and Outdoor Display Advertising',
    parentId: '5418',
  },
  {
    id: '54186',
    name: 'Direct Mail Advertising',
    parentId: '5418',
  },
  {
    id: '54187',
    name: 'Advertising Material Distribution Services',
    parentId: '5418',
  },
  {
    id: '54189',
    name: 'Other Services Related to Advertising',
    parentId: '5418',
  },
  {
    id: '54191',
    name: 'Marketing Research and Public Opinion Polling',
    parentId: '5419',
  },
  {
    id: '54192',
    name: 'Photographic Services',
    parentId: '5419',
  },
  {
    id: '54193',
    name: 'Translation and Interpretation Services',
    parentId: '5419',
  },
  {
    id: '54194',
    name: 'Veterinary Services',
    parentId: '5419',
  },
  {
    id: '54199',
    name: 'All Other Professional, Scientific, and Technical Services',
    parentId: '5419',
  },
  {
    id: '55111',
    name: 'Management of Companies and Enterprises',
    parentId: '5511',
  },
  {
    id: '56111',
    name: 'Office Administrative Services',
    parentId: '5611',
  },
  {
    id: '56121',
    name: 'Facilities Support Services',
    parentId: '5612',
  },
  {
    id: '56131',
    name: 'Employment Placement Agencies and Executive Search Services',
    parentId: '5613',
  },
  {
    id: '56132',
    name: 'Temporary Help Services',
    parentId: '5613',
  },
  {
    id: '56133',
    name: 'Professional Employer Organizations',
    parentId: '5613',
  },
  {
    id: '56141',
    name: 'Document Preparation Services',
    parentId: '5614',
  },
  {
    id: '56142',
    name: 'Telephone Call Centers',
    parentId: '5614',
  },
  {
    id: '56143',
    name: 'Business Service Centers',
    parentId: '5614',
  },
  {
    id: '56144',
    name: 'Collection Agencies',
    parentId: '5614',
  },
  {
    id: '56145',
    name: 'Credit Bureaus',
    parentId: '5614',
  },
  {
    id: '56149',
    name: 'Other Business Support Services',
    parentId: '5614',
  },
  {
    id: '56151',
    name: 'Travel Agencies',
    parentId: '5615',
  },
  {
    id: '56152',
    name: 'Tour Operators',
    parentId: '5615',
  },
  {
    id: '56159',
    name: 'Other Travel Arrangement and Reservation Services',
    parentId: '5615',
  },
  {
    id: '56161',
    name: 'Investigation, Guard, and Armored Car Services',
    parentId: '5616',
  },
  {
    id: '56162',
    name: 'Security Systems Services',
    parentId: '5616',
  },
  {
    id: '56171',
    name: 'Exterminating and Pest Control Services',
    parentId: '5617',
  },
  {
    id: '56172',
    name: 'Janitorial Services',
    parentId: '5617',
  },
  {
    id: '56173',
    name: 'Landscaping Services',
    parentId: '5617',
  },
  {
    id: '56174',
    name: 'Carpet and Upholstery Cleaning Services',
    parentId: '5617',
  },
  {
    id: '56179',
    name: 'Other Services to Buildings and Dwellings',
    parentId: '5617',
  },
  {
    id: '56191',
    name: 'Packaging and Labeling Services',
    parentId: '5619',
  },
  {
    id: '56192',
    name: 'Convention and Trade Show Organizers',
    parentId: '5619',
  },
  {
    id: '56199',
    name: 'All Other Support Services',
    parentId: '5619',
  },
  {
    id: '56211',
    name: 'Waste Collection ',
    parentId: '5621',
  },
  {
    id: '56221',
    name: 'Waste Treatment and Disposal ',
    parentId: '5622',
  },
  {
    id: '56291',
    name: 'Remediation Services ',
    parentId: '5629',
  },
  {
    id: '56292',
    name: 'Materials Recovery Facilities ',
    parentId: '5629',
  },
  {
    id: '56299',
    name: 'All Other Waste Management Services ',
    parentId: '5629',
  },
  {
    id: '61111',
    name: 'Elementary and Secondary Schools ',
    parentId: '6111',
  },
  {
    id: '61121',
    name: 'Junior Colleges',
    parentId: '6112',
  },
  {
    id: '61131',
    name: 'Colleges, Universities, and Professional Schools',
    parentId: '6113',
  },
  {
    id: '61141',
    name: 'Business and Secretarial Schools',
    parentId: '6114',
  },
  {
    id: '61142',
    name: 'Computer Training',
    parentId: '6114',
  },
  {
    id: '61143',
    name: 'Professional and Management Development Training',
    parentId: '6114',
  },
  {
    id: '61151',
    name: 'Technical and Trade Schools',
    parentId: '6115',
  },
  {
    id: '61161',
    name: 'Fine Arts Schools',
    parentId: '6116',
  },
  {
    id: '61162',
    name: 'Sports and Recreation Instruction',
    parentId: '6116',
  },
  {
    id: '61163',
    name: 'Language Schools',
    parentId: '6116',
  },
  {
    id: '61169',
    name: 'All Other Schools and Instruction',
    parentId: '6116',
  },
  {
    id: '61171',
    name: 'Educational Support Services',
    parentId: '6117',
  },
  {
    id: '62111',
    name: 'Offices of Physicians',
    parentId: '6211',
  },
  {
    id: '62121',
    name: 'Offices of Dentists',
    parentId: '6212',
  },
  {
    id: '62131',
    name: 'Offices of Chiropractors',
    parentId: '6213',
  },
  {
    id: '62132',
    name: 'Offices of Optometrists',
    parentId: '6213',
  },
  {
    id: '62133',
    name: 'Offices of Mental Health Practitioners (except Physicians)',
    parentId: '6213',
  },
  {
    id: '62134',
    name: 'Offices of Physical, Occupational and Speech Therapists, and Audiologists',
    parentId: '6213',
  },
  {
    id: '62139',
    name: 'Offices of All Other Health Practitioners',
    parentId: '6213',
  },
  {
    id: '62141',
    name: 'Family Planning Centers',
    parentId: '6214',
  },
  {
    id: '62142',
    name: 'Outpatient Mental Health and Substance Abuse Centers',
    parentId: '6214',
  },
  {
    id: '62149',
    name: 'Other Outpatient Care Centers',
    parentId: '6214',
  },
  {
    id: '62151',
    name: 'Medical and Diagnostic Laboratories',
    parentId: '6215',
  },
  {
    id: '62161',
    name: 'Home Health Care Services',
    parentId: '6216',
  },
  {
    id: '62191',
    name: 'Ambulance Services',
    parentId: '6219',
  },
  {
    id: '62199',
    name: 'All Other Ambulatory Health Care Services',
    parentId: '6219',
  },
  {
    id: '62211',
    name: 'General Medical and Surgical Hospitals',
    parentId: '6221',
  },
  {
    id: '62221',
    name: 'Psychiatric and Substance Abuse Hospitals',
    parentId: '6222',
  },
  {
    id: '62231',
    name: 'Specialty (except Psychiatric and Substance Abuse) Hospitals',
    parentId: '6223',
  },
  {
    id: '62311',
    name: 'Nursing Care Facilities (Skilled Nursing Facilities)',
    parentId: '6231',
  },
  {
    id: '62321',
    name: 'Residential Intellectual and Developmental Disability Facilities',
    parentId: '6232',
  },
  {
    id: '62322',
    name: 'Residential Mental Health and Substance Abuse Facilities',
    parentId: '6232',
  },
  {
    id: '62331',
    name: 'Continuing Care Retirement Communities and Assisted Living Facilities for the Elderly',
    parentId: '6233',
  },
  {
    id: '62399',
    name: 'Other Residential Care Facilities',
    parentId: '6239',
  },
  {
    id: '62411',
    name: 'Child and Youth Services',
    parentId: '6241',
  },
  {
    id: '62412',
    name: 'Services for the Elderly and Persons with Disabilities',
    parentId: '6241',
  },
  {
    id: '62419',
    name: 'Other Individual and Family Services',
    parentId: '6241',
  },
  {
    id: '62421',
    name: 'Community Food Services',
    parentId: '6242',
  },
  {
    id: '62422',
    name: 'Community Housing Services',
    parentId: '6242',
  },
  {
    id: '62423',
    name: 'Emergency and Other Relief Services',
    parentId: '6242',
  },
  {
    id: '62431',
    name: 'Vocational Rehabilitation Services',
    parentId: '6243',
  },
  {
    id: '62441',
    name: 'Child Care Services',
    parentId: '6244',
  },
  {
    id: '71111',
    name: 'Theater Companies and Dinner Theaters',
    parentId: '7111',
  },
  {
    id: '71112',
    name: 'Dance Companies',
    parentId: '7111',
  },
  {
    id: '71113',
    name: 'Musical Groups and Artists',
    parentId: '7111',
  },
  {
    id: '71119',
    name: 'Other Performing Arts Companies',
    parentId: '7111',
  },
  {
    id: '71121',
    name: 'Spectator Sports',
    parentId: '7112',
  },
  {
    id: '71131',
    name: 'Promoters of Performing Arts, Sports, and Similar Events with Facilities',
    parentId: '7113',
  },
  {
    id: '71132',
    name: 'Promoters of Performing Arts, Sports, and Similar Events without Facilities',
    parentId: '7113',
  },
  {
    id: '71141',
    name: 'Agents and Managers for Artists, Athletes, Entertainers, and Other Public Figures',
    parentId: '7114',
  },
  {
    id: '71151',
    name: 'Independent Artists, Writers, and Performers',
    parentId: '7115',
  },
  {
    id: '71211',
    name: 'Museums',
    parentId: '7121',
  },
  {
    id: '71212',
    name: 'Historical Sites',
    parentId: '7121',
  },
  {
    id: '71213',
    name: 'Zoos and Botanical Gardens',
    parentId: '7121',
  },
  {
    id: '71219',
    name: 'Nature Parks and Other Similar Institutions',
    parentId: '7121',
  },
  {
    id: '71311',
    name: 'Amusement and Theme Parks',
    parentId: '7131',
  },
  {
    id: '71312',
    name: 'Amusement Arcades',
    parentId: '7131',
  },
  {
    id: '71321',
    name: 'Casinos (except Casino Hotels)',
    parentId: '7132',
  },
  {
    id: '71329',
    name: 'Other Gambling Industries',
    parentId: '7132',
  },
  {
    id: '71391',
    name: 'Golf Courses and Country Clubs',
    parentId: '7139',
  },
  {
    id: '71392',
    name: 'Skiing Facilities',
    parentId: '7139',
  },
  {
    id: '71393',
    name: 'Marinas',
    parentId: '7139',
  },
  {
    id: '71394',
    name: 'Fitness and Recreational Sports Centers',
    parentId: '7139',
  },
  {
    id: '71395',
    name: 'Bowling Centers',
    parentId: '7139',
  },
  {
    id: '71399',
    name: 'All Other Amusement and Recreation Industries',
    parentId: '7139',
  },
  {
    id: '72111',
    name: 'Hotels (except Casino Hotels) and Motels',
    parentId: '7211',
  },
  {
    id: '72112',
    name: 'Casino Hotels',
    parentId: '7211',
  },
  {
    id: '72119',
    name: 'Other Traveler Accommodation',
    parentId: '7211',
  },
  {
    id: '72121',
    name: 'RV (Recreational Vehicle) Parks and Recreational Camps',
    parentId: '7212',
  },
  {
    id: '72131',
    name: "Rooming and Boarding Houses, Dormitories, and Workers' Camps",
    parentId: '7213',
  },
  {
    id: '72231',
    name: 'Food Service Contractors',
    parentId: '7223',
  },
  {
    id: '72232',
    name: 'Caterers',
    parentId: '7223',
  },
  {
    id: '72233',
    name: 'Mobile Food Services',
    parentId: '7223',
  },
  {
    id: '72241',
    name: 'Drinking Places (Alcoholic Beverages)',
    parentId: '7224',
  },
  {
    id: '72251',
    name: 'Restaurants and Other Eating Places',
    parentId: '7225',
  },
  {
    id: '81111',
    name: 'Automotive Mechanical and Electrical Repair and Maintenance',
    parentId: '8111',
  },
  {
    id: '81112',
    name: 'Automotive Body, Paint, Interior, and Glass Repair',
    parentId: '8111',
  },
  {
    id: '81119',
    name: 'Other Automotive Repair and Maintenance',
    parentId: '8111',
  },
  {
    id: '81121',
    name: 'Electronic and Precision Equipment Repair and Maintenance',
    parentId: '8112',
  },
  {
    id: '81131',
    name: 'Commercial and Industrial Machinery and Equipment (except Automotive and Electronic) Repair and Maintenance',
    parentId: '8113',
  },
  {
    id: '81141',
    name: 'Home and Garden Equipment and Appliance Repair and Maintenance',
    parentId: '8114',
  },
  {
    id: '81142',
    name: 'Reupholstery and Furniture Repair',
    parentId: '8114',
  },
  {
    id: '81143',
    name: 'Footwear and Leather Goods Repair',
    parentId: '8114',
  },
  {
    id: '81149',
    name: 'Other Personal and Household Goods Repair and Maintenance',
    parentId: '8114',
  },
  {
    id: '81211',
    name: 'Hair, Nail, and Skin Care Services ',
    parentId: '8121',
  },
  {
    id: '81219',
    name: 'Other Personal Care Services ',
    parentId: '8121',
  },
  {
    id: '81221',
    name: 'Funeral Homes and Funeral Services ',
    parentId: '8122',
  },
  {
    id: '81222',
    name: 'Cemeteries and Crematories ',
    parentId: '8122',
  },
  {
    id: '81231',
    name: 'Coin-Operated Laundries and Drycleaners ',
    parentId: '8123',
  },
  {
    id: '81232',
    name: 'Drycleaning and Laundry Services (except Coin-Operated) ',
    parentId: '8123',
  },
  {
    id: '81233',
    name: 'Linen and Uniform Supply ',
    parentId: '8123',
  },
  {
    id: '81291',
    name: 'Pet Care (except Veterinary) Services ',
    parentId: '8129',
  },
  {
    id: '81292',
    name: 'Photofinishing ',
    parentId: '8129',
  },
  {
    id: '81293',
    name: 'Parking Lots and Garages ',
    parentId: '8129',
  },
  {
    id: '81299',
    name: 'All Other Personal Services ',
    parentId: '8129',
  },
  {
    id: '81311',
    name: 'Religious Organizations ',
    parentId: '8131',
  },
  {
    id: '81321',
    name: 'Grantmaking and Giving Services ',
    parentId: '8132',
  },
  {
    id: '81331',
    name: 'Social Advocacy Organizations ',
    parentId: '8133',
  },
  {
    id: '81341',
    name: 'Civic and Social Organizations ',
    parentId: '8134',
  },
  {
    id: '81391',
    name: 'Business Associations ',
    parentId: '8139',
  },
  {
    id: '81392',
    name: 'Professional Organizations ',
    parentId: '8139',
  },
  {
    id: '81393',
    name: 'Labor Unions and Similar Labor Organizations ',
    parentId: '8139',
  },
  {
    id: '81394',
    name: 'Political Organizations ',
    parentId: '8139',
  },
  {
    id: '81399',
    name: 'Other Similar Organizations (except Business, Professional, Labor, and Political Organizations) ',
    parentId: '8139',
  },
  {
    id: '81411',
    name: 'Private Households',
    parentId: '8141',
  },
  {
    id: '92111',
    name: 'Executive Offices ',
    parentId: '9211',
  },
  {
    id: '92112',
    name: 'Legislative Bodies ',
    parentId: '9211',
  },
  {
    id: '92113',
    name: 'Public Finance Activities ',
    parentId: '9211',
  },
  {
    id: '92114',
    name: 'Executive and Legislative Offices, Combined ',
    parentId: '9211',
  },
  {
    id: '92115',
    name: 'American Indian and Alaska Native Tribal Governments ',
    parentId: '9211',
  },
  {
    id: '92119',
    name: 'Other General Government Support ',
    parentId: '9211',
  },
  {
    id: '92211',
    name: 'Courts ',
    parentId: '9221',
  },
  {
    id: '92212',
    name: 'Police Protection ',
    parentId: '9221',
  },
  {
    id: '92213',
    name: 'Legal Counsel and Prosecution ',
    parentId: '9221',
  },
  {
    id: '92214',
    name: 'Correctional Institutions ',
    parentId: '9221',
  },
  {
    id: '92215',
    name: 'Parole Offices and Probation Offices ',
    parentId: '9221',
  },
  {
    id: '92216',
    name: 'Fire Protection ',
    parentId: '9221',
  },
  {
    id: '92219',
    name: 'Other Justice, Public Order, and Safety Activities ',
    parentId: '9221',
  },
  {
    id: '92311',
    name: 'Administration of Education Programs ',
    parentId: '9231',
  },
  {
    id: '92312',
    name: 'Administration of Public Health Programs ',
    parentId: '9231',
  },
  {
    id: '92313',
    name: "Administration of Human Resource Programs (except Education, Public Health, and Veterans' Affairs Programs) ",
    parentId: '9231',
  },
  {
    id: '92314',
    name: "Administration of Veterans' Affairs ",
    parentId: '9231',
  },
  {
    id: '92411',
    name: 'Administration of Air and Water Resource and Solid Waste Management Programs ',
    parentId: '9241',
  },
  {
    id: '92412',
    name: 'Administration of Conservation Programs ',
    parentId: '9241',
  },
  {
    id: '92511',
    name: 'Administration of Housing Programs ',
    parentId: '9251',
  },
  {
    id: '92512',
    name: 'Administration of Urban Planning and Community and Rural Development ',
    parentId: '9251',
  },
  {
    id: '92611',
    name: 'Administration of General Economic Programs ',
    parentId: '9261',
  },
  {
    id: '92612',
    name: 'Regulation and Administration of Transportation Programs ',
    parentId: '9261',
  },
  {
    id: '92613',
    name: 'Regulation and Administration of Communications, Electric, Gas, and Other Utilities ',
    parentId: '9261',
  },
  {
    id: '92614',
    name: 'Regulation of Agricultural Marketing and Commodities ',
    parentId: '9261',
  },
  {
    id: '92615',
    name: 'Regulation, Licensing, and Inspection of Miscellaneous Commercial Sectors ',
    parentId: '9261',
  },
  {
    id: '92711',
    name: 'Space Research and Technology ',
    parentId: '9271',
  },
  {
    id: '92811',
    name: 'National Security ',
    parentId: '9281',
  },
  {
    id: '92812',
    name: 'International Affairs ',
    parentId: '9281',
  },
  {
    id: '111110',
    name: 'Soybean Farming',
    parentId: '11111',
  },
  {
    id: '111120',
    name: 'Oilseed (except Soybean) Farming ',
    parentId: '11112',
  },
  {
    id: '111130',
    name: 'Dry Pea and Bean Farming ',
    parentId: '11113',
  },
  {
    id: '111140',
    name: 'Wheat Farming',
    parentId: '11114',
  },
  {
    id: '111150',
    name: 'Corn Farming ',
    parentId: '11115',
  },
  {
    id: '111160',
    name: 'Rice Farming',
    parentId: '11116',
  },
  {
    id: '111191',
    name: 'Oilseed and Grain Combination Farming ',
    parentId: '11119',
  },
  {
    id: '111199',
    name: 'All Other Grain Farming ',
    parentId: '11119',
  },
  {
    id: '111211',
    name: 'Potato Farming ',
    parentId: '11121',
  },
  {
    id: '111219',
    name: 'Other Vegetable (except Potato) and Melon Farming ',
    parentId: '11121',
  },
  {
    id: '111310',
    name: 'Orange Groves',
    parentId: '11131',
  },
  {
    id: '111320',
    name: 'Citrus (except Orange) Groves ',
    parentId: '11132',
  },
  {
    id: '111331',
    name: 'Apple Orchards ',
    parentId: '11133',
  },
  {
    id: '111332',
    name: 'Grape Vineyards ',
    parentId: '11133',
  },
  {
    id: '111333',
    name: 'Strawberry Farming ',
    parentId: '11133',
  },
  {
    id: '111334',
    name: 'Berry (except Strawberry) Farming ',
    parentId: '11133',
  },
  {
    id: '111335',
    name: 'Tree Nut Farming ',
    parentId: '11133',
  },
  {
    id: '111336',
    name: 'Fruit and Tree Nut Combination Farming ',
    parentId: '11133',
  },
  {
    id: '111339',
    name: 'Other Noncitrus Fruit Farming ',
    parentId: '11133',
  },
  {
    id: '111411',
    name: 'Mushroom Production ',
    parentId: '11141',
  },
  {
    id: '111419',
    name: 'Other Food Crops Grown Under Cover ',
    parentId: '11141',
  },
  {
    id: '111421',
    name: 'Nursery and Tree Production ',
    parentId: '11142',
  },
  {
    id: '111422',
    name: 'Floriculture Production ',
    parentId: '11142',
  },
  {
    id: '111910',
    name: 'Tobacco Farming',
    parentId: '11191',
  },
  {
    id: '111920',
    name: 'Cotton Farming',
    parentId: '11192',
  },
  {
    id: '111930',
    name: 'Sugarcane Farming',
    parentId: '11193',
  },
  {
    id: '111940',
    name: 'Hay Farming ',
    parentId: '11194',
  },
  {
    id: '111991',
    name: 'Sugar Beet Farming ',
    parentId: '11199',
  },
  {
    id: '111992',
    name: 'Peanut Farming ',
    parentId: '11199',
  },
  {
    id: '111998',
    name: 'All Other Miscellaneous Crop Farming ',
    parentId: '11199',
  },
  {
    id: '112111',
    name: 'Beef Cattle Ranching and Farming ',
    parentId: '11211',
  },
  {
    id: '112112',
    name: 'Cattle Feedlots ',
    parentId: '11211',
  },
  {
    id: '112120',
    name: 'Dairy Cattle and Milk Production',
    parentId: '11212',
  },
  {
    id: '112130',
    name: 'Dual-Purpose Cattle Ranching and Farming ',
    parentId: '11213',
  },
  {
    id: '112210',
    name: 'Hog and Pig Farming ',
    parentId: '11221',
  },
  {
    id: '112310',
    name: 'Chicken Egg Production ',
    parentId: '11231',
  },
  {
    id: '112320',
    name: 'Broilers and Other Meat Type Chicken Production ',
    parentId: '11232',
  },
  {
    id: '112330',
    name: 'Turkey Production',
    parentId: '11233',
  },
  {
    id: '112340',
    name: 'Poultry Hatcheries',
    parentId: '11234',
  },
  {
    id: '112390',
    name: 'Other Poultry Production ',
    parentId: '11239',
  },
  {
    id: '112410',
    name: 'Sheep Farming',
    parentId: '11241',
  },
  {
    id: '112420',
    name: 'Goat Farming',
    parentId: '11242',
  },
  {
    id: '112511',
    name: 'Finfish Farming and Fish Hatcheries ',
    parentId: '11251',
  },
  {
    id: '112512',
    name: 'Shellfish Farming ',
    parentId: '11251',
  },
  {
    id: '112519',
    name: 'Other Aquaculture ',
    parentId: '11251',
  },
  {
    id: '112910',
    name: 'Apiculture',
    parentId: '11291',
  },
  {
    id: '112920',
    name: 'Horses and Other Equine Production',
    parentId: '11292',
  },
  {
    id: '112930',
    name: 'Fur-Bearing Animal and Rabbit Production',
    parentId: '11293',
  },
  {
    id: '112990',
    name: 'All Other Animal Production ',
    parentId: '11299',
  },
  {
    id: '113110',
    name: 'Timber Tract Operations',
    parentId: '11311',
  },
  {
    id: '113210',
    name: 'Forest Nurseries and Gathering of Forest Products ',
    parentId: '11321',
  },
  {
    id: '113310',
    name: 'Logging ',
    parentId: '11331',
  },
  {
    id: '114111',
    name: 'Finfish Fishing ',
    parentId: '11411',
  },
  {
    id: '114112',
    name: 'Shellfish Fishing ',
    parentId: '11411',
  },
  {
    id: '114119',
    name: 'Other Marine Fishing ',
    parentId: '11411',
  },
  {
    id: '114210',
    name: 'Hunting and Trapping',
    parentId: '11421',
  },
  {
    id: '115111',
    name: 'Cotton Ginning ',
    parentId: '11511',
  },
  {
    id: '115112',
    name: 'Soil Preparation, Planting, and Cultivating ',
    parentId: '11511',
  },
  {
    id: '115113',
    name: 'Crop Harvesting, Primarily by Machine ',
    parentId: '11511',
  },
  {
    id: '115114',
    name: 'Postharvest Crop Activities (except Cotton Ginning) ',
    parentId: '11511',
  },
  {
    id: '115115',
    name: 'Farm Labor Contractors and Crew Leaders ',
    parentId: '11511',
  },
  {
    id: '115116',
    name: 'Farm Management Services ',
    parentId: '11511',
  },
  {
    id: '115210',
    name: 'Support Activities for Animal Production',
    parentId: '11521',
  },
  {
    id: '115310',
    name: 'Support Activities for Forestry',
    parentId: '11531',
  },
  {
    id: '211120',
    name: 'Crude Petroleum Extraction ',
    parentId: '21112',
  },
  {
    id: '211130',
    name: 'Natural Gas Extraction ',
    parentId: '21113',
  },
  {
    id: '212114',
    name: 'Surface Coal Mining ',
    parentId: '21211',
  },
  {
    id: '212115',
    name: 'Underground Coal Mining ',
    parentId: '21211',
  },
  {
    id: '212210',
    name: 'Iron Ore Mining',
    parentId: '21221',
  },
  {
    id: '212220',
    name: 'Gold Ore and Silver Ore Mining ',
    parentId: '21222',
  },
  {
    id: '212230',
    name: 'Copper, Nickel, Lead, and Zinc Mining ',
    parentId: '21223',
  },
  {
    id: '212290',
    name: 'Other Metal Ore Mining ',
    parentId: '21229',
  },
  {
    id: '212311',
    name: 'Dimension Stone Mining and Quarrying ',
    parentId: '21231',
  },
  {
    id: '212312',
    name: 'Crushed and Broken Limestone Mining and Quarrying ',
    parentId: '21231',
  },
  {
    id: '212313',
    name: 'Crushed and Broken Granite Mining and Quarrying ',
    parentId: '21231',
  },
  {
    id: '212319',
    name: 'Other Crushed and Broken Stone Mining and Quarrying ',
    parentId: '21231',
  },
  {
    id: '212321',
    name: 'Construction Sand and Gravel Mining ',
    parentId: '21232',
  },
  {
    id: '212322',
    name: 'Industrial Sand Mining ',
    parentId: '21232',
  },
  {
    id: '212323',
    name: 'Kaolin, Clay, and Ceramic and Refractory Minerals Mining ',
    parentId: '21232',
  },
  {
    id: '212390',
    name: 'Other Nonmetallic Mineral Mining and Quarrying ',
    parentId: '21239',
  },
  {
    id: '213111',
    name: 'Drilling Oil and Gas Wells',
    parentId: '21311',
  },
  {
    id: '213112',
    name: 'Support Activities for Oil and Gas Operations ',
    parentId: '21311',
  },
  {
    id: '213113',
    name: 'Support Activities for Coal Mining ',
    parentId: '21311',
  },
  {
    id: '213114',
    name: 'Support Activities for Metal Mining ',
    parentId: '21311',
  },
  {
    id: '213115',
    name: 'Support Activities for Nonmetallic Minerals (except Fuels) Mining ',
    parentId: '21311',
  },
  {
    id: '221111',
    name: 'Hydroelectric Power Generation ',
    parentId: '22111',
  },
  {
    id: '221112',
    name: 'Fossil Fuel Electric Power Generation ',
    parentId: '22111',
  },
  {
    id: '221113',
    name: 'Nuclear Electric Power Generation ',
    parentId: '22111',
  },
  {
    id: '221114',
    name: 'Solar Electric Power Generation ',
    parentId: '22111',
  },
  {
    id: '221115',
    name: 'Wind Electric Power Generation ',
    parentId: '22111',
  },
  {
    id: '221116',
    name: 'Geothermal Electric Power Generation ',
    parentId: '22111',
  },
  {
    id: '221117',
    name: 'Biomass Electric Power Generation ',
    parentId: '22111',
  },
  {
    id: '221118',
    name: 'Other Electric Power Generation ',
    parentId: '22111',
  },
  {
    id: '221121',
    name: 'Electric Bulk Power Transmission and Control ',
    parentId: '22112',
  },
  {
    id: '221122',
    name: 'Electric Power Distribution ',
    parentId: '22112',
  },
  {
    id: '221210',
    name: 'Natural Gas Distribution ',
    parentId: '22121',
  },
  {
    id: '221310',
    name: 'Water Supply and Irrigation Systems ',
    parentId: '22131',
  },
  {
    id: '221320',
    name: 'Sewage Treatment Facilities ',
    parentId: '22132',
  },
  {
    id: '221330',
    name: 'Steam and Air-Conditioning Supply ',
    parentId: '22133',
  },
  {
    id: '236115',
    name: 'New Single-Family Housing Construction (except For-Sale Builders) ',
    parentId: '23611',
  },
  {
    id: '236116',
    name: 'New Multifamily Housing Construction (except For-Sale Builders) ',
    parentId: '23611',
  },
  {
    id: '236117',
    name: 'New Housing For-Sale Builders ',
    parentId: '23611',
  },
  {
    id: '236118',
    name: 'Residential Remodelers ',
    parentId: '23611',
  },
  {
    id: '236210',
    name: 'Industrial Building Construction ',
    parentId: '23621',
  },
  {
    id: '236220',
    name: 'Commercial and Institutional Building Construction ',
    parentId: '23622',
  },
  {
    id: '237110',
    name: 'Water and Sewer Line and Related Structures Construction ',
    parentId: '23711',
  },
  {
    id: '237120',
    name: 'Oil and Gas Pipeline and Related Structures Construction ',
    parentId: '23712',
  },
  {
    id: '237130',
    name: 'Power and Communication Line and Related Structures Construction ',
    parentId: '23713',
  },
  {
    id: '237210',
    name: 'Land Subdivision ',
    parentId: '23721',
  },
  {
    id: '237310',
    name: 'Highway, Street, and Bridge Construction ',
    parentId: '23731',
  },
  {
    id: '237990',
    name: 'Other Heavy and Civil Engineering Construction ',
    parentId: '23799',
  },
  {
    id: '238110',
    name: 'Poured Concrete Foundation and Structure Contractors ',
    parentId: '23811',
  },
  {
    id: '238120',
    name: 'Structural Steel and Precast Concrete Contractors ',
    parentId: '23812',
  },
  {
    id: '238130',
    name: 'Framing Contractors ',
    parentId: '23813',
  },
  {
    id: '238140',
    name: 'Masonry Contractors ',
    parentId: '23814',
  },
  {
    id: '238150',
    name: 'Glass and Glazing Contractors ',
    parentId: '23815',
  },
  {
    id: '238160',
    name: 'Roofing Contractors ',
    parentId: '23816',
  },
  {
    id: '238170',
    name: 'Siding Contractors ',
    parentId: '23817',
  },
  {
    id: '238190',
    name: 'Other Foundation, Structure, and Building Exterior Contractors ',
    parentId: '23819',
  },
  {
    id: '238210',
    name: 'Electrical Contractors and Other Wiring Installation Contractors',
    parentId: '23821',
  },
  {
    id: '238220',
    name: 'Plumbing, Heating, and Air-Conditioning Contractors ',
    parentId: '23822',
  },
  {
    id: '238290',
    name: 'Other Building Equipment Contractors ',
    parentId: '23829',
  },
  {
    id: '238310',
    name: 'Drywall and Insulation Contractors ',
    parentId: '23831',
  },
  {
    id: '238320',
    name: 'Painting and Wall Covering Contractors',
    parentId: '23832',
  },
  {
    id: '238330',
    name: 'Flooring Contractors',
    parentId: '23833',
  },
  {
    id: '238340',
    name: 'Tile and Terrazzo Contractors',
    parentId: '23834',
  },
  {
    id: '238350',
    name: 'Finish Carpentry Contractors',
    parentId: '23835',
  },
  {
    id: '238390',
    name: 'Other Building Finishing Contractors',
    parentId: '23839',
  },
  {
    id: '238910',
    name: 'Site Preparation Contractors',
    parentId: '23891',
  },
  {
    id: '238990',
    name: 'All Other Specialty Trade Contractors',
    parentId: '23899',
  },
  {
    id: '311111',
    name: 'Dog and Cat Food Manufacturing ',
    parentId: '31111',
  },
  {
    id: '311119',
    name: 'Other Animal Food Manufacturing ',
    parentId: '31111',
  },
  {
    id: '311211',
    name: 'Flour Milling ',
    parentId: '31121',
  },
  {
    id: '311212',
    name: 'Rice Milling ',
    parentId: '31121',
  },
  {
    id: '311213',
    name: 'Malt Manufacturing ',
    parentId: '31121',
  },
  {
    id: '311221',
    name: 'Wet Corn Milling and Starch Manufacturing ',
    parentId: '31122',
  },
  {
    id: '311224',
    name: 'Soybean and Other Oilseed Processing ',
    parentId: '31122',
  },
  {
    id: '311225',
    name: 'Fats and Oils Refining and Blending ',
    parentId: '31122',
  },
  {
    id: '311230',
    name: 'Breakfast Cereal Manufacturing',
    parentId: '31123',
  },
  {
    id: '311313',
    name: 'Beet Sugar Manufacturing ',
    parentId: '31131',
  },
  {
    id: '311314',
    name: 'Cane Sugar Manufacturing ',
    parentId: '31131',
  },
  {
    id: '311340',
    name: 'Nonchocolate Confectionery Manufacturing',
    parentId: '31134',
  },
  {
    id: '311351',
    name: 'Chocolate and Confectionery Manufacturing from Cacao Beans ',
    parentId: '31135',
  },
  {
    id: '311352',
    name: 'Confectionery Manufacturing from Purchased Chocolate ',
    parentId: '31135',
  },
  {
    id: '311411',
    name: 'Frozen Fruit, Juice, and Vegetable Manufacturing ',
    parentId: '31141',
  },
  {
    id: '311412',
    name: 'Frozen Specialty Food Manufacturing ',
    parentId: '31141',
  },
  {
    id: '311421',
    name: 'Fruit and Vegetable Canning ',
    parentId: '31142',
  },
  {
    id: '311422',
    name: 'Specialty Canning ',
    parentId: '31142',
  },
  {
    id: '311423',
    name: 'Dried and Dehydrated Food Manufacturing ',
    parentId: '31142',
  },
  {
    id: '311511',
    name: 'Fluid Milk Manufacturing ',
    parentId: '31151',
  },
  {
    id: '311512',
    name: 'Creamery Butter Manufacturing ',
    parentId: '31151',
  },
  {
    id: '311513',
    name: 'Cheese Manufacturing ',
    parentId: '31151',
  },
  {
    id: '311514',
    name: 'Dry, Condensed, and Evaporated Dairy Product Manufacturing ',
    parentId: '31151',
  },
  {
    id: '311520',
    name: 'Ice Cream and Frozen Dessert Manufacturing',
    parentId: '31152',
  },
  {
    id: '311611',
    name: 'Animal (except Poultry) Slaughtering ',
    parentId: '31161',
  },
  {
    id: '311612',
    name: 'Meat Processed from Carcasses ',
    parentId: '31161',
  },
  {
    id: '311613',
    name: 'Rendering and Meat Byproduct Processing ',
    parentId: '31161',
  },
  {
    id: '311615',
    name: 'Poultry Processing ',
    parentId: '31161',
  },
  {
    id: '311710',
    name: 'Seafood Product Preparation and Packaging',
    parentId: '31171',
  },
  {
    id: '311811',
    name: 'Retail Bakeries ',
    parentId: '31181',
  },
  {
    id: '311812',
    name: 'Commercial Bakeries ',
    parentId: '31181',
  },
  {
    id: '311813',
    name: 'Frozen Cakes, Pies, and Other Pastries Manufacturing ',
    parentId: '31181',
  },
  {
    id: '311821',
    name: 'Cookie and Cracker Manufacturing ',
    parentId: '31182',
  },
  {
    id: '311824',
    name: 'Dry Pasta, Dough, and Flour Mixes Manufacturing from Purchased Flour ',
    parentId: '31182',
  },
  {
    id: '311830',
    name: 'Tortilla Manufacturing',
    parentId: '31183',
  },
  {
    id: '311911',
    name: 'Roasted Nuts and Peanut Butter Manufacturing ',
    parentId: '31191',
  },
  {
    id: '311919',
    name: 'Other Snack Food Manufacturing ',
    parentId: '31191',
  },
  {
    id: '311920',
    name: 'Coffee and Tea Manufacturing ',
    parentId: '31192',
  },
  {
    id: '311930',
    name: 'Flavoring Syrup and Concentrate Manufacturing',
    parentId: '31193',
  },
  {
    id: '311941',
    name: 'Mayonnaise, Dressing, and Other Prepared Sauce Manufacturing ',
    parentId: '31194',
  },
  {
    id: '311942',
    name: 'Spice and Extract Manufacturing ',
    parentId: '31194',
  },
  {
    id: '311991',
    name: 'Perishable Prepared Food Manufacturing ',
    parentId: '31199',
  },
  {
    id: '311999',
    name: 'All Other Miscellaneous Food Manufacturing ',
    parentId: '31199',
  },
  {
    id: '312111',
    name: 'Soft Drink Manufacturing ',
    parentId: '31211',
  },
  {
    id: '312112',
    name: 'Bottled Water Manufacturing ',
    parentId: '31211',
  },
  {
    id: '312113',
    name: 'Ice Manufacturing ',
    parentId: '31211',
  },
  {
    id: '312120',
    name: 'Breweries',
    parentId: '31212',
  },
  {
    id: '312130',
    name: 'Wineries ',
    parentId: '31213',
  },
  {
    id: '312140',
    name: 'Distilleries ',
    parentId: '31214',
  },
  {
    id: '312230',
    name: 'Tobacco Manufacturing ',
    parentId: '31223',
  },
  {
    id: '313110',
    name: 'Fiber, Yarn, and Thread Mills ',
    parentId: '31311',
  },
  {
    id: '313210',
    name: 'Broadwoven Fabric Mills',
    parentId: '31321',
  },
  {
    id: '313220',
    name: 'Narrow Fabric Mills and Schiffli Machine Embroidery',
    parentId: '31322',
  },
  {
    id: '313230',
    name: 'Nonwoven Fabric Mills',
    parentId: '31323',
  },
  {
    id: '313240',
    name: 'Knit Fabric Mills',
    parentId: '31324',
  },
  {
    id: '313310',
    name: 'Textile and Fabric Finishing Mills ',
    parentId: '31331',
  },
  {
    id: '313320',
    name: 'Fabric Coating Mills',
    parentId: '31332',
  },
  {
    id: '314110',
    name: 'Carpet and Rug Mills',
    parentId: '31411',
  },
  {
    id: '314120',
    name: 'Curtain and Linen Mills',
    parentId: '31412',
  },
  {
    id: '314910',
    name: 'Textile Bag and Canvas Mills ',
    parentId: '31491',
  },
  {
    id: '314994',
    name: 'Rope, Cordage, Twine, Tire Cord, and Tire Fabric Mills ',
    parentId: '31499',
  },
  {
    id: '314999',
    name: 'All Other Miscellaneous Textile Product Mills ',
    parentId: '31499',
  },
  {
    id: '315120',
    name: 'Apparel Knitting Mills',
    parentId: '31512',
  },
  {
    id: '315210',
    name: 'Cut and Sew Apparel Contractors ',
    parentId: '31521',
  },
  {
    id: '315250',
    name: 'Cut and Sew Apparel Manufacturing (except Contractors) ',
    parentId: '31525',
  },
  {
    id: '315990',
    name: 'Apparel Accessories and Other Apparel Manufacturing ',
    parentId: '31599',
  },
  {
    id: '316110',
    name: 'Leather and Hide Tanning and Finishing',
    parentId: '31611',
  },
  {
    id: '316210',
    name: 'Footwear Manufacturing ',
    parentId: '31621',
  },
  {
    id: '316990',
    name: 'Other Leather and Allied Product Manufacturing ',
    parentId: '31699',
  },
  {
    id: '321113',
    name: 'Sawmills ',
    parentId: '32111',
  },
  {
    id: '321114',
    name: 'Wood Preservation ',
    parentId: '32111',
  },
  {
    id: '321211',
    name: 'Hardwood Veneer and Plywood Manufacturing ',
    parentId: '32121',
  },
  {
    id: '321212',
    name: 'Softwood Veneer and Plywood Manufacturing ',
    parentId: '32121',
  },
  {
    id: '321215',
    name: 'Engineered Wood Member Manufacturing ',
    parentId: '32121',
  },
  {
    id: '321219',
    name: 'Reconstituted Wood Product Manufacturing ',
    parentId: '32121',
  },
  {
    id: '321911',
    name: 'Wood Window and Door Manufacturing ',
    parentId: '32191',
  },
  {
    id: '321912',
    name: 'Cut Stock, Resawing Lumber, and Planing ',
    parentId: '32191',
  },
  {
    id: '321918',
    name: 'Other Millwork (including Flooring) ',
    parentId: '32191',
  },
  {
    id: '321920',
    name: 'Wood Container and Pallet Manufacturing',
    parentId: '32192',
  },
  {
    id: '321991',
    name: 'Manufactured Home (Mobile Home) Manufacturing ',
    parentId: '32199',
  },
  {
    id: '321992',
    name: 'Prefabricated Wood Building Manufacturing ',
    parentId: '32199',
  },
  {
    id: '321999',
    name: 'All Other Miscellaneous Wood Product Manufacturing ',
    parentId: '32199',
  },
  {
    id: '322110',
    name: 'Pulp Mills ',
    parentId: '32211',
  },
  {
    id: '322120',
    name: 'Paper Mills ',
    parentId: '32212',
  },
  {
    id: '322130',
    name: 'Paperboard Mills ',
    parentId: '32213',
  },
  {
    id: '322211',
    name: 'Corrugated and Solid Fiber Box Manufacturing ',
    parentId: '32221',
  },
  {
    id: '322212',
    name: 'Folding Paperboard Box Manufacturing ',
    parentId: '32221',
  },
  {
    id: '322219',
    name: 'Other Paperboard Container Manufacturing ',
    parentId: '32221',
  },
  {
    id: '322220',
    name: 'Paper Bag and Coated and Treated Paper Manufacturing',
    parentId: '32222',
  },
  {
    id: '322230',
    name: 'Stationery Product Manufacturing',
    parentId: '32223',
  },
  {
    id: '322291',
    name: 'Sanitary Paper Product Manufacturing ',
    parentId: '32229',
  },
  {
    id: '322299',
    name: 'All Other Converted Paper Product Manufacturing ',
    parentId: '32229',
  },
  {
    id: '323111',
    name: 'Commercial Printing (except Screen and Books) ',
    parentId: '32311',
  },
  {
    id: '323113',
    name: 'Commercial Screen Printing ',
    parentId: '32311',
  },
  {
    id: '323117',
    name: 'Books Printing ',
    parentId: '32311',
  },
  {
    id: '323120',
    name: 'Support Activities for Printing',
    parentId: '32312',
  },
  {
    id: '324110',
    name: 'Petroleum Refineries',
    parentId: '32411',
  },
  {
    id: '324121',
    name: 'Asphalt Paving Mixture and Block Manufacturing ',
    parentId: '32412',
  },
  {
    id: '324122',
    name: 'Asphalt Shingle and Coating Materials Manufacturing ',
    parentId: '32412',
  },
  {
    id: '324191',
    name: 'Petroleum Lubricating Oil and Grease Manufacturing ',
    parentId: '32419',
  },
  {
    id: '324199',
    name: 'All Other Petroleum and Coal Products Manufacturing ',
    parentId: '32419',
  },
  {
    id: '325110',
    name: 'Petrochemical Manufacturing',
    parentId: '32511',
  },
  {
    id: '325120',
    name: 'Industrial Gas Manufacturing',
    parentId: '32512',
  },
  {
    id: '325130',
    name: 'Synthetic Dye and Pigment Manufacturing',
    parentId: '32513',
  },
  {
    id: '325180',
    name: 'Other Basic Inorganic Chemical Manufacturing ',
    parentId: '32518',
  },
  {
    id: '325193',
    name: 'Ethyl Alcohol Manufacturing ',
    parentId: '32519',
  },
  {
    id: '325194',
    name: 'Cyclic Crude, Intermediate, and Gum and Wood Chemical Manufacturing ',
    parentId: '32519',
  },
  {
    id: '325199',
    name: 'All Other Basic Organic Chemical Manufacturing ',
    parentId: '32519',
  },
  {
    id: '325211',
    name: 'Plastics Material and Resin Manufacturing ',
    parentId: '32521',
  },
  {
    id: '325212',
    name: 'Synthetic Rubber Manufacturing ',
    parentId: '32521',
  },
  {
    id: '325220',
    name: 'Artificial and Synthetic Fibers and Filaments Manufacturing',
    parentId: '32522',
  },
  {
    id: '325311',
    name: 'Nitrogenous Fertilizer Manufacturing ',
    parentId: '32531',
  },
  {
    id: '325312',
    name: 'Phosphatic Fertilizer Manufacturing ',
    parentId: '32531',
  },
  {
    id: '325314',
    name: 'Fertilizer (Mixing Only) Manufacturing ',
    parentId: '32531',
  },
  {
    id: '325315',
    name: 'Compost Manufacturing',
    parentId: '32531',
  },
  {
    id: '325320',
    name: 'Pesticide and Other Agricultural Chemical Manufacturing',
    parentId: '32532',
  },
  {
    id: '325411',
    name: 'Medicinal and Botanical Manufacturing ',
    parentId: '32541',
  },
  {
    id: '325412',
    name: 'Pharmaceutical Preparation Manufacturing ',
    parentId: '32541',
  },
  {
    id: '325413',
    name: 'In-Vitro Diagnostic Substance Manufacturing ',
    parentId: '32541',
  },
  {
    id: '325414',
    name: 'Biological Product (except Diagnostic) Manufacturing ',
    parentId: '32541',
  },
  {
    id: '325510',
    name: 'Paint and Coating Manufacturing',
    parentId: '32551',
  },
  {
    id: '325520',
    name: 'Adhesive Manufacturing',
    parentId: '32552',
  },
  {
    id: '325611',
    name: 'Soap and Other Detergent Manufacturing ',
    parentId: '32561',
  },
  {
    id: '325612',
    name: 'Polish and Other Sanitation Good Manufacturing ',
    parentId: '32561',
  },
  {
    id: '325613',
    name: 'Surface Active Agent Manufacturing ',
    parentId: '32561',
  },
  {
    id: '325620',
    name: 'Toilet Preparation Manufacturing',
    parentId: '32562',
  },
  {
    id: '325910',
    name: 'Printing Ink Manufacturing',
    parentId: '32591',
  },
  {
    id: '325920',
    name: 'Explosives Manufacturing',
    parentId: '32592',
  },
  {
    id: '325991',
    name: 'Custom Compounding of Purchased Resins ',
    parentId: '32599',
  },
  {
    id: '325992',
    name: 'Photographic Film, Paper, Plate, Chemical, and Copy Toner Manufacturing ',
    parentId: '32599',
  },
  {
    id: '325998',
    name: 'All Other Miscellaneous Chemical Product and Preparation Manufacturing ',
    parentId: '32599',
  },
  {
    id: '326111',
    name: 'Plastics Bag and Pouch Manufacturing ',
    parentId: '32611',
  },
  {
    id: '326112',
    name: 'Plastics Packaging Film and Sheet (including Laminated) Manufacturing ',
    parentId: '32611',
  },
  {
    id: '326113',
    name: 'Unlaminated Plastics Film and Sheet (except Packaging) Manufacturing ',
    parentId: '32611',
  },
  {
    id: '326121',
    name: 'Unlaminated Plastics Profile Shape Manufacturing ',
    parentId: '32612',
  },
  {
    id: '326122',
    name: 'Plastics Pipe and Pipe Fitting Manufacturing ',
    parentId: '32612',
  },
  {
    id: '326130',
    name: 'Laminated Plastics Plate, Sheet (except Packaging), and Shape Manufacturing',
    parentId: '32613',
  },
  {
    id: '326140',
    name: 'Polystyrene Foam Product Manufacturing',
    parentId: '32614',
  },
  {
    id: '326150',
    name: 'Urethane and Other Foam Product (except Polystyrene) Manufacturing',
    parentId: '32615',
  },
  {
    id: '326160',
    name: 'Plastics Bottle Manufacturing',
    parentId: '32616',
  },
  {
    id: '326191',
    name: 'Plastics Plumbing Fixture Manufacturing ',
    parentId: '32619',
  },
  {
    id: '326199',
    name: 'All Other Plastics Product Manufacturing ',
    parentId: '32619',
  },
  {
    id: '326211',
    name: 'Tire Manufacturing (except Retreading) ',
    parentId: '32621',
  },
  {
    id: '326212',
    name: 'Tire Retreading ',
    parentId: '32621',
  },
  {
    id: '326220',
    name: 'Rubber and Plastics Hoses and Belting Manufacturing',
    parentId: '32622',
  },
  {
    id: '326291',
    name: 'Rubber Product Manufacturing for Mechanical Use ',
    parentId: '32629',
  },
  {
    id: '326299',
    name: 'All Other Rubber Product Manufacturing ',
    parentId: '32629',
  },
  {
    id: '327110',
    name: 'Pottery, Ceramics, and Plumbing Fixture Manufacturing ',
    parentId: '32711',
  },
  {
    id: '327120',
    name: 'Clay Building Material and Refractories Manufacturing ',
    parentId: '32712',
  },
  {
    id: '327211',
    name: 'Flat Glass Manufacturing ',
    parentId: '32721',
  },
  {
    id: '327212',
    name: 'Other Pressed and Blown Glass and Glassware Manufacturing ',
    parentId: '32721',
  },
  {
    id: '327213',
    name: 'Glass Container Manufacturing ',
    parentId: '32721',
  },
  {
    id: '327215',
    name: 'Glass Product Manufacturing Made of Purchased Glass ',
    parentId: '32721',
  },
  {
    id: '327310',
    name: 'Cement Manufacturing',
    parentId: '32731',
  },
  {
    id: '327320',
    name: 'Ready-Mix Concrete Manufacturing',
    parentId: '32732',
  },
  {
    id: '327331',
    name: 'Concrete Block and Brick Manufacturing ',
    parentId: '32733',
  },
  {
    id: '327332',
    name: 'Concrete Pipe Manufacturing ',
    parentId: '32733',
  },
  {
    id: '327390',
    name: 'Other Concrete Product Manufacturing ',
    parentId: '32739',
  },
  {
    id: '327410',
    name: 'Lime Manufacturing',
    parentId: '32741',
  },
  {
    id: '327420',
    name: 'Gypsum Product Manufacturing',
    parentId: '32742',
  },
  {
    id: '327910',
    name: 'Abrasive Product Manufacturing',
    parentId: '32791',
  },
  {
    id: '327991',
    name: 'Cut Stone and Stone Product Manufacturing ',
    parentId: '32799',
  },
  {
    id: '327992',
    name: 'Ground or Treated Mineral and Earth Manufacturing ',
    parentId: '32799',
  },
  {
    id: '327993',
    name: 'Mineral Wool Manufacturing ',
    parentId: '32799',
  },
  {
    id: '327999',
    name: 'All Other Miscellaneous Nonmetallic Mineral Product Manufacturing ',
    parentId: '32799',
  },
  {
    id: '331110',
    name: 'Iron and Steel Mills and Ferroalloy Manufacturing ',
    parentId: '33111',
  },
  {
    id: '331210',
    name: 'Iron and Steel Pipe and Tube Manufacturing from Purchased Steel',
    parentId: '33121',
  },
  {
    id: '331221',
    name: 'Rolled Steel Shape Manufacturing ',
    parentId: '33122',
  },
  {
    id: '331222',
    name: 'Steel Wire Drawing ',
    parentId: '33122',
  },
  {
    id: '331313',
    name: 'Alumina Refining and Primary Aluminum Production ',
    parentId: '33131',
  },
  {
    id: '331314',
    name: 'Secondary Smelting and Alloying of Aluminum ',
    parentId: '33131',
  },
  {
    id: '331315',
    name: 'Aluminum Sheet, Plate, and Foil Manufacturing ',
    parentId: '33131',
  },
  {
    id: '331318',
    name: 'Other Aluminum Rolling, Drawing, and Extruding ',
    parentId: '33131',
  },
  {
    id: '331410',
    name: 'Nonferrous Metal (except Aluminum) Smelting and Refining ',
    parentId: '33141',
  },
  {
    id: '331420',
    name: 'Copper Rolling, Drawing, Extruding, and Alloying',
    parentId: '33142',
  },
  {
    id: '331491',
    name: 'Nonferrous Metal (except Copper and Aluminum) Rolling, Drawing, and Extruding ',
    parentId: '33149',
  },
  {
    id: '331492',
    name: 'Secondary Smelting, Refining, and Alloying of Nonferrous Metal (except Copper and Aluminum) ',
    parentId: '33149',
  },
  {
    id: '331511',
    name: 'Iron Foundries ',
    parentId: '33151',
  },
  {
    id: '331512',
    name: 'Steel Investment Foundries ',
    parentId: '33151',
  },
  {
    id: '331513',
    name: 'Steel Foundries (except Investment) ',
    parentId: '33151',
  },
  {
    id: '331523',
    name: 'Nonferrous Metal Die-Casting Foundries ',
    parentId: '33152',
  },
  {
    id: '331524',
    name: 'Aluminum Foundries (except Die-Casting) ',
    parentId: '33152',
  },
  {
    id: '331529',
    name: 'Other Nonferrous Metal Foundries (except Die-Casting) ',
    parentId: '33152',
  },
  {
    id: '332111',
    name: 'Iron and Steel Forging ',
    parentId: '33211',
  },
  {
    id: '332112',
    name: 'Nonferrous Forging ',
    parentId: '33211',
  },
  {
    id: '332114',
    name: 'Custom Roll Forming ',
    parentId: '33211',
  },
  {
    id: '332117',
    name: 'Powder Metallurgy Part Manufacturing ',
    parentId: '33211',
  },
  {
    id: '332119',
    name: 'Metal Crown, Closure, and Other Metal Stamping (except Automotive) ',
    parentId: '33211',
  },
  {
    id: '332215',
    name: 'Metal Kitchen Cookware, Utensil, Cutlery, and Flatware (except Precious) Manufacturing ',
    parentId: '33221',
  },
  {
    id: '332216',
    name: 'Saw Blade and Handtool Manufacturing ',
    parentId: '33221',
  },
  {
    id: '332311',
    name: 'Prefabricated Metal Building and Component Manufacturing ',
    parentId: '33231',
  },
  {
    id: '332312',
    name: 'Fabricated Structural Metal Manufacturing ',
    parentId: '33231',
  },
  {
    id: '332313',
    name: 'Plate Work Manufacturing ',
    parentId: '33231',
  },
  {
    id: '332321',
    name: 'Metal Window and Door Manufacturing ',
    parentId: '33232',
  },
  {
    id: '332322',
    name: 'Sheet Metal Work Manufacturing ',
    parentId: '33232',
  },
  {
    id: '332323',
    name: 'Ornamental and Architectural Metal Work Manufacturing ',
    parentId: '33232',
  },
  {
    id: '332410',
    name: 'Power Boiler and Heat Exchanger Manufacturing',
    parentId: '33241',
  },
  {
    id: '332420',
    name: 'Metal Tank (Heavy Gauge) Manufacturing',
    parentId: '33242',
  },
  {
    id: '332431',
    name: 'Metal Can Manufacturing ',
    parentId: '33243',
  },
  {
    id: '332439',
    name: 'Other Metal Container Manufacturing ',
    parentId: '33243',
  },
  {
    id: '332510',
    name: 'Hardware Manufacturing',
    parentId: '33251',
  },
  {
    id: '332613',
    name: 'Spring Manufacturing ',
    parentId: '33261',
  },
  {
    id: '332618',
    name: 'Other Fabricated Wire Product Manufacturing ',
    parentId: '33261',
  },
  {
    id: '332710',
    name: 'Machine Shops',
    parentId: '33271',
  },
  {
    id: '332721',
    name: 'Precision Turned Product Manufacturing ',
    parentId: '33272',
  },
  {
    id: '332722',
    name: 'Bolt, Nut, Screw, Rivet, and Washer Manufacturing ',
    parentId: '33272',
  },
  {
    id: '332811',
    name: 'Metal Heat Treating ',
    parentId: '33281',
  },
  {
    id: '332812',
    name: 'Metal Coating, Engraving (except Jewelry and Silverware), and Allied Services to Manufacturers ',
    parentId: '33281',
  },
  {
    id: '332813',
    name: 'Electroplating, Plating, Polishing, Anodizing, and Coloring ',
    parentId: '33281',
  },
  {
    id: '332911',
    name: 'Industrial Valve Manufacturing ',
    parentId: '33291',
  },
  {
    id: '332912',
    name: 'Fluid Power Valve and Hose Fitting Manufacturing ',
    parentId: '33291',
  },
  {
    id: '332913',
    name: 'Plumbing Fixture Fitting and Trim Manufacturing ',
    parentId: '33291',
  },
  {
    id: '332919',
    name: 'Other Metal Valve and Pipe Fitting Manufacturing ',
    parentId: '33291',
  },
  {
    id: '332991',
    name: 'Ball and Roller Bearing Manufacturing',
    parentId: '33299',
  },
  {
    id: '332992',
    name: 'Small Arms Ammunition Manufacturing ',
    parentId: '33299',
  },
  {
    id: '332993',
    name: 'Ammunition (except Small Arms) Manufacturing ',
    parentId: '33299',
  },
  {
    id: '332994',
    name: 'Small Arms, Ordnance, and Ordnance Accessories Manufacturing ',
    parentId: '33299',
  },
  {
    id: '332996',
    name: 'Fabricated Pipe and Pipe Fitting Manufacturing ',
    parentId: '33299',
  },
  {
    id: '332999',
    name: 'All Other Miscellaneous Fabricated Metal Product Manufacturing ',
    parentId: '33299',
  },
  {
    id: '333111',
    name: 'Farm Machinery and Equipment Manufacturing ',
    parentId: '33311',
  },
  {
    id: '333112',
    name: 'Lawn and Garden Tractor and Home Lawn and Garden Equipment Manufacturing ',
    parentId: '33311',
  },
  {
    id: '333120',
    name: 'Construction Machinery Manufacturing',
    parentId: '33312',
  },
  {
    id: '333131',
    name: 'Mining Machinery and Equipment Manufacturing ',
    parentId: '33313',
  },
  {
    id: '333132',
    name: 'Oil and Gas Field Machinery and Equipment Manufacturing ',
    parentId: '33313',
  },
  {
    id: '333241',
    name: 'Food Product Machinery Manufacturing ',
    parentId: '33324',
  },
  {
    id: '333242',
    name: 'Semiconductor Machinery Manufacturing ',
    parentId: '33324',
  },
  {
    id: '333243',
    name: 'Sawmill, Woodworking, and Paper Machinery Manufacturing ',
    parentId: '33324',
  },
  {
    id: '333248',
    name: 'All Other Industrial Machinery Manufacturing ',
    parentId: '33324',
  },
  {
    id: '333310',
    name: 'Commercial and Service Industry Machinery Manufacturing ',
    parentId: '33331',
  },
  {
    id: '333413',
    name: 'Industrial and Commercial Fan and Blower and Air Purification Equipment Manufacturing ',
    parentId: '33341',
  },
  {
    id: '333414',
    name: 'Heating Equipment (except Warm Air Furnaces) Manufacturing ',
    parentId: '33341',
  },
  {
    id: '333415',
    name: 'Air-Conditioning and Warm Air Heating Equipment and Commercial and Industrial Refrigeration Equipment Manufacturing ',
    parentId: '33341',
  },
  {
    id: '333511',
    name: 'Industrial Mold Manufacturing ',
    parentId: '33351',
  },
  {
    id: '333514',
    name: 'Special Die and Tool, Die Set, Jig, and Fixture Manufacturing ',
    parentId: '33351',
  },
  {
    id: '333515',
    name: 'Cutting Tool and Machine Tool Accessory Manufacturing ',
    parentId: '33351',
  },
  {
    id: '333517',
    name: 'Machine Tool Manufacturing ',
    parentId: '33351',
  },
  {
    id: '333519',
    name: 'Rolling Mill and Other Metalworking Machinery Manufacturing ',
    parentId: '33351',
  },
  {
    id: '333611',
    name: 'Turbine and Turbine Generator Set Units Manufacturing ',
    parentId: '33361',
  },
  {
    id: '333612',
    name: 'Speed Changer, Industrial High-Speed Drive, and Gear Manufacturing ',
    parentId: '33361',
  },
  {
    id: '333613',
    name: 'Mechanical Power Transmission Equipment Manufacturing ',
    parentId: '33361',
  },
  {
    id: '333618',
    name: 'Other Engine Equipment Manufacturing ',
    parentId: '33361',
  },
  {
    id: '333912',
    name: 'Air and Gas Compressor Manufacturing ',
    parentId: '33391',
  },
  {
    id: '333914',
    name: 'Measuring, Dispensing, and Other Pumping Equipment Manufacturing ',
    parentId: '33391',
  },
  {
    id: '333921',
    name: 'Elevator and Moving Stairway Manufacturing ',
    parentId: '33392',
  },
  {
    id: '333922',
    name: 'Conveyor and Conveying Equipment Manufacturing ',
    parentId: '33392',
  },
  {
    id: '333923',
    name: 'Overhead Traveling Crane, Hoist, and Monorail System Manufacturing ',
    parentId: '33392',
  },
  {
    id: '333924',
    name: 'Industrial Truck, Tractor, Trailer, and Stacker Machinery Manufacturing ',
    parentId: '33392',
  },
  {
    id: '333991',
    name: 'Power-Driven Handtool Manufacturing ',
    parentId: '33399',
  },
  {
    id: '333992',
    name: 'Welding and Soldering Equipment Manufacturing ',
    parentId: '33399',
  },
  {
    id: '333993',
    name: 'Packaging Machinery Manufacturing ',
    parentId: '33399',
  },
  {
    id: '333994',
    name: 'Industrial Process Furnace and Oven Manufacturing ',
    parentId: '33399',
  },
  {
    id: '333995',
    name: 'Fluid Power Cylinder and Actuator Manufacturing ',
    parentId: '33399',
  },
  {
    id: '333996',
    name: 'Fluid Power Pump and Motor Manufacturing ',
    parentId: '33399',
  },
  {
    id: '333998',
    name: 'All Other Miscellaneous General Purpose Machinery Manufacturing ',
    parentId: '33399',
  },
  {
    id: '334111',
    name: 'Electronic Computer Manufacturing ',
    parentId: '33411',
  },
  {
    id: '334112',
    name: 'Computer Storage Device Manufacturing ',
    parentId: '33411',
  },
  {
    id: '334118',
    name: 'Computer Terminal and Other Computer Peripheral Equipment Manufacturing ',
    parentId: '33411',
  },
  {
    id: '334210',
    name: 'Telephone Apparatus Manufacturing',
    parentId: '33421',
  },
  {
    id: '334220',
    name: 'Radio and Television Broadcasting and Wireless Communications Equipment Manufacturing',
    parentId: '33422',
  },
  {
    id: '334290',
    name: 'Other Communications Equipment Manufacturing',
    parentId: '33429',
  },
  {
    id: '334310',
    name: 'Audio and Video Equipment Manufacturing',
    parentId: '33431',
  },
  {
    id: '334412',
    name: 'Bare Printed Circuit Board Manufacturing  ',
    parentId: '33441',
  },
  {
    id: '334413',
    name: 'Semiconductor and Related Device Manufacturing ',
    parentId: '33441',
  },
  {
    id: '334416',
    name: 'Capacitor, Resistor, Coil, Transformer, and Other Inductor Manufacturing ',
    parentId: '33441',
  },
  {
    id: '334417',
    name: 'Electronic Connector Manufacturing ',
    parentId: '33441',
  },
  {
    id: '334418',
    name: 'Printed Circuit Assembly (Electronic Assembly) Manufacturing ',
    parentId: '33441',
  },
  {
    id: '334419',
    name: 'Other Electronic Component Manufacturing ',
    parentId: '33441',
  },
  {
    id: '334510',
    name: 'Electromedical and Electrotherapeutic Apparatus Manufacturing ',
    parentId: '33451',
  },
  {
    id: '334511',
    name: 'Search, Detection, Navigation, Guidance, Aeronautical, and Nautical System and Instrument Manufacturing ',
    parentId: '33451',
  },
  {
    id: '334512',
    name: 'Automatic Environmental Control Manufacturing for Residential, Commercial, and Appliance Use ',
    parentId: '33451',
  },
  {
    id: '334513',
    name: 'Instruments and Related Products Manufacturing for Measuring, Displaying, and Controlling Industrial Process Variables ',
    parentId: '33451',
  },
  {
    id: '334514',
    name: 'Totalizing Fluid Meter and Counting Device Manufacturing ',
    parentId: '33451',
  },
  {
    id: '334515',
    name: 'Instrument Manufacturing for Measuring and Testing Electricity and Electrical Signals ',
    parentId: '33451',
  },
  {
    id: '334516',
    name: 'Analytical Laboratory Instrument Manufacturing ',
    parentId: '33451',
  },
  {
    id: '334517',
    name: 'Irradiation Apparatus Manufacturing ',
    parentId: '33451',
  },
  {
    id: '334519',
    name: 'Other Measuring and Controlling Device Manufacturing ',
    parentId: '33451',
  },
  {
    id: '334610',
    name: 'Manufacturing and Reproducing Magnetic and Optical Media ',
    parentId: '33461',
  },
  {
    id: '335131',
    name: 'Residential Electric Lighting Fixture Manufacturing ',
    parentId: '33513',
  },
  {
    id: '335132',
    name: 'Commercial, Industrial, and Institutional Electric Lighting Fixture Manufacturing ',
    parentId: '33513',
  },
  {
    id: '335139',
    name: 'Electric Lamp Bulb and Other Lighting Equipment Manufacturing ',
    parentId: '33513',
  },
  {
    id: '335210',
    name: 'Small Electrical Appliance Manufacturing',
    parentId: '33521',
  },
  {
    id: '335220',
    name: 'Major Household Appliance Manufacturing ',
    parentId: '33522',
  },
  {
    id: '335311',
    name: 'Power, Distribution, and Specialty Transformer Manufacturing ',
    parentId: '33531',
  },
  {
    id: '335312',
    name: 'Motor and Generator Manufacturing ',
    parentId: '33531',
  },
  {
    id: '335313',
    name: 'Switchgear and Switchboard Apparatus Manufacturing ',
    parentId: '33531',
  },
  {
    id: '335314',
    name: 'Relay and Industrial Control Manufacturing ',
    parentId: '33531',
  },
  {
    id: '335910',
    name: 'Battery Manufacturing ',
    parentId: '33591',
  },
  {
    id: '335921',
    name: 'Fiber Optic Cable Manufacturing ',
    parentId: '33592',
  },
  {
    id: '335929',
    name: 'Other Communication and Energy Wire Manufacturing ',
    parentId: '33592',
  },
  {
    id: '335931',
    name: 'Current-Carrying Wiring Device Manufacturing ',
    parentId: '33593',
  },
  {
    id: '335932',
    name: 'Noncurrent-Carrying Wiring Device Manufacturing ',
    parentId: '33593',
  },
  {
    id: '335991',
    name: 'Carbon and Graphite Product Manufacturing ',
    parentId: '33599',
  },
  {
    id: '335999',
    name: 'All Other Miscellaneous Electrical Equipment and Component Manufacturing ',
    parentId: '33599',
  },
  {
    id: '336110',
    name: 'Automobile and Light Duty Motor Vehicle Manufacturing ',
    parentId: '33611',
  },
  {
    id: '336120',
    name: 'Heavy Duty Truck Manufacturing',
    parentId: '33612',
  },
  {
    id: '336211',
    name: 'Motor Vehicle Body Manufacturing ',
    parentId: '33621',
  },
  {
    id: '336212',
    name: 'Truck Trailer Manufacturing ',
    parentId: '33621',
  },
  {
    id: '336213',
    name: 'Motor Home Manufacturing ',
    parentId: '33621',
  },
  {
    id: '336214',
    name: 'Travel Trailer and Camper Manufacturing ',
    parentId: '33621',
  },
  {
    id: '336310',
    name: 'Motor Vehicle Gasoline Engine and Engine Parts Manufacturing',
    parentId: '33631',
  },
  {
    id: '336320',
    name: 'Motor Vehicle Electrical and Electronic Equipment Manufacturing',
    parentId: '33632',
  },
  {
    id: '336330',
    name: 'Motor Vehicle Steering and Suspension Components (except Spring) Manufacturing',
    parentId: '33633',
  },
  {
    id: '336340',
    name: 'Motor Vehicle Brake System Manufacturing',
    parentId: '33634',
  },
  {
    id: '336350',
    name: 'Motor Vehicle Transmission and Power Train Parts Manufacturing',
    parentId: '33635',
  },
  {
    id: '336360',
    name: 'Motor Vehicle Seating and Interior Trim Manufacturing',
    parentId: '33636',
  },
  {
    id: '336370',
    name: 'Motor Vehicle Metal Stamping',
    parentId: '33637',
  },
  {
    id: '336390',
    name: 'Other Motor Vehicle Parts Manufacturing',
    parentId: '33639',
  },
  {
    id: '336411',
    name: 'Aircraft Manufacturing ',
    parentId: '33641',
  },
  {
    id: '336412',
    name: 'Aircraft Engine and Engine Parts Manufacturing ',
    parentId: '33641',
  },
  {
    id: '336413',
    name: 'Other Aircraft Parts and Auxiliary Equipment Manufacturing ',
    parentId: '33641',
  },
  {
    id: '336414',
    name: 'Guided Missile and Space Vehicle Manufacturing ',
    parentId: '33641',
  },
  {
    id: '336415',
    name: 'Guided Missile and Space Vehicle Propulsion Unit and Propulsion Unit Parts Manufacturing ',
    parentId: '33641',
  },
  {
    id: '336419',
    name: 'Other Guided Missile and Space Vehicle Parts and Auxiliary Equipment Manufacturing ',
    parentId: '33641',
  },
  {
    id: '336510',
    name: 'Railroad Rolling Stock Manufacturing',
    parentId: '33651',
  },
  {
    id: '336611',
    name: 'Ship Building and Repairing ',
    parentId: '33661',
  },
  {
    id: '336612',
    name: 'Boat Building ',
    parentId: '33661',
  },
  {
    id: '336991',
    name: 'Motorcycle, Bicycle, and Parts Manufacturing ',
    parentId: '33699',
  },
  {
    id: '336992',
    name: 'Military Armored Vehicle, Tank, and Tank Component Manufacturing ',
    parentId: '33699',
  },
  {
    id: '336999',
    name: 'All Other Transportation Equipment Manufacturing ',
    parentId: '33699',
  },
  {
    id: '337110',
    name: 'Wood Kitchen Cabinet and Countertop Manufacturing',
    parentId: '33711',
  },
  {
    id: '337121',
    name: 'Upholstered Household Furniture Manufacturing ',
    parentId: '33712',
  },
  {
    id: '337122',
    name: 'Nonupholstered Wood Household Furniture Manufacturing ',
    parentId: '33712',
  },
  {
    id: '337126',
    name: 'Household Furniture (except Wood and Upholstered) Manufacturing ',
    parentId: '33712',
  },
  {
    id: '337127',
    name: 'Institutional Furniture Manufacturing ',
    parentId: '33712',
  },
  {
    id: '337211',
    name: 'Wood Office Furniture Manufacturing ',
    parentId: '33721',
  },
  {
    id: '337212',
    name: 'Custom Architectural Woodwork and Millwork Manufacturing ',
    parentId: '33721',
  },
  {
    id: '337214',
    name: 'Office Furniture (except Wood) Manufacturing ',
    parentId: '33721',
  },
  {
    id: '337215',
    name: 'Showcase, Partition, Shelving, and Locker Manufacturing ',
    parentId: '33721',
  },
  {
    id: '337910',
    name: 'Mattress Manufacturing',
    parentId: '33791',
  },
  {
    id: '337920',
    name: 'Blind and Shade Manufacturing',
    parentId: '33792',
  },
  {
    id: '339112',
    name: 'Surgical and Medical Instrument Manufacturing ',
    parentId: '33911',
  },
  {
    id: '339113',
    name: 'Surgical Appliance and Supplies Manufacturing ',
    parentId: '33911',
  },
  {
    id: '339114',
    name: 'Dental Equipment and Supplies Manufacturing ',
    parentId: '33911',
  },
  {
    id: '339115',
    name: 'Ophthalmic Goods Manufacturing ',
    parentId: '33911',
  },
  {
    id: '339116',
    name: 'Dental Laboratories ',
    parentId: '33911',
  },
  {
    id: '339910',
    name: 'Jewelry and Silverware Manufacturing ',
    parentId: '33991',
  },
  {
    id: '339920',
    name: 'Sporting and Athletic Goods Manufacturing',
    parentId: '33992',
  },
  {
    id: '339930',
    name: 'Doll, Toy, and Game Manufacturing',
    parentId: '33993',
  },
  {
    id: '339940',
    name: 'Office Supplies (except Paper) Manufacturing',
    parentId: '33994',
  },
  {
    id: '339950',
    name: 'Sign Manufacturing',
    parentId: '33995',
  },
  {
    id: '339991',
    name: 'Gasket, Packing, and Sealing Device Manufacturing ',
    parentId: '33999',
  },
  {
    id: '339992',
    name: 'Musical Instrument Manufacturing ',
    parentId: '33999',
  },
  {
    id: '339993',
    name: 'Fastener, Button, Needle, and Pin Manufacturing ',
    parentId: '33999',
  },
  {
    id: '339994',
    name: 'Broom, Brush, and Mop Manufacturing ',
    parentId: '33999',
  },
  {
    id: '339995',
    name: 'Burial Casket Manufacturing ',
    parentId: '33999',
  },
  {
    id: '339999',
    name: 'All Other Miscellaneous Manufacturing ',
    parentId: '33999',
  },
  {
    id: '423110',
    name: 'Automobile and Other Motor Vehicle Merchant Wholesalers ',
    parentId: '42311',
  },
  {
    id: '423120',
    name: 'Motor Vehicle Supplies and New Parts Merchant Wholesalers ',
    parentId: '42312',
  },
  {
    id: '423130',
    name: 'Tire and Tube Merchant Wholesalers ',
    parentId: '42313',
  },
  {
    id: '423140',
    name: 'Motor Vehicle Parts (Used) Merchant Wholesalers ',
    parentId: '42314',
  },
  {
    id: '423210',
    name: 'Furniture Merchant Wholesalers ',
    parentId: '42321',
  },
  {
    id: '423220',
    name: 'Home Furnishing Merchant Wholesalers ',
    parentId: '42322',
  },
  {
    id: '423310',
    name: 'Lumber, Plywood, Millwork, and Wood Panel Merchant Wholesalers ',
    parentId: '42331',
  },
  {
    id: '423320',
    name: 'Brick, Stone, and Related Construction Material Merchant Wholesalers ',
    parentId: '42332',
  },
  {
    id: '423330',
    name: 'Roofing, Siding, and Insulation Material Merchant Wholesalers ',
    parentId: '42333',
  },
  {
    id: '423390',
    name: 'Other Construction Material Merchant Wholesalers ',
    parentId: '42339',
  },
  {
    id: '423410',
    name: 'Photographic Equipment and Supplies Merchant Wholesalers ',
    parentId: '42341',
  },
  {
    id: '423420',
    name: 'Office Equipment Merchant Wholesalers ',
    parentId: '42342',
  },
  {
    id: '423430',
    name: 'Computer and Computer Peripheral Equipment and Software Merchant Wholesalers ',
    parentId: '42343',
  },
  {
    id: '423440',
    name: 'Other Commercial Equipment Merchant Wholesalers ',
    parentId: '42344',
  },
  {
    id: '423450',
    name: 'Medical, Dental, and Hospital Equipment and Supplies Merchant Wholesalers ',
    parentId: '42345',
  },
  {
    id: '423460',
    name: 'Ophthalmic Goods Merchant Wholesalers ',
    parentId: '42346',
  },
  {
    id: '423490',
    name: 'Other Professional Equipment and Supplies Merchant Wholesalers ',
    parentId: '42349',
  },
  {
    id: '423510',
    name: 'Metal Service Centers and Other Metal Merchant Wholesalers ',
    parentId: '42351',
  },
  {
    id: '423520',
    name: 'Coal and Other Mineral and Ore Merchant Wholesalers ',
    parentId: '42352',
  },
  {
    id: '423610',
    name: 'Electrical Apparatus and Equipment, Wiring Supplies, and Related Equipment Merchant Wholesalers ',
    parentId: '42361',
  },
  {
    id: '423620',
    name: 'Household Appliances, Electric Housewares, and Consumer Electronics Merchant Wholesalers ',
    parentId: '42362',
  },
  {
    id: '423690',
    name: 'Other Electronic Parts and Equipment Merchant Wholesalers ',
    parentId: '42369',
  },
  {
    id: '423710',
    name: 'Hardware Merchant Wholesalers ',
    parentId: '42371',
  },
  {
    id: '423720',
    name: 'Plumbing and Heating Equipment and Supplies (Hydronics) Merchant Wholesalers ',
    parentId: '42372',
  },
  {
    id: '423730',
    name: 'Warm Air Heating and Air-Conditioning Equipment and Supplies Merchant Wholesalers ',
    parentId: '42373',
  },
  {
    id: '423740',
    name: 'Refrigeration Equipment and Supplies Merchant Wholesalers ',
    parentId: '42374',
  },
  {
    id: '423810',
    name: 'Construction and Mining (except Oil Well) Machinery and Equipment Merchant Wholesalers ',
    parentId: '42381',
  },
  {
    id: '423820',
    name: 'Farm and Garden Machinery and Equipment Merchant Wholesalers ',
    parentId: '42382',
  },
  {
    id: '423830',
    name: 'Industrial Machinery and Equipment Merchant Wholesalers ',
    parentId: '42383',
  },
  {
    id: '423840',
    name: 'Industrial Supplies Merchant Wholesalers',
    parentId: '42384',
  },
  {
    id: '423850',
    name: 'Service Establishment Equipment and Supplies Merchant Wholesalers ',
    parentId: '42385',
  },
  {
    id: '423860',
    name: 'Transportation Equipment and Supplies (except Motor Vehicle) Merchant Wholesalers ',
    parentId: '42386',
  },
  {
    id: '423910',
    name: 'Sporting and Recreational Goods and Supplies Merchant Wholesalers ',
    parentId: '42391',
  },
  {
    id: '423920',
    name: 'Toy and Hobby Goods and Supplies Merchant Wholesalers ',
    parentId: '42392',
  },
  {
    id: '423930',
    name: 'Recyclable Material Merchant Wholesalers ',
    parentId: '42393',
  },
  {
    id: '423940',
    name: 'Jewelry, Watch, Precious Stone, and Precious Metal Merchant Wholesalers ',
    parentId: '42394',
  },
  {
    id: '423990',
    name: 'Other Miscellaneous Durable Goods Merchant Wholesalers ',
    parentId: '42399',
  },
  {
    id: '424110',
    name: 'Printing and Writing Paper Merchant Wholesalers ',
    parentId: '42411',
  },
  {
    id: '424120',
    name: 'Stationery and Office Supplies Merchant Wholesalers ',
    parentId: '42412',
  },
  {
    id: '424130',
    name: 'Industrial and Personal Service Paper Merchant Wholesalers ',
    parentId: '42413',
  },
  {
    id: '424210',
    name: "Drugs and Druggists' Sundries Merchant Wholesalers ",
    parentId: '42421',
  },
  {
    id: '424310',
    name: 'Piece Goods, Notions, and Other Dry Goods Merchant Wholesalers ',
    parentId: '42431',
  },
  {
    id: '424340',
    name: 'Footwear Merchant Wholesalers ',
    parentId: '42434',
  },
  {
    id: '424350',
    name: 'Clothing and Clothing Accessories Merchant Wholesalers',
    parentId: '42435',
  },
  {
    id: '424410',
    name: 'General Line Grocery Merchant Wholesalers ',
    parentId: '42441',
  },
  {
    id: '424420',
    name: 'Packaged Frozen Food Merchant Wholesalers ',
    parentId: '42442',
  },
  {
    id: '424430',
    name: 'Dairy Product (except Dried or Canned) Merchant Wholesalers ',
    parentId: '42443',
  },
  {
    id: '424440',
    name: 'Poultry and Poultry Product Merchant Wholesalers ',
    parentId: '42444',
  },
  {
    id: '424450',
    name: 'Confectionery Merchant Wholesalers ',
    parentId: '42445',
  },
  {
    id: '424460',
    name: 'Fish and Seafood Merchant Wholesalers ',
    parentId: '42446',
  },
  {
    id: '424470',
    name: 'Meat and Meat Product Merchant Wholesalers ',
    parentId: '42447',
  },
  {
    id: '424480',
    name: 'Fresh Fruit and Vegetable Merchant Wholesalers ',
    parentId: '42448',
  },
  {
    id: '424490',
    name: 'Other Grocery and Related Products Merchant Wholesalers ',
    parentId: '42449',
  },
  {
    id: '424510',
    name: 'Grain and Field Bean Merchant Wholesalers ',
    parentId: '42451',
  },
  {
    id: '424520',
    name: 'Livestock Merchant Wholesalers ',
    parentId: '42452',
  },
  {
    id: '424590',
    name: 'Other Farm Product Raw Material Merchant Wholesalers ',
    parentId: '42459',
  },
  {
    id: '424610',
    name: 'Plastics Materials and Basic Forms and Shapes Merchant Wholesalers ',
    parentId: '42461',
  },
  {
    id: '424690',
    name: 'Other Chemical and Allied Products Merchant Wholesalers ',
    parentId: '42469',
  },
  {
    id: '424710',
    name: 'Petroleum Bulk Stations and Terminals ',
    parentId: '42471',
  },
  {
    id: '424720',
    name: 'Petroleum and Petroleum Products Merchant Wholesalers (except Bulk Stations and Terminals) ',
    parentId: '42472',
  },
  {
    id: '424810',
    name: 'Beer and Ale Merchant Wholesalers ',
    parentId: '42481',
  },
  {
    id: '424820',
    name: 'Wine and Distilled Alcoholic Beverage Merchant Wholesalers ',
    parentId: '42482',
  },
  {
    id: '424910',
    name: 'Farm Supplies Merchant Wholesalers ',
    parentId: '42491',
  },
  {
    id: '424920',
    name: 'Book, Periodical, and Newspaper Merchant Wholesalers ',
    parentId: '42492',
  },
  {
    id: '424930',
    name: "Flower, Nursery Stock, and Florists' Supplies Merchant Wholesalers ",
    parentId: '42493',
  },
  {
    id: '424940',
    name: 'Tobacco Product and Electronic Cigarette Merchant Wholesalers ',
    parentId: '42494',
  },
  {
    id: '424950',
    name: 'Paint, Varnish, and Supplies Merchant Wholesalers ',
    parentId: '42495',
  },
  {
    id: '424990',
    name: 'Other Miscellaneous Nondurable Goods Merchant Wholesalers ',
    parentId: '42499',
  },
  {
    id: '425120',
    name: 'Wholesale Trade Agents and Brokers ',
    parentId: '42512',
  },
  {
    id: '441110',
    name: 'New Car Dealers ',
    parentId: '44111',
  },
  {
    id: '441120',
    name: 'Used Car Dealers ',
    parentId: '44112',
  },
  {
    id: '441210',
    name: 'Recreational Vehicle Dealers ',
    parentId: '44121',
  },
  {
    id: '441222',
    name: 'Boat Dealers ',
    parentId: '44122',
  },
  {
    id: '441227',
    name: 'Motorcycle, ATV, and All Other Motor Vehicle Dealers ',
    parentId: '44122',
  },
  {
    id: '441330',
    name: 'Automotive Parts and Accessories Retailers ',
    parentId: '44133',
  },
  {
    id: '441340',
    name: 'Tire Dealers ',
    parentId: '44134',
  },
  {
    id: '444110',
    name: 'Home Centers ',
    parentId: '44411',
  },
  {
    id: '444120',
    name: 'Paint and Wallpaper Retailers ',
    parentId: '44412',
  },
  {
    id: '444140',
    name: 'Hardware Retailers ',
    parentId: '44414',
  },
  {
    id: '444180',
    name: 'Other Building Material Dealers ',
    parentId: '44418',
  },
  {
    id: '444230',
    name: 'Outdoor Power Equipment Retailers ',
    parentId: '44423',
  },
  {
    id: '444240',
    name: 'Nursery, Garden Center, and Farm Supply Retailers ',
    parentId: '44424',
  },
  {
    id: '445110',
    name: 'Supermarkets and Other Grocery Retailers (except Convenience Retailers) ',
    parentId: '44511',
  },
  {
    id: '445131',
    name: 'Convenience Retailers ',
    parentId: '44513',
  },
  {
    id: '445132',
    name: 'Vending Machine Operators ',
    parentId: '44513',
  },
  {
    id: '445230',
    name: 'Fruit and Vegetable Retailers ',
    parentId: '44523',
  },
  {
    id: '445240',
    name: 'Meat Retailers ',
    parentId: '44524',
  },
  {
    id: '445250',
    name: 'Fish and Seafood Retailers ',
    parentId: '44525',
  },
  {
    id: '445291',
    name: 'Baked Goods Retailers ',
    parentId: '44529',
  },
  {
    id: '445292',
    name: 'Confectionery and Nut Retailers ',
    parentId: '44529',
  },
  {
    id: '445298',
    name: 'All Other Specialty Food Retailers ',
    parentId: '44529',
  },
  {
    id: '445320',
    name: 'Beer, Wine, and Liquor Retailers ',
    parentId: '44532',
  },
  {
    id: '449110',
    name: 'Furniture Retailers ',
    parentId: '44911',
  },
  {
    id: '449121',
    name: 'Floor Covering Retailers ',
    parentId: '44912',
  },
  {
    id: '449122',
    name: 'Window Treatment Retailers ',
    parentId: '44912',
  },
  {
    id: '449129',
    name: 'All Other Home Furnishings Retailers ',
    parentId: '44912',
  },
  {
    id: '449210',
    name: 'Electronics and Appliance Retailers ',
    parentId: '44921',
  },
  {
    id: '455110',
    name: 'Department Stores ',
    parentId: '45511',
  },
  {
    id: '455211',
    name: 'Warehouse Clubs and Supercenters ',
    parentId: '45521',
  },
  {
    id: '455219',
    name: 'All Other General Merchandise Retailers ',
    parentId: '45521',
  },
  {
    id: '456110',
    name: 'Pharmacies and Drug Retailers ',
    parentId: '45611',
  },
  {
    id: '456120',
    name: 'Cosmetics, Beauty Supplies, and Perfume Retailers ',
    parentId: '45612',
  },
  {
    id: '456130',
    name: 'Optical Goods Retailers ',
    parentId: '45613',
  },
  {
    id: '456191',
    name: 'Food (Health) Supplement Retailers ',
    parentId: '45619',
  },
  {
    id: '456199',
    name: 'All Other Health and Personal Care Retailers ',
    parentId: '45619',
  },
  {
    id: '457110',
    name: 'Gasoline Stations with Convenience Stores ',
    parentId: '45711',
  },
  {
    id: '457120',
    name: 'Other Gasoline Stations ',
    parentId: '45712',
  },
  {
    id: '457210',
    name: 'Fuel Dealers ',
    parentId: '45721',
  },
  {
    id: '458110',
    name: 'Clothing and Clothing Accessories Retailers ',
    parentId: '45811',
  },
  {
    id: '458210',
    name: 'Shoe Retailers ',
    parentId: '45821',
  },
  {
    id: '458310',
    name: 'Jewelry Retailers ',
    parentId: '45831',
  },
  {
    id: '458320',
    name: 'Luggage and Leather Goods Retailers ',
    parentId: '45832',
  },
  {
    id: '459110',
    name: 'Sporting Goods Retailers ',
    parentId: '45911',
  },
  {
    id: '459120',
    name: 'Hobby, Toy, and Game Retailers ',
    parentId: '45912',
  },
  {
    id: '459130',
    name: 'Sewing, Needlework, and Piece Goods Retailers ',
    parentId: '45913',
  },
  {
    id: '459140',
    name: 'Musical Instrument and Supplies Retailers ',
    parentId: '45914',
  },
  {
    id: '459210',
    name: 'Book Retailers and News Dealers ',
    parentId: '45921',
  },
  {
    id: '459310',
    name: 'Florists ',
    parentId: '45931',
  },
  {
    id: '459410',
    name: 'Office Supplies and Stationery Retailers ',
    parentId: '45941',
  },
  {
    id: '459420',
    name: 'Gift, Novelty, and Souvenir Retailers ',
    parentId: '45942',
  },
  {
    id: '459510',
    name: 'Used Merchandise Retailers ',
    parentId: '45951',
  },
  {
    id: '459910',
    name: 'Pet and Pet Supplies Retailers ',
    parentId: '45991',
  },
  {
    id: '459920',
    name: 'Art Dealers ',
    parentId: '45992',
  },
  {
    id: '459930',
    name: 'Manufactured (Mobile) Home Dealers ',
    parentId: '45993',
  },
  {
    id: '459991',
    name: 'Tobacco, Electronic Cigarette, and Other Smoking Supplies Retailers ',
    parentId: '45999',
  },
  {
    id: '459999',
    name: 'All Other Miscellaneous Retailers ',
    parentId: '45999',
  },
  {
    id: '481111',
    name: 'Scheduled Passenger Air Transportation ',
    parentId: '48111',
  },
  {
    id: '481112',
    name: 'Scheduled Freight Air Transportation ',
    parentId: '48111',
  },
  {
    id: '481211',
    name: 'Nonscheduled Chartered Passenger Air Transportation ',
    parentId: '48121',
  },
  {
    id: '481212',
    name: 'Nonscheduled Chartered Freight Air Transportation ',
    parentId: '48121',
  },
  {
    id: '481219',
    name: 'Other Nonscheduled Air Transportation ',
    parentId: '48121',
  },
  {
    id: '482111',
    name: 'Line-Haul Railroads ',
    parentId: '48211',
  },
  {
    id: '482112',
    name: 'Short Line Railroads ',
    parentId: '48211',
  },
  {
    id: '483111',
    name: 'Deep Sea Freight Transportation ',
    parentId: '48311',
  },
  {
    id: '483112',
    name: 'Deep Sea Passenger Transportation ',
    parentId: '48311',
  },
  {
    id: '483113',
    name: 'Coastal and Great Lakes Freight Transportation ',
    parentId: '48311',
  },
  {
    id: '483114',
    name: 'Coastal and Great Lakes Passenger Transportation ',
    parentId: '48311',
  },
  {
    id: '483211',
    name: 'Inland Water Freight Transportation ',
    parentId: '48321',
  },
  {
    id: '483212',
    name: 'Inland Water Passenger Transportation ',
    parentId: '48321',
  },
  {
    id: '484110',
    name: 'General Freight Trucking, Local ',
    parentId: '48411',
  },
  {
    id: '484121',
    name: 'General Freight Trucking, Long-Distance, Truckload ',
    parentId: '48412',
  },
  {
    id: '484122',
    name: 'General Freight Trucking, Long-Distance, Less Than Truckload ',
    parentId: '48412',
  },
  {
    id: '484210',
    name: 'Used Household and Office Goods Moving',
    parentId: '48421',
  },
  {
    id: '484220',
    name: 'Specialized Freight (except Used Goods) Trucking, Local ',
    parentId: '48422',
  },
  {
    id: '484230',
    name: 'Specialized Freight (except Used Goods) Trucking, Long-Distance ',
    parentId: '48423',
  },
  {
    id: '485111',
    name: 'Mixed Mode Transit Systems ',
    parentId: '48511',
  },
  {
    id: '485112',
    name: 'Commuter Rail Systems ',
    parentId: '48511',
  },
  {
    id: '485113',
    name: 'Bus and Other Motor Vehicle Transit Systems ',
    parentId: '48511',
  },
  {
    id: '485119',
    name: 'Other Urban Transit Systems ',
    parentId: '48511',
  },
  {
    id: '485210',
    name: 'Interurban and Rural Bus Transportation',
    parentId: '48521',
  },
  {
    id: '485310',
    name: 'Taxi and Ridesharing Services ',
    parentId: '48531',
  },
  {
    id: '485320',
    name: 'Limousine Service',
    parentId: '48532',
  },
  {
    id: '485410',
    name: 'School and Employee Bus Transportation',
    parentId: '48541',
  },
  {
    id: '485510',
    name: 'Charter Bus Industry',
    parentId: '48551',
  },
  {
    id: '485991',
    name: 'Special Needs Transportation ',
    parentId: '48599',
  },
  {
    id: '485999',
    name: 'All Other Transit and Ground Passenger Transportation ',
    parentId: '48599',
  },
  {
    id: '486110',
    name: 'Pipeline Transportation of Crude Oil',
    parentId: '48611',
  },
  {
    id: '486210',
    name: 'Pipeline Transportation of Natural Gas',
    parentId: '48621',
  },
  {
    id: '486910',
    name: 'Pipeline Transportation of Refined Petroleum Products',
    parentId: '48691',
  },
  {
    id: '486990',
    name: 'All Other Pipeline Transportation',
    parentId: '48699',
  },
  {
    id: '487110',
    name: 'Scenic and Sightseeing Transportation, Land',
    parentId: '48711',
  },
  {
    id: '487210',
    name: 'Scenic and Sightseeing Transportation, Water',
    parentId: '48721',
  },
  {
    id: '487990',
    name: 'Scenic and Sightseeing Transportation, Other',
    parentId: '48799',
  },
  {
    id: '488111',
    name: 'Air Traffic Control',
    parentId: '48811',
  },
  {
    id: '488119',
    name: 'Other Airport Operations ',
    parentId: '48811',
  },
  {
    id: '488190',
    name: 'Other Support Activities for Air Transportation',
    parentId: '48819',
  },
  {
    id: '488210',
    name: 'Support Activities for Rail Transportation',
    parentId: '48821',
  },
  {
    id: '488310',
    name: 'Port and Harbor Operations',
    parentId: '48831',
  },
  {
    id: '488320',
    name: 'Marine Cargo Handling',
    parentId: '48832',
  },
  {
    id: '488330',
    name: 'Navigational Services to Shipping ',
    parentId: '48833',
  },
  {
    id: '488390',
    name: 'Other Support Activities for Water Transportation',
    parentId: '48839',
  },
  {
    id: '488410',
    name: 'Motor Vehicle Towing',
    parentId: '48841',
  },
  {
    id: '488490',
    name: 'Other Support Activities for Road Transportation ',
    parentId: '48849',
  },
  {
    id: '488510',
    name: 'Freight Transportation Arrangement ',
    parentId: '48851',
  },
  {
    id: '488991',
    name: 'Packing and Crating ',
    parentId: '48899',
  },
  {
    id: '488999',
    name: 'All Other Support Activities for Transportation ',
    parentId: '48899',
  },
  {
    id: '491110',
    name: 'Postal Service',
    parentId: '49111',
  },
  {
    id: '492110',
    name: 'Couriers and Express Delivery Services',
    parentId: '49211',
  },
  {
    id: '492210',
    name: 'Local Messengers and Local Delivery',
    parentId: '49221',
  },
  {
    id: '493110',
    name: 'General Warehousing and Storage ',
    parentId: '49311',
  },
  {
    id: '493120',
    name: 'Refrigerated Warehousing and Storage',
    parentId: '49312',
  },
  {
    id: '493130',
    name: 'Farm Product Warehousing and Storage',
    parentId: '49313',
  },
  {
    id: '493190',
    name: 'Other Warehousing and Storage',
    parentId: '49319',
  },
  {
    id: '512110',
    name: 'Motion Picture and Video Production ',
    parentId: '51211',
  },
  {
    id: '512120',
    name: 'Motion Picture and Video Distribution',
    parentId: '51212',
  },
  {
    id: '512131',
    name: 'Motion Picture Theaters (except Drive-Ins) ',
    parentId: '51213',
  },
  {
    id: '512132',
    name: 'Drive-In Motion Picture Theaters ',
    parentId: '51213',
  },
  {
    id: '512191',
    name: 'Teleproduction and Other Postproduction Services ',
    parentId: '51219',
  },
  {
    id: '512199',
    name: 'Other Motion Picture and Video Industries ',
    parentId: '51219',
  },
  {
    id: '512230',
    name: 'Music Publishers',
    parentId: '51223',
  },
  {
    id: '512240',
    name: 'Sound Recording Studios',
    parentId: '51224',
  },
  {
    id: '512250',
    name: 'Record Production and Distribution',
    parentId: '51225',
  },
  {
    id: '512290',
    name: 'Other Sound Recording Industries',
    parentId: '51229',
  },
  {
    id: '513110',
    name: 'Newspaper Publishers ',
    parentId: '51311',
  },
  {
    id: '513120',
    name: 'Periodical Publishers ',
    parentId: '51312',
  },
  {
    id: '513130',
    name: 'Book Publishers ',
    parentId: '51313',
  },
  {
    id: '513140',
    name: 'Directory and Mailing List Publishers ',
    parentId: '51314',
  },
  {
    id: '513191',
    name: 'Greeting Card Publishers ',
    parentId: '51319',
  },
  {
    id: '513199',
    name: 'All Other Publishers ',
    parentId: '51319',
  },
  {
    id: '513210',
    name: 'Software Publishers',
    parentId: '51321',
  },
  {
    id: '516110',
    name: 'Radio Broadcasting Stations ',
    parentId: '51611',
  },
  {
    id: '516120',
    name: 'Television Broadcasting Stations',
    parentId: '51612',
  },
  {
    id: '516210',
    name: 'Media Streaming Distribution Services, Social Networks, and Other Media Networks and Content Providers',
    parentId: '51621',
  },
  {
    id: '517111',
    name: 'Wired Telecommunications Carriers ',
    parentId: '51711',
  },
  {
    id: '517112',
    name: 'Wireless Telecommunications Carriers (except Satellite)',
    parentId: '51711',
  },
  {
    id: '517121',
    name: 'Telecommunications Resellers',
    parentId: '51712',
  },
  {
    id: '517122',
    name: 'Agents for Wireless Telecommunications Services',
    parentId: '51712',
  },
  {
    id: '517410',
    name: 'Satellite Telecommunications',
    parentId: '51741',
  },
  {
    id: '517810',
    name: 'All Other Telecommunications ',
    parentId: '51781',
  },
  {
    id: '518210',
    name: 'Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services',
    parentId: '51821',
  },
  {
    id: '519210',
    name: 'Libraries and Archives ',
    parentId: '51921',
  },
  {
    id: '519290',
    name: 'Web Search Portals and All Other Information Services',
    parentId: '51929',
  },
  {
    id: '521110',
    name: 'Monetary Authorities-Central Bank',
    parentId: '52111',
  },
  {
    id: '522110',
    name: 'Commercial Banking ',
    parentId: '52211',
  },
  {
    id: '522130',
    name: 'Credit Unions ',
    parentId: '52213',
  },
  {
    id: '522180',
    name: 'Savings Institutions and Other Depository Credit Intermediation ',
    parentId: '52218',
  },
  {
    id: '522210',
    name: 'Credit Card Issuing ',
    parentId: '52221',
  },
  {
    id: '522220',
    name: 'Sales Financing ',
    parentId: '52222',
  },
  {
    id: '522291',
    name: 'Consumer Lending ',
    parentId: '52229',
  },
  {
    id: '522292',
    name: 'Real Estate Credit ',
    parentId: '52229',
  },
  {
    id: '522299',
    name: 'International, Secondary Market, and All Other Nondepository Credit Intermediation ',
    parentId: '52229',
  },
  {
    id: '522310',
    name: 'Mortgage and Nonmortgage Loan Brokers ',
    parentId: '52231',
  },
  {
    id: '522320',
    name: 'Financial Transactions Processing, Reserve, and Clearinghouse Activities ',
    parentId: '52232',
  },
  {
    id: '522390',
    name: 'Other Activities Related to Credit Intermediation ',
    parentId: '52239',
  },
  {
    id: '523150',
    name: 'Investment Banking and Securities Intermediation ',
    parentId: '52315',
  },
  {
    id: '523160',
    name: 'Commodity Contracts Intermediation ',
    parentId: '52316',
  },
  {
    id: '523210',
    name: 'Securities and Commodity Exchanges',
    parentId: '52321',
  },
  {
    id: '523910',
    name: 'Miscellaneous Intermediation ',
    parentId: '52391',
  },
  {
    id: '523940',
    name: 'Portfolio Management and Investment Advice ',
    parentId: '52394',
  },
  {
    id: '523991',
    name: 'Trust, Fiduciary, and Custody Activities ',
    parentId: '52399',
  },
  {
    id: '523999',
    name: 'Miscellaneous Financial Investment Activities ',
    parentId: '52399',
  },
  {
    id: '524113',
    name: 'Direct Life Insurance Carriers ',
    parentId: '52411',
  },
  {
    id: '524114',
    name: 'Direct Health and Medical Insurance Carriers ',
    parentId: '52411',
  },
  {
    id: '524126',
    name: 'Direct Property and Casualty Insurance Carriers ',
    parentId: '52412',
  },
  {
    id: '524127',
    name: 'Direct Title Insurance Carriers ',
    parentId: '52412',
  },
  {
    id: '524128',
    name: 'Other Direct Insurance (except Life, Health, and Medical) Carriers ',
    parentId: '52412',
  },
  {
    id: '524130',
    name: 'Reinsurance Carriers ',
    parentId: '52413',
  },
  {
    id: '524210',
    name: 'Insurance Agencies and Brokerages ',
    parentId: '52421',
  },
  {
    id: '524291',
    name: 'Claims Adjusting ',
    parentId: '52429',
  },
  {
    id: '524292',
    name: 'Pharmacy Benefit Management and Other Third Party Administration of Insurance and Pension Funds ',
    parentId: '52429',
  },
  {
    id: '524298',
    name: 'All Other Insurance Related Activities ',
    parentId: '52429',
  },
  {
    id: '525110',
    name: 'Pension Funds ',
    parentId: '52511',
  },
  {
    id: '525120',
    name: 'Health and Welfare Funds ',
    parentId: '52512',
  },
  {
    id: '525190',
    name: 'Other Insurance Funds ',
    parentId: '52519',
  },
  {
    id: '525910',
    name: 'Open-End Investment Funds ',
    parentId: '52591',
  },
  {
    id: '525920',
    name: 'Trusts, Estates, and Agency Accounts ',
    parentId: '52592',
  },
  {
    id: '525990',
    name: 'Other Financial Vehicles ',
    parentId: '52599',
  },
  {
    id: '531110',
    name: 'Lessors of Residential Buildings and Dwellings ',
    parentId: '53111',
  },
  {
    id: '531120',
    name: 'Lessors of Nonresidential Buildings (except Miniwarehouses) ',
    parentId: '53112',
  },
  {
    id: '531130',
    name: 'Lessors of Miniwarehouses and Self-Storage Units ',
    parentId: '53113',
  },
  {
    id: '531190',
    name: 'Lessors of Other Real Estate Property ',
    parentId: '53119',
  },
  {
    id: '531210',
    name: 'Offices of Real Estate Agents and Brokers',
    parentId: '53121',
  },
  {
    id: '531311',
    name: 'Residential Property Managers ',
    parentId: '53131',
  },
  {
    id: '531312',
    name: 'Nonresidential Property Managers ',
    parentId: '53131',
  },
  {
    id: '531320',
    name: 'Offices of Real Estate Appraisers ',
    parentId: '53132',
  },
  {
    id: '531390',
    name: 'Other Activities Related to Real Estate ',
    parentId: '53139',
  },
  {
    id: '532111',
    name: 'Passenger Car Rental ',
    parentId: '53211',
  },
  {
    id: '532112',
    name: 'Passenger Car Leasing ',
    parentId: '53211',
  },
  {
    id: '532120',
    name: 'Truck, Utility Trailer, and RV (Recreational Vehicle) Rental and Leasing ',
    parentId: '53212',
  },
  {
    id: '532210',
    name: 'Consumer Electronics and Appliances Rental',
    parentId: '53221',
  },
  {
    id: '532281',
    name: 'Formal Wear and Costume Rental',
    parentId: '53228',
  },
  {
    id: '532282',
    name: 'Video Tape and Disc Rental',
    parentId: '53228',
  },
  {
    id: '532283',
    name: 'Home Health Equipment Rental ',
    parentId: '53228',
  },
  {
    id: '532284',
    name: 'Recreational Goods Rental ',
    parentId: '53228',
  },
  {
    id: '532289',
    name: 'All Other Consumer Goods Rental ',
    parentId: '53228',
  },
  {
    id: '532310',
    name: 'General Rental Centers',
    parentId: '53231',
  },
  {
    id: '532411',
    name: 'Commercial Air, Rail, and Water Transportation Equipment Rental and Leasing ',
    parentId: '53241',
  },
  {
    id: '532412',
    name: 'Construction, Mining, and Forestry Machinery and Equipment Rental and Leasing ',
    parentId: '53241',
  },
  {
    id: '532420',
    name: 'Office Machinery and Equipment Rental and Leasing',
    parentId: '53242',
  },
  {
    id: '532490',
    name: 'Other Commercial and Industrial Machinery and Equipment Rental and Leasing ',
    parentId: '53249',
  },
  {
    id: '533110',
    name: 'Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)',
    parentId: '53311',
  },
  {
    id: '541110',
    name: 'Offices of Lawyers',
    parentId: '54111',
  },
  {
    id: '541120',
    name: 'Offices of Notaries',
    parentId: '54112',
  },
  {
    id: '541191',
    name: 'Title Abstract and Settlement Offices ',
    parentId: '54119',
  },
  {
    id: '541199',
    name: 'All Other Legal Services ',
    parentId: '54119',
  },
  {
    id: '541211',
    name: 'Offices of Certified Public Accountants ',
    parentId: '54121',
  },
  {
    id: '541213',
    name: 'Tax Preparation Services ',
    parentId: '54121',
  },
  {
    id: '541214',
    name: 'Payroll Services ',
    parentId: '54121',
  },
  {
    id: '541219',
    name: 'Other Accounting Services ',
    parentId: '54121',
  },
  {
    id: '541310',
    name: 'Architectural Services',
    parentId: '54131',
  },
  {
    id: '541320',
    name: 'Landscape Architectural Services',
    parentId: '54132',
  },
  {
    id: '541330',
    name: 'Engineering Services',
    parentId: '54133',
  },
  {
    id: '541340',
    name: 'Drafting Services',
    parentId: '54134',
  },
  {
    id: '541350',
    name: 'Building Inspection Services',
    parentId: '54135',
  },
  {
    id: '541360',
    name: 'Geophysical Surveying and Mapping Services',
    parentId: '54136',
  },
  {
    id: '541370',
    name: 'Surveying and Mapping (except Geophysical) Services',
    parentId: '54137',
  },
  {
    id: '541380',
    name: 'Testing Laboratories and Services',
    parentId: '54138',
  },
  {
    id: '541410',
    name: 'Interior Design Services',
    parentId: '54141',
  },
  {
    id: '541420',
    name: 'Industrial Design Services',
    parentId: '54142',
  },
  {
    id: '541430',
    name: 'Graphic Design Services',
    parentId: '54143',
  },
  {
    id: '541490',
    name: 'Other Specialized Design Services',
    parentId: '54149',
  },
  {
    id: '541511',
    name: 'Custom Computer Programming Services ',
    parentId: '54151',
  },
  {
    id: '541512',
    name: 'Computer Systems Design Services ',
    parentId: '54151',
  },
  {
    id: '541513',
    name: 'Computer Facilities Management Services ',
    parentId: '54151',
  },
  {
    id: '541519',
    name: 'Other Computer Related Services',
    parentId: '54151',
  },
  {
    id: '541611',
    name: 'Administrative Management and General Management Consulting Services ',
    parentId: '54161',
  },
  {
    id: '541612',
    name: 'Human Resources Consulting Services ',
    parentId: '54161',
  },
  {
    id: '541613',
    name: 'Marketing Consulting Services ',
    parentId: '54161',
  },
  {
    id: '541614',
    name: 'Process, Physical Distribution, and Logistics Consulting Services ',
    parentId: '54161',
  },
  {
    id: '541618',
    name: 'Other Management Consulting Services ',
    parentId: '54161',
  },
  {
    id: '541620',
    name: 'Environmental Consulting Services',
    parentId: '54162',
  },
  {
    id: '541690',
    name: 'Other Scientific and Technical Consulting Services',
    parentId: '54169',
  },
  {
    id: '541713',
    name: 'Research and Development in Nanotechnology ',
    parentId: '54171',
  },
  {
    id: '541714',
    name: 'Research and Development in Biotechnology (except Nanobiotechnology)',
    parentId: '54171',
  },
  {
    id: '541715',
    name: 'Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology) ',
    parentId: '54171',
  },
  {
    id: '541720',
    name: 'Research and Development in the Social Sciences and Humanities ',
    parentId: '54172',
  },
  {
    id: '541810',
    name: 'Advertising Agencies',
    parentId: '54181',
  },
  {
    id: '541820',
    name: 'Public Relations Agencies',
    parentId: '54182',
  },
  {
    id: '541830',
    name: 'Media Buying Agencies',
    parentId: '54183',
  },
  {
    id: '541840',
    name: 'Media Representatives',
    parentId: '54184',
  },
  {
    id: '541850',
    name: 'Indoor and Outdoor Display Advertising',
    parentId: '54185',
  },
  {
    id: '541860',
    name: 'Direct Mail Advertising',
    parentId: '54186',
  },
  {
    id: '541870',
    name: 'Advertising Material Distribution Services',
    parentId: '54187',
  },
  {
    id: '541890',
    name: 'Other Services Related to Advertising ',
    parentId: '54189',
  },
  {
    id: '541910',
    name: 'Marketing Research and Public Opinion Polling',
    parentId: '54191',
  },
  {
    id: '541921',
    name: 'Photography Studios, Portrait ',
    parentId: '54192',
  },
  {
    id: '541922',
    name: 'Commercial Photography ',
    parentId: '54192',
  },
  {
    id: '541930',
    name: 'Translation and Interpretation Services',
    parentId: '54193',
  },
  {
    id: '541940',
    name: 'Veterinary Services ',
    parentId: '54194',
  },
  {
    id: '541990',
    name: 'All Other Professional, Scientific, and Technical Services',
    parentId: '54199',
  },
  {
    id: '551111',
    name: 'Offices of Bank Holding Companies ',
    parentId: '55111',
  },
  {
    id: '551112',
    name: 'Offices of Other Holding Companies ',
    parentId: '55111',
  },
  {
    id: '551114',
    name: 'Corporate, Subsidiary, and Regional Managing Offices ',
    parentId: '55111',
  },
  {
    id: '561110',
    name: 'Office Administrative Services',
    parentId: '56111',
  },
  {
    id: '561210',
    name: 'Facilities Support Services',
    parentId: '56121',
  },
  {
    id: '561311',
    name: 'Employment Placement Agencies ',
    parentId: '56131',
  },
  {
    id: '561312',
    name: 'Executive Search Services ',
    parentId: '56131',
  },
  {
    id: '561320',
    name: 'Temporary Help Services',
    parentId: '56132',
  },
  {
    id: '561330',
    name: 'Professional Employer Organizations',
    parentId: '56133',
  },
  {
    id: '561410',
    name: 'Document Preparation Services',
    parentId: '56141',
  },
  {
    id: '561421',
    name: 'Telephone Answering Services ',
    parentId: '56142',
  },
  {
    id: '561422',
    name: 'Telemarketing Bureaus and Other Contact Centers ',
    parentId: '56142',
  },
  {
    id: '561431',
    name: 'Private Mail Centers ',
    parentId: '56143',
  },
  {
    id: '561439',
    name: 'Other Business Service Centers (including Copy Shops) ',
    parentId: '56143',
  },
  {
    id: '561440',
    name: 'Collection Agencies',
    parentId: '56144',
  },
  {
    id: '561450',
    name: 'Credit Bureaus',
    parentId: '56145',
  },
  {
    id: '561491',
    name: 'Repossession Services ',
    parentId: '56149',
  },
  {
    id: '561492',
    name: 'Court Reporting and Stenotype Services ',
    parentId: '56149',
  },
  {
    id: '561499',
    name: 'All Other Business Support Services ',
    parentId: '56149',
  },
  {
    id: '561510',
    name: 'Travel Agencies',
    parentId: '56151',
  },
  {
    id: '561520',
    name: 'Tour Operators',
    parentId: '56152',
  },
  {
    id: '561591',
    name: 'Convention and Visitors Bureaus ',
    parentId: '56159',
  },
  {
    id: '561599',
    name: 'All Other Travel Arrangement and Reservation Services ',
    parentId: '56159',
  },
  {
    id: '561611',
    name: 'Investigation and Personal Background Check Services ',
    parentId: '56161',
  },
  {
    id: '561612',
    name: 'Security Guards and Patrol Services ',
    parentId: '56161',
  },
  {
    id: '561613',
    name: 'Armored Car Services ',
    parentId: '56161',
  },
  {
    id: '561621',
    name: 'Security Systems Services (except Locksmiths) ',
    parentId: '56162',
  },
  {
    id: '561622',
    name: 'Locksmiths ',
    parentId: '56162',
  },
  {
    id: '561710',
    name: 'Exterminating and Pest Control Services',
    parentId: '56171',
  },
  {
    id: '561720',
    name: 'Janitorial Services ',
    parentId: '56172',
  },
  {
    id: '561730',
    name: 'Landscaping Services',
    parentId: '56173',
  },
  {
    id: '561740',
    name: 'Carpet and Upholstery Cleaning Services',
    parentId: '56174',
  },
  {
    id: '561790',
    name: 'Other Services to Buildings and Dwellings ',
    parentId: '56179',
  },
  {
    id: '561910',
    name: 'Packaging and Labeling Services',
    parentId: '56191',
  },
  {
    id: '561920',
    name: 'Convention and Trade Show Organizers',
    parentId: '56192',
  },
  {
    id: '561990',
    name: 'All Other Support Services',
    parentId: '56199',
  },
  {
    id: '562111',
    name: 'Solid Waste Collection ',
    parentId: '56211',
  },
  {
    id: '562112',
    name: 'Hazardous Waste Collection ',
    parentId: '56211',
  },
  {
    id: '562119',
    name: 'Other Waste Collection ',
    parentId: '56211',
  },
  {
    id: '562211',
    name: 'Hazardous Waste Treatment and Disposal ',
    parentId: '56221',
  },
  {
    id: '562212',
    name: 'Solid Waste Landfill ',
    parentId: '56221',
  },
  {
    id: '562213',
    name: 'Solid Waste Combustors and Incinerators ',
    parentId: '56221',
  },
  {
    id: '562219',
    name: 'Other Nonhazardous Waste Treatment and Disposal ',
    parentId: '56221',
  },
  {
    id: '562910',
    name: 'Remediation Services ',
    parentId: '56291',
  },
  {
    id: '562920',
    name: 'Materials Recovery Facilities ',
    parentId: '56292',
  },
  {
    id: '562991',
    name: 'Septic Tank and Related Services ',
    parentId: '56299',
  },
  {
    id: '562998',
    name: 'All Other Miscellaneous Waste Management Services ',
    parentId: '56299',
  },
  {
    id: '611110',
    name: 'Elementary and Secondary Schools ',
    parentId: '61111',
  },
  {
    id: '611210',
    name: 'Junior Colleges ',
    parentId: '61121',
  },
  {
    id: '611310',
    name: 'Colleges, Universities, and Professional Schools ',
    parentId: '61131',
  },
  {
    id: '611410',
    name: 'Business and Secretarial Schools ',
    parentId: '61141',
  },
  {
    id: '611420',
    name: 'Computer Training ',
    parentId: '61142',
  },
  {
    id: '611430',
    name: 'Professional and Management Development Training ',
    parentId: '61143',
  },
  {
    id: '611511',
    name: 'Cosmetology and Barber Schools ',
    parentId: '61151',
  },
  {
    id: '611512',
    name: 'Flight Training ',
    parentId: '61151',
  },
  {
    id: '611513',
    name: 'Apprenticeship Training ',
    parentId: '61151',
  },
  {
    id: '611519',
    name: 'Other Technical and Trade Schools ',
    parentId: '61151',
  },
  {
    id: '611610',
    name: 'Fine Arts Schools ',
    parentId: '61161',
  },
  {
    id: '611620',
    name: 'Sports and Recreation Instruction ',
    parentId: '61162',
  },
  {
    id: '611630',
    name: 'Language Schools ',
    parentId: '61163',
  },
  {
    id: '611691',
    name: 'Exam Preparation and Tutoring ',
    parentId: '61169',
  },
  {
    id: '611692',
    name: 'Automobile Driving Schools ',
    parentId: '61169',
  },
  {
    id: '611699',
    name: 'All Other Miscellaneous Schools and Instruction ',
    parentId: '61169',
  },
  {
    id: '611710',
    name: 'Educational Support Services',
    parentId: '61171',
  },
  {
    id: '621111',
    name: 'Offices of Physicians (except Mental Health Specialists) ',
    parentId: '62111',
  },
  {
    id: '621112',
    name: 'Offices of Physicians, Mental Health Specialists ',
    parentId: '62111',
  },
  {
    id: '621210',
    name: 'Offices of Dentists ',
    parentId: '62121',
  },
  {
    id: '621310',
    name: 'Offices of Chiropractors ',
    parentId: '62131',
  },
  {
    id: '621320',
    name: 'Offices of Optometrists',
    parentId: '62132',
  },
  {
    id: '621330',
    name: 'Offices of Mental Health Practitioners (except Physicians) ',
    parentId: '62133',
  },
  {
    id: '621340',
    name: 'Offices of Physical, Occupational and Speech Therapists, and Audiologists ',
    parentId: '62134',
  },
  {
    id: '621391',
    name: 'Offices of Podiatrists ',
    parentId: '62139',
  },
  {
    id: '621399',
    name: 'Offices of All Other Miscellaneous Health Practitioners ',
    parentId: '62139',
  },
  {
    id: '621410',
    name: 'Family Planning Centers ',
    parentId: '62141',
  },
  {
    id: '621420',
    name: 'Outpatient Mental Health and Substance Abuse Centers ',
    parentId: '62142',
  },
  {
    id: '621491',
    name: 'HMO Medical Centers ',
    parentId: '62149',
  },
  {
    id: '621492',
    name: 'Kidney Dialysis Centers ',
    parentId: '62149',
  },
  {
    id: '621493',
    name: 'Freestanding Ambulatory Surgical and Emergency Centers ',
    parentId: '62149',
  },
  {
    id: '621498',
    name: 'All Other Outpatient Care Centers ',
    parentId: '62149',
  },
  {
    id: '621511',
    name: 'Medical Laboratories ',
    parentId: '62151',
  },
  {
    id: '621512',
    name: 'Diagnostic Imaging Centers ',
    parentId: '62151',
  },
  {
    id: '621610',
    name: 'Home Health Care Services',
    parentId: '62161',
  },
  {
    id: '621910',
    name: 'Ambulance Services ',
    parentId: '62191',
  },
  {
    id: '621991',
    name: 'Blood and Organ Banks ',
    parentId: '62199',
  },
  {
    id: '621999',
    name: 'All Other Miscellaneous Ambulatory Health Care Services ',
    parentId: '62199',
  },
  {
    id: '622110',
    name: 'General Medical and Surgical Hospitals ',
    parentId: '62211',
  },
  {
    id: '622210',
    name: 'Psychiatric and Substance Abuse Hospitals ',
    parentId: '62221',
  },
  {
    id: '622310',
    name: 'Specialty (except Psychiatric and Substance Abuse) Hospitals ',
    parentId: '62231',
  },
  {
    id: '623110',
    name: 'Nursing Care Facilities (Skilled Nursing Facilities) ',
    parentId: '62311',
  },
  {
    id: '623210',
    name: 'Residential Intellectual and Developmental Disability Facilities ',
    parentId: '62321',
  },
  {
    id: '623220',
    name: 'Residential Mental Health and Substance Abuse Facilities ',
    parentId: '62322',
  },
  {
    id: '623311',
    name: 'Continuing Care Retirement Communities ',
    parentId: '62331',
  },
  {
    id: '623312',
    name: 'Assisted Living Facilities for the Elderly ',
    parentId: '62331',
  },
  {
    id: '623990',
    name: 'Other Residential Care Facilities ',
    parentId: '62399',
  },
  {
    id: '624110',
    name: 'Child and Youth Services ',
    parentId: '62411',
  },
  {
    id: '624120',
    name: 'Services for the Elderly and Persons with Disabilities ',
    parentId: '62412',
  },
  {
    id: '624190',
    name: 'Other Individual and Family Services ',
    parentId: '62419',
  },
  {
    id: '624210',
    name: 'Community Food Services ',
    parentId: '62421',
  },
  {
    id: '624221',
    name: 'Temporary Shelters ',
    parentId: '62422',
  },
  {
    id: '624229',
    name: 'Other Community Housing Services ',
    parentId: '62422',
  },
  {
    id: '624230',
    name: 'Emergency and Other Relief Services ',
    parentId: '62423',
  },
  {
    id: '624310',
    name: 'Vocational Rehabilitation Services ',
    parentId: '62431',
  },
  {
    id: '624410',
    name: 'Child Care Services ',
    parentId: '62441',
  },
  {
    id: '711110',
    name: 'Theater Companies and Dinner Theaters ',
    parentId: '71111',
  },
  {
    id: '711120',
    name: 'Dance Companies ',
    parentId: '71112',
  },
  {
    id: '711130',
    name: 'Musical Groups and Artists ',
    parentId: '71113',
  },
  {
    id: '711190',
    name: 'Other Performing Arts Companies ',
    parentId: '71119',
  },
  {
    id: '711211',
    name: 'Sports Teams and Clubs ',
    parentId: '71121',
  },
  {
    id: '711212',
    name: 'Racetracks ',
    parentId: '71121',
  },
  {
    id: '711219',
    name: 'Other Spectator Sports ',
    parentId: '71121',
  },
  {
    id: '711310',
    name: 'Promoters of Performing Arts, Sports, and Similar Events with Facilities ',
    parentId: '71131',
  },
  {
    id: '711320',
    name: 'Promoters of Performing Arts, Sports, and Similar Events without Facilities ',
    parentId: '71132',
  },
  {
    id: '711410',
    name: 'Agents and Managers for Artists, Athletes, Entertainers, and Other Public Figures',
    parentId: '71141',
  },
  {
    id: '711510',
    name: 'Independent Artists, Writers, and Performers ',
    parentId: '71151',
  },
  {
    id: '712110',
    name: 'Museums ',
    parentId: '71211',
  },
  {
    id: '712120',
    name: 'Historical Sites',
    parentId: '71212',
  },
  {
    id: '712130',
    name: 'Zoos and Botanical Gardens ',
    parentId: '71213',
  },
  {
    id: '712190',
    name: 'Nature Parks and Other Similar Institutions',
    parentId: '71219',
  },
  {
    id: '713110',
    name: 'Amusement and Theme Parks ',
    parentId: '71311',
  },
  {
    id: '713120',
    name: 'Amusement Arcades',
    parentId: '71312',
  },
  {
    id: '713210',
    name: 'Casinos (except Casino Hotels)',
    parentId: '71321',
  },
  {
    id: '713290',
    name: 'Other Gambling Industries ',
    parentId: '71329',
  },
  {
    id: '713910',
    name: 'Golf Courses and Country Clubs',
    parentId: '71391',
  },
  {
    id: '713920',
    name: 'Skiing Facilities',
    parentId: '71392',
  },
  {
    id: '713930',
    name: 'Marinas',
    parentId: '71393',
  },
  {
    id: '713940',
    name: 'Fitness and Recreational Sports Centers ',
    parentId: '71394',
  },
  {
    id: '713950',
    name: 'Bowling Centers',
    parentId: '71395',
  },
  {
    id: '713990',
    name: 'All Other Amusement and Recreation Industries ',
    parentId: '71399',
  },
  {
    id: '721110',
    name: 'Hotels (except Casino Hotels) and Motels ',
    parentId: '72111',
  },
  {
    id: '721120',
    name: 'Casino Hotels',
    parentId: '72112',
  },
  {
    id: '721191',
    name: 'Bed-and-Breakfast Inns ',
    parentId: '72119',
  },
  {
    id: '721199',
    name: 'All Other Traveler Accommodation ',
    parentId: '72119',
  },
  {
    id: '721211',
    name: 'RV (Recreational Vehicle) Parks and Campgrounds ',
    parentId: '72121',
  },
  {
    id: '721214',
    name: 'Recreational and Vacation Camps (except Campgrounds) ',
    parentId: '72121',
  },
  {
    id: '721310',
    name: "Rooming and Boarding Houses, Dormitories, and Workers' Camps ",
    parentId: '72131',
  },
  {
    id: '722310',
    name: 'Food Service Contractors',
    parentId: '72231',
  },
  {
    id: '722320',
    name: 'Caterers',
    parentId: '72232',
  },
  {
    id: '722330',
    name: 'Mobile Food Services',
    parentId: '72233',
  },
  {
    id: '722410',
    name: 'Drinking Places (Alcoholic Beverages) ',
    parentId: '72241',
  },
  {
    id: '722511',
    name: 'Full-Service Restaurants ',
    parentId: '72251',
  },
  {
    id: '722513',
    name: 'Limited-Service Restaurants ',
    parentId: '72251',
  },
  {
    id: '722514',
    name: 'Cafeterias, Grill Buffets, and Buffets ',
    parentId: '72251',
  },
  {
    id: '722515',
    name: 'Snack and Nonalcoholic Beverage Bars ',
    parentId: '72251',
  },
  {
    id: '811111',
    name: 'General Automotive Repair ',
    parentId: '81111',
  },
  {
    id: '811114',
    name: 'Specialized Automotive Repair ',
    parentId: '81111',
  },
  {
    id: '811121',
    name: 'Automotive Body, Paint, and Interior Repair and Maintenance ',
    parentId: '81112',
  },
  {
    id: '811122',
    name: 'Automotive Glass Replacement Shops ',
    parentId: '81112',
  },
  {
    id: '811191',
    name: 'Automotive Oil Change and Lubrication Shops ',
    parentId: '81119',
  },
  {
    id: '811192',
    name: 'Car Washes ',
    parentId: '81119',
  },
  {
    id: '811198',
    name: 'All Other Automotive Repair and Maintenance ',
    parentId: '81119',
  },
  {
    id: '811210',
    name: 'Electronic and Precision Equipment Repair and Maintenance ',
    parentId: '81121',
  },
  {
    id: '811310',
    name: 'Commercial and Industrial Machinery and Equipment (except Automotive and Electronic) Repair and Maintenance ',
    parentId: '81131',
  },
  {
    id: '811411',
    name: 'Home and Garden Equipment Repair and Maintenance ',
    parentId: '81141',
  },
  {
    id: '811412',
    name: 'Appliance Repair and Maintenance ',
    parentId: '81141',
  },
  {
    id: '811420',
    name: 'Reupholstery and Furniture Repair',
    parentId: '81142',
  },
  {
    id: '811430',
    name: 'Footwear and Leather Goods Repair',
    parentId: '81143',
  },
  {
    id: '811490',
    name: 'Other Personal and Household Goods Repair and Maintenance ',
    parentId: '81149',
  },
  {
    id: '812111',
    name: 'Barber Shops ',
    parentId: '81211',
  },
  {
    id: '812112',
    name: 'Beauty Salons ',
    parentId: '81211',
  },
  {
    id: '812113',
    name: 'Nail Salons ',
    parentId: '81211',
  },
  {
    id: '812191',
    name: 'Diet and Weight Reducing Centers ',
    parentId: '81219',
  },
  {
    id: '812199',
    name: 'Other Personal Care Services ',
    parentId: '81219',
  },
  {
    id: '812210',
    name: 'Funeral Homes and Funeral Services ',
    parentId: '81221',
  },
  {
    id: '812220',
    name: 'Cemeteries and Crematories ',
    parentId: '81222',
  },
  {
    id: '812310',
    name: 'Coin-Operated Laundries and Drycleaners ',
    parentId: '81231',
  },
  {
    id: '812320',
    name: 'Drycleaning and Laundry Services (except Coin-Operated) ',
    parentId: '81232',
  },
  {
    id: '812331',
    name: 'Linen Supply ',
    parentId: '81233',
  },
  {
    id: '812332',
    name: 'Industrial Launderers ',
    parentId: '81233',
  },
  {
    id: '812910',
    name: 'Pet Care (except Veterinary) Services ',
    parentId: '81291',
  },
  {
    id: '812921',
    name: 'Photofinishing Laboratories (except One-Hour) ',
    parentId: '81292',
  },
  {
    id: '812922',
    name: 'One-Hour Photofinishing ',
    parentId: '81292',
  },
  {
    id: '812930',
    name: 'Parking Lots and Garages ',
    parentId: '81293',
  },
  {
    id: '812990',
    name: 'All Other Personal Services ',
    parentId: '81299',
  },
  {
    id: '813110',
    name: 'Religious Organizations ',
    parentId: '81311',
  },
  {
    id: '813211',
    name: 'Grantmaking Foundations ',
    parentId: '81321',
  },
  {
    id: '813212',
    name: 'Voluntary Health Organizations ',
    parentId: '81321',
  },
  {
    id: '813219',
    name: 'Other Grantmaking and Giving Services ',
    parentId: '81321',
  },
  {
    id: '813311',
    name: 'Human Rights Organizations ',
    parentId: '81331',
  },
  {
    id: '813312',
    name: 'Environment, Conservation and Wildlife Organizations ',
    parentId: '81331',
  },
  {
    id: '813319',
    name: 'Other Social Advocacy Organizations ',
    parentId: '81331',
  },
  {
    id: '813410',
    name: 'Civic and Social Organizations ',
    parentId: '81341',
  },
  {
    id: '813910',
    name: 'Business Associations ',
    parentId: '81391',
  },
  {
    id: '813920',
    name: 'Professional Organizations ',
    parentId: '81392',
  },
  {
    id: '813930',
    name: 'Labor Unions and Similar Labor Organizations ',
    parentId: '81393',
  },
  {
    id: '813940',
    name: 'Political Organizations ',
    parentId: '81394',
  },
  {
    id: '813990',
    name: 'Other Similar Organizations (except Business, Professional, Labor, and Political Organizations) ',
    parentId: '81399',
  },
  {
    id: '814110',
    name: 'Private Households',
    parentId: '81411',
  },
  {
    id: '921110',
    name: 'Executive Offices ',
    parentId: '92111',
  },
  {
    id: '921120',
    name: 'Legislative Bodies ',
    parentId: '92112',
  },
  {
    id: '921130',
    name: 'Public Finance Activities ',
    parentId: '92113',
  },
  {
    id: '921140',
    name: 'Executive and Legislative Offices, Combined ',
    parentId: '92114',
  },
  {
    id: '921150',
    name: 'American Indian and Alaska Native Tribal Governments ',
    parentId: '92115',
  },
  {
    id: '921190',
    name: 'Other General Government Support ',
    parentId: '92119',
  },
  {
    id: '922110',
    name: 'Courts ',
    parentId: '92211',
  },
  {
    id: '922120',
    name: 'Police Protection ',
    parentId: '92212',
  },
  {
    id: '922130',
    name: 'Legal Counsel and Prosecution ',
    parentId: '92213',
  },
  {
    id: '922140',
    name: 'Correctional Institutions ',
    parentId: '92214',
  },
  {
    id: '922150',
    name: 'Parole Offices and Probation Offices ',
    parentId: '92215',
  },
  {
    id: '922160',
    name: 'Fire Protection ',
    parentId: '92216',
  },
  {
    id: '922190',
    name: 'Other Justice, Public Order, and Safety Activities ',
    parentId: '92219',
  },
  {
    id: '923110',
    name: 'Administration of Education Programs ',
    parentId: '92311',
  },
  {
    id: '923120',
    name: 'Administration of Public Health Programs ',
    parentId: '92312',
  },
  {
    id: '923130',
    name: "Administration of Human Resource Programs (except Education, Public Health, and Veterans' Affairs Programs) ",
    parentId: '92313',
  },
  {
    id: '923140',
    name: "Administration of Veterans' Affairs ",
    parentId: '92314',
  },
  {
    id: '924110',
    name: 'Administration of Air and Water Resource and Solid Waste Management Programs ',
    parentId: '92411',
  },
  {
    id: '924120',
    name: 'Administration of Conservation Programs ',
    parentId: '92412',
  },
  {
    id: '925110',
    name: 'Administration of Housing Programs ',
    parentId: '92511',
  },
  {
    id: '925120',
    name: 'Administration of Urban Planning and Community and Rural Development ',
    parentId: '92512',
  },
  {
    id: '926110',
    name: 'Administration of General Economic Programs ',
    parentId: '92611',
  },
  {
    id: '926120',
    name: 'Regulation and Administration of Transportation Programs ',
    parentId: '92612',
  },
  {
    id: '926130',
    name: 'Regulation and Administration of Communications, Electric, Gas, and Other Utilities ',
    parentId: '92613',
  },
  {
    id: '926140',
    name: 'Regulation of Agricultural Marketing and Commodities ',
    parentId: '92614',
  },
  {
    id: '926150',
    name: 'Regulation, Licensing, and Inspection of Miscellaneous Commercial Sectors ',
    parentId: '92615',
  },
  {
    id: '927110',
    name: 'Space Research and Technology ',
    parentId: '92711',
  },
  {
    id: '928110',
    name: 'National Security ',
    parentId: '92811',
  },
  {
    id: '928120',
    name: 'International Affairs ',
    parentId: '92812',
  },
  {
    id: '31',
    name: 'Manufacturing',
  },
  {
    id: '32',
    name: 'Manufacturing',
  },
  {
    id: '33',
    name: 'Manufacturing',
  },
  {
    id: '44',
    name: 'Retail Trade',
  },
  {
    id: '45',
    name: 'Retail Trade',
  },
  {
    id: '48',
    name: 'Transportation and Warehousing',
  },
  {
    id: '49',
    name: 'Transportation and Warehousing',
  },
];
