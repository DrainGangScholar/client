import { Button, Flex, Layout, Table } from 'antd'
function App() {
    const columns = [
        {
            title: 'ISBN',
            dataIndex: 'isbn',
            key: 'isbn',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ];

    const data = [
        { id: 'f3d24987-2e9a-4f50-8fb1-8b33a58d72f0', name: 'Wireless Steel Table', description: 'A wireless steel table with adjustable height', isbn: '1a16b357-6ac9-433b-bc45-08e5a465de89', isBorrowed: true },
        { id: '96c9e604-7061-4df9-a9ae-6846f680c6b8', name: 'Gourmet Soft Shirt', description: 'Soft shirt for gourmet lovers', isbn: '2f5ac9be-fb10-4c5c-b6a7-b8b16a5b6a55', isBorrowed: false },
        { id: '51b58f68-b564-4d8f-b8f0-becb16c78f57', name: 'Organic Cotton Sweater', description: 'Soft organic cotton sweater', isbn: '3c6e0629-d115-4963-a55a-9b4389419a3a', isBorrowed: true },
        { id: 'ed2d5779-b39a-402d-952b-dafc88e8ff0b', name: 'Handcrafted Wooden Shelf', description: 'Beautiful handcrafted wooden shelf', isbn: '4e2fcde2-3788-4cdb-8232-4bc98b9793e3', isBorrowed: false },
        { id: 'f7e2e60c-cc27-4e19-a338-90712b9ac96a', name: 'Classic Fabric Hat', description: 'Classic fabric hat with a timeless design', isbn: '5f122d6f-467b-4db7-9f7d-8242541c84e9', isBorrowed: true },
        { id: 'f269a3d7-41ae-4b77-b833-bf83161a61c5', name: 'Eco-Friendly Backpack', description: 'Eco-friendly backpack made from recycled materials', isbn: '6b742aa9-7411-4c3c-ae9b-18f8bba3fbd6', isBorrowed: false },
        { id: '59d83fd3-5ab7-4b76-9536-d129b3421d68', name: 'Smartphone Stand', description: 'Adjustable smartphone stand for desk', isbn: '7c3888b7-f617-4e89-b8ac-b9e6ab04d118', isBorrowed: true },
        { id: 'd3da05c4-cbe1-43d1-8c56-9d6dbe2c2387', name: 'Vintage Radio', description: 'A vintage radio with modern functionality', isbn: '8b1f7d89-e033-4e94-b97c-4e056cc0f2ba', isBorrowed: true },
        { id: '265d4f1f-cb2b-4b4f-bbba-9ff2d989ba13', name: 'Modern Desk Lamp', description: 'Modern desk lamp with adjustable brightness', isbn: '9b7e9ef0-bec9-4568-b390-21b5da82a10c', isBorrowed: false },
        { id: 'bb4392e2-d8f4-4f4b-8fd5-3d7d37f76d37', name: 'Leather Journal', description: 'Premium leather journal with high-quality pages', isbn: 'a0e0c8d8-b8b5-4f0a-9fd4-d623b3fdb970', isBorrowed: true },
        { id: 'ca428d5b-33ba-48e5-8357-bfe9817078fc', name: 'Silk Scarf', description: 'Soft and luxurious silk scarf for all seasons', isbn: 'b6f4b15d-d83d-4ed3-9e9f-ccab62a24325', isBorrowed: false },
        { id: 'e59964b5-d52d-4844-9e9f-e91f2e7d39f2', name: 'Handmade Ceramic Mug', description: 'Beautiful handmade ceramic mug', isbn: 'c05c5f1b-c5e2-41c4-b81d-85c4de0b3b6e', isBorrowed: true },
        { id: '4b682cd3-d5bb-4083-b24f-3349ec9ac440', name: 'Smart Home Speaker', description: 'Smart speaker with voice assistant and music streaming', isbn: 'd8cf0c24-5d76-4d47-bd07-b9d967e8f10a', isBorrowed: false },
        { id: 'c01924f2-d47d-417e-922f-d9c67f87f9d4', name: 'Outdoor Portable Grill', description: 'Portable outdoor grill for your camping needs', isbn: 'e4be156d-59a6-4094-81c1-e3460d660022', isBorrowed: true },
        { id: 'dc8394b2-d27e-42c1-9b0b-d1c438b500d9', name: 'Rustic Wooden Chair', description: 'Rustic wooden chair perfect for any space', isbn: 'f0bde4ec-c568-46f9-9a3f-e89637a51b70', isBorrowed: false },
        { id: '9f830124-c90b-41c0-86e6-1c649c8f75cc', name: 'Glass Coffee Table', description: 'Elegant glass coffee table for modern interiors', isbn: 'f528cb36-13d7-43ad-94f3-f0dfda84b845', isBorrowed: true },
        { id: '52b8feab-7a07-4290-b407-0533b233c12a', name: 'Stainless Steel Thermos', description: 'Durable stainless steel thermos for keeping drinks hot or cold', isbn: '2ed60b79-92a7-4060-84db-99b8ffafbb09', isBorrowed: false },
        { id: '746f8b92-1bbd-48a0-bb32-53568913c5a4', name: 'Leather Wallet', description: 'High-quality leather wallet with multiple compartments', isbn: 'ce087b2b-9e4c-49b8-9ef8-24de77592c84', isBorrowed: true },
        { id: 'fd9b2920-25c9-48cc-9e8f-85530365b220', name: 'Bluetooth Earbuds', description: 'Wireless Bluetooth earbuds with noise cancellation', isbn: 'dd72ab67-f702-42b2-b9fc-36f084e09c70', isBorrowed: false },
        { id: 'e4c34443-9c67-4d38-84a5-d512080b9be7', name: 'Soft Plush Blanket', description: 'Extra-soft plush blanket for cozy nights', isbn: '67c06ac1-9a2b-4e6a-bd7c-e8463e7bb24e', isBorrowed: true },
        { id: '6a22fba7-9e87-46ff-b6db-98c0be21b5b3', name: 'Wooden Coffee Spoon', description: 'Handcrafted wooden coffee spoon for stirring', isbn: '9a41e5bb-f8b3-46a7-9f7e-5a1a9c1a0ef9', isBorrowed: false },
        { id: '1a3bc466-8978-4d79-a13c-b92a413453ae', name: 'Travel Neck Pillow', description: 'Memory foam travel neck pillow for comfort on the go', isbn: 'c91f9e53-2cb7-47f5-9ff7-d1c32d98e7d1', isBorrowed: true },
        { id: '255ba4c3-b4fc-4de0-a29a-93da80330b4a', name: 'Laptop Stand', description: 'Adjustable laptop stand for ergonomic use', isbn: 'c61cc91e-d2f1-4297-b87a-e4be9cfd5107', isBorrowed: false },
        { id: 'eb40734f-34ae-4c0d-9f23-bd7a68a1951f', name: 'Eco-friendly Toothbrush', description: 'Bamboo toothbrush with soft bristles', isbn: 'd2f938fd-3d3c-4661-b9a6-b14d634eb015', isBorrowed: true }
    ];
    return (
        <>
            <Layout.Header>
                <Flex justify='center' align='center' style={{ height: '64px' }}>
                    <Button onClick={() => console.log('Goodbye')}>KLIKNI ME</Button>
                </Flex>
            </Layout.Header>
            <Flex justify='center' align='center'>
                <Table columns={columns} dataSource={data} pagination={{position:['topCenter']}}></Table>
            </Flex>
        </>
    )
}

export default App
