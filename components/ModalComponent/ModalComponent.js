import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Lorem,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { onOpen, onClose } from "../../redux/slices/modalSlice";

function ModalComponent() {
  //  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state);
  console.log(modal.isOpen);

  return (
    <>
      {/* <Button onClick={()=>dispatch(onOpen())}>Open Modal</Button> */}

      <Modal isOpen={modal.isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modal.title}</ModalHeader>
          <ModalBody>{modal.description}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => dispatch(onClose())}
            >
              Close
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
