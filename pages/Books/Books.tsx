import { Button, Flex, Modal } from "antd";
import React from "react";
import { useState } from "react";
import BookTable from "../../components/BookTable"
import CreateBookForm from "../../components/CreateBookForm"

interface BookProps {
};
const Books: React.FC<BookProps> = () => {


    return (
        <Flex justify='center' align='center' vertical={true} >
            < Flex justify='center' align='center' >
                <BookTable></BookTable>
            </Flex >

        </Flex>
    );
};
export default Books;
