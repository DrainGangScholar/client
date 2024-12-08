import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import React from "react";
import { CreateBook, createBook, getAllBooks } from "../services/books";

interface CreateBookFormProps {
    onSuccess: () => void;
}

const CreateBookForm: React.FC<CreateBookFormProps> = ({ onSuccess }) => {
    const queryClient = useQueryClient();
    const [form] = Form.useForm();
    const handleSubmit = (values: CreateBook) => {
        mutation.mutate(values);
        queryClient.invalidateQueries({ queryKey: ['books'] })
        form.resetFields();
        onSuccess();
    }
    const mutation = useMutation({
        mutationFn: (request: CreateBook) => {
            return createBook(request);
        }
    });
    return (
        <Form form={form} onFinish={handleSubmit}>
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
    );
};

export default CreateBookForm;
