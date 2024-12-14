import { useQuery } from "@tanstack/react-query";
import { Alert, Button, Flex, Modal, Spin, Table } from "antd";
import React, { useState } from "react";
import { Book, getAllBooks } from '../services/books';
import CreateBookForm from "./CreateBookForm";
import UpdateBookForm from "./UpdateBookForm";

interface BookTableProps { }

const BookTable: React.FC<BookTableProps> = () => {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
    const showCreateModal = () => setIsCreateModalOpen(true);
    const hideCreateModal = () => setIsCreateModalOpen(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const showEditModal = () => setIsEditModalOpen(true);
    const hideEditModal = () => setIsEditModalOpen(false);

    const [selectedRecord, setSelectedRecord] = useState<Book>();
    const handleEdit = (record: Book) => {
        setSelectedRecord(record);
        showEditModal();
    }

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
        {
            title: 'Actions',
            key: 'actions',
            render: (record: any) => (
                <>
                    <Button onClick={() => { handleEdit(record) }}>Edit</Button>
                </>
            ),
        }
    ];

    const { data, isSuccess, isError, isLoading } = useQuery({
        queryKey: ['books'],
        queryFn: getAllBooks
    });

    if (isLoading) return <Spin />;
    if (isError) return <Alert type="error" message="An error has occurred..." />;

    return (
        <Flex gap="middle" vertical>
            <Button onClick={showCreateModal} type="primary">Napravi knjigu</Button>
            {isSuccess && (
                <Table
                    columns={columns}
                    rowClassName={(record) => record.isBorrowed ? 'borrowed' : 'default'}
                    dataSource={data.map(item => ({ ...item, key: item.id }))}
                    pagination={{ position: ['topCenter'] }}
                />
            )}
            {isCreateModalOpen && (
                <Modal
                    title="Napravi novu knjigu"
                    open={isCreateModalOpen}
                    onCancel={hideCreateModal}
                    footer={null}
                >
                    <CreateBookForm onSuccess={hideCreateModal} />
                </Modal>
            )}
            {isEditModalOpen && (
                <Modal
                    title="Edit Book"
                    open={isEditModalOpen}
                    onCancel={hideEditModal}
                    footer={null}
                >
                    <UpdateBookForm onSuccess={hideEditModal} initialValues={selectedRecord} />
                </Modal>
            )}
        </Flex>
    );
}

export default BookTable;

