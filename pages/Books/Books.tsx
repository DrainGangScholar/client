import { Flex } from "antd";
import React from "react";
import BookTable from "../../components/BookTable"

interface BookProps {
};
const Books: React.FC<BookProps> = () => {


    return (
            < Flex justify='center' align='center' >
                <BookTable></BookTable>
            </Flex >
    );
};
export default Books;
