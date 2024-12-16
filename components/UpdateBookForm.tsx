import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import React from "react";
import { UpdateBook, updateBook } from "../services/books";
import { AxiosError } from "axios";

interface UpdateBookFormProps {
    onSuccess: () => void;
    initialValues?: UpdateBook;
}

const UpdateBookForm: React.FC<UpdateBookFormProps> = ({ onSuccess, initialValues}) => {
    const queryClient = useQueryClient();
    const [form] = Form.useForm();
    const handleSubmit = (values: UpdateBook) => {
        mutation.mutate(values);
    }
    const mutation = useMutation({
        mutationFn: updateBook,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] })
            onSuccess();
        },
        onError: (err: AxiosError) => {
            console.error(err);
        }
    });

    return (
        <Form form={form} onFinish={handleSubmit} initialValues={initialValues }>
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
                <Input.TextArea/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};
export default UpdateBookForm;
