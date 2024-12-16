import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { CreateBook, createBook } from "../services/books";
import { AxiosError } from "axios";

interface CreateBookFormProps {
    onSuccess: () => void;
}

const CreateBookForm: React.FC<CreateBookFormProps> = ({ onSuccess }) => {
    const queryClient = useQueryClient();
    const [form] = Form.useForm();
    const handleSubmit = (values: CreateBook) => {
        mutation.mutate(values);
    }
    const mutation = useMutation({
        mutationFn: createBook,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] })
            onSuccess();
        },
        onError: (err: AxiosError) => {
            console.error(err);
        }
    });

    return (
        <>
            <Typography.Title level={4} style={{ textAlign: 'center' }}> Napravi novu knjigu</Typography.Title>
            <Form form={form} labelCol={{ span: 5 }} onFinish={handleSubmit}>
                <Form.Item
                    label="ISBN"
                    name="isbn"
                    rules={[{ required: true, message: 'Please input ISBN!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input Description!' }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CreateBookForm;
