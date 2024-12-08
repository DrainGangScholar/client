import { useQuery } from '@tanstack/react-query';
import { Alert, Button, Flex, Layout, Modal, Spin, Table } from 'antd'
import { getAllBooks } from '../services/books'
import { useState } from 'react';
import CreateBookForm from '../components/CreateBookForm'
function App() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
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

    const showCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const hideCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const { data, isSuccess, isError, isLoading } = useQuery({ queryKey: ['books'], queryFn: getAllBooks });
    if (isLoading) return <Spin></Spin>;
    if (isError) return <Alert type='error' message="An error has occured..."></Alert>;

    return (
        <>
            <Layout.Header>
                <Flex justify='center' align='center' style={{ height: '64px' }}>
                    <Button onClick={showCreateModal}>Create Book</Button>
                </Flex>
            </Layout.Header>
            {isSuccess && (
                <Flex justify='center' align='center'>
                    <Table
                        columns={columns}
                        dataSource={data.map(item => ({ ...item, key: item.id }))}
                        pagination={{ position: ['topCenter'] }}>
                    </Table>
                </Flex >
            )}
            {
                isCreateModalOpen && (
                    <Modal
                        title="Create New Book"
                        open={isCreateModalOpen}
                        onCancel={hideCreateModal}
                        footer={null}
                    >
                        <CreateBookForm onSuccess={hideCreateModal} />
                    </Modal>
                )
            }
        </>
    )
}

export default App
