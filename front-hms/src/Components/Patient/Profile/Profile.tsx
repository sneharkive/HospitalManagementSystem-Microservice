import {
  Avatar,
  Divider,
  Paper,
  Table,
  Button,
  TextInput,
  NumberInput,
  Select,
  TagsInput,
  Modal,
} from "@mantine/core";
import { IconCamera, IconDeviceFloppy, IconEdit } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DateInput } from "@mantine/dates";
import { bloodGroup } from "../../../Data/DropdownData";
import { useDisclosure } from "@mantine/hooks";
// import { getPatient } from "../../../Service/PatientProfileSeervice";

const patient = {
  name: "Sneha Roy",
  email: "sneha.roy@example.com",
  dob: "2003-01-25",
  phone: "+91 98765 43210",
  address: "123 Park Street, Kolkata, West Bengal",
  aadhaarNo: "1234-5678-9012",
  bloodGroup: "B+",
  allergies: "Penicillin",
  chronicDisease: "Asthma",
};

const Profile = () => {
  const user = useSelector((state: any) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [opened, {open, close}] = useDisclosure(false);
  const [profile, setProfile] = useState({});

  // useEffect(() => {
  //   console.log(user)
  //   getPatient(user.profileId).then((data) => {
  //     setProfile(data);
  //     console.log(data);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }, []);

  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="flex flex-col items-center gap-3">
            <Avatar
              variant="filled"
              src="/avatar.png"
              size={150}
              alt="My Profile"
            />

            {editMode && <Button
              // onClick={open}
              variant="filled"
              size="sm"
              leftSection={<IconCamera />}
            >
              Upload
            </Button>}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-medium text-neutral-900">
              {user.name}
            </div>
            <div className="text-xl text-neutral-700">{user.email}</div>
          </div>
        </div>

        {!editMode ? (
          <Button
            onClick={() => setEditMode(true)}
            variant="filled"
            size="md"
            leftSection={<IconEdit />}
          >
            Edit
          </Button>
        ) : (
          <Button
            onClick={() => setEditMode(false)}
            variant="filled"
            size="md"
            leftSection={<IconDeviceFloppy />}
          >
            Save
          </Button>
        )}
      </div>
      <Divider my="xl" />

      <div>
        <div className="text-2xl font-medium text-neutral-900">
          Personal Information
        </div>

        <Paper shadow="sm" radius="md" p="md" withBorder>
          <Table
            striped
            stripedColor="primary.2"
            verticalSpacing="sm"
            highlightOnHover
            withRowBorders={false}
          >
            <Table.Tbody>
              <Table.Tr>
                <Table.Td className="text-md font-medium">
                  Date of Birth
                </Table.Td>
                {editMode ? (
                  <Table.Td>
                    <DateInput placeholder="Date Of Birth" />
                  </Table.Td>
                ) : (
                  <Table.Td>{patient.dob}</Table.Td>
                )}
              </Table.Tr>

              <Table.Tr>
                <Table.Td className="text-md font-medium">Phone</Table.Td>
                {editMode ? (
                  <Table.Td>
                    <NumberInput
                      maxLength={10}
                      clampBehavior="strict"
                      hideControls
                      placeholder="Phone No."
                    />
                  </Table.Td>
                ) : (
                  <Table.Td>{patient.phone}</Table.Td>
                )}
              </Table.Tr>

              <Table.Tr>
                <Table.Td className="text-md font-medium">Address</Table.Td>
                {editMode ? (
                  <Table.Td>
                    <TextInput placeholder="Address" />
                  </Table.Td>
                ) : (
                  <Table.Td>{patient.address}</Table.Td>
                )}
              </Table.Tr>

              <Table.Tr>
                <Table.Td className="text-md font-medium">Aadhaar No</Table.Td>
                {editMode ? (
                  <Table.Td>
                    <NumberInput
                      maxLength={12}
                      clampBehavior="strict"
                      hideControls
                      placeholder="Aadhaar No."
                    />
                  </Table.Td>
                ) : (
                  <Table.Td>{patient.aadhaarNo}</Table.Td>
                )}
              </Table.Tr>

              <Table.Tr>
                <Table.Td className="text-md font-medium">Blood Group</Table.Td>
                {editMode ? (
                  <Table.Td>
                    <Select data={bloodGroup} placeholder="Blood Group" />
                  </Table.Td>
                ) : (
                  <Table.Td>{patient.bloodGroup}</Table.Td>
                )}
              </Table.Tr>

              <Table.Tr>
                <Table.Td className="text-md font-medium">Allergies</Table.Td>
                {editMode ? (
                  <Table.Td>
                    <TagsInput placeholder="Allergies Separated By Comma" />
                  </Table.Td>
                ) : (
                  <Table.Td>{patient.allergies}</Table.Td>
                )}
              </Table.Tr>

              <Table.Tr>
                <Table.Td className="text-md font-medium">
                  Chronic Disease
                </Table.Td>
                {editMode ? (
                  <Table.Td>
                    <TagsInput placeholder=" Chronic Disease Separated By Comma" />
                  </Table.Td>
                ) : (
                  <Table.Td>{patient.chronicDisease}</Table.Td>
                )}
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </div>

      <Modal centered title={<span className="text-xl font-medium">Upload Profile Picture</span>} opened={opened} onClose={close} >
         
      </Modal>
    </div>
  );
};

export default Profile;
