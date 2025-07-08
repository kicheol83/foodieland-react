import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import { useGlobals } from "../../hooks/useGlobal";
import { useState } from "react";
import { MemberUpdate } from "../../../libs/types/member";
import { T } from "../../../libs/types/common";
import { Messages, serverApi } from "../../../libs/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../libs/sweetAlert";
import MemberService from "../../services/MemberService";

export function Settings() {
  const { authMember, setAuthMember } = useGlobals();
  const [memberImage, setMemberImage] = useState<string>(
    authMember?.memberImage
      ? `${serverApi}/${authMember.memberImage}`
      : "/icons/default-user.svg"
  );

  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdate>({
    memberNick: authMember?.memberNick,
    memberPhone: authMember?.memberPhone,
    memberEmail: authMember?.memberEmail,
    memberAddress: authMember?.memberAddress,
    memberDesc: authMember?.memberDesc,
    memberImage: authMember?.memberImage,
  });

  /** HANDLERS **/

  const memberNickHandler = (e: T) => {
    memberUpdateInput.memberNick = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberPhoneHandler = (e: T) => {
    memberUpdateInput.memberPhone = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberEmailHandler = (e: T) => {
    memberUpdateInput.memberEmail = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberAddressHandler = (e: T) => {
    memberUpdateInput.memberAddress = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberDescHandler = (e: T) => {
    memberUpdateInput.memberDesc = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberImageHandler = (e: T) => {
    memberUpdateInput.memberImage = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleImageView = (e: T) => {
    const file = e.target.files[0];
    console.log("file:", file);
    const fileType = file.type,
      validateImagesTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (!validateImagesTypes.includes(fileType)) {
      sweetErrorHandling(Messages.error5).then();
    } else {
      if (file) {
        memberUpdateInput.memberImage = file;
        setMemberUpdateInput({ ...memberUpdateInput });
        setMemberImage(URL.createObjectURL(file));
      }
    }
  };

  const handleSubmitButton = async () => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      if (
        memberUpdateInput.memberNick === "" ||
        memberUpdateInput.memberPhone === "" ||
        memberUpdateInput.memberEmail === "" ||
        memberUpdateInput.memberAddress === "" ||
        memberUpdateInput.memberDesc === ""
      ) {
        throw new Error(Messages.error3);
      }

      const member = new MemberService();
      const result = await member.updateMember(memberUpdateInput);
      setAuthMember(result);

      await sweetTopSmallSuccessAlert("Modified successfully", 900);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <Box className={"settings"}>
      <Box className={"member-media-frame"}>
        <img src={memberImage} className={"mb-image"} alt="" />
        <div className={"media-change-box"}>
          <span>Upload image</span>
          <p>JPG, JPEG, PNG formats only!</p>
          <div className={"up-del-box"}>
            <Button component="label" onChange={handleImageView}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Username</label>
          <input
            className={"spec-input1 mb-nick"}
            type="text"
            placeholder={authMember?.memberNick}
            value={memberUpdateInput.memberNick}
            name="memberNick"
            onChange={memberNickHandler}
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"short-input"}>
          <label className={"spec-label"}>Phone</label>
          <input
            className={"spec-input mb-phone"}
            type="text"
            placeholder={authMember?.memberPhone ?? "no phone number"}
            value={memberUpdateInput.memberPhone}
            name="memberPhone"
            onChange={memberPhoneHandler}
          />
        </div>
        <div className={"short-input"}>
          <label className={"spec-label"}>Address</label>
          <input
            className={"spec-input  mb-address"}
            type="text"
            placeholder={
              authMember?.memberAddress
                ? authMember.memberAddress
                : "no address"
            }
            value={memberUpdateInput.memberAddress}
            name="memberAddress"
            onChange={memberAddressHandler}
          />
        </div>

        <div className={"short-input"}>
          <label className={"spec-label"}>Email</label>
          <input
            className={"spec-input  mb-address"}
            type="email"
            placeholder={
              authMember?.memberEmail ? authMember.memberEmail : "no email"
            }
            value={memberUpdateInput.memberEmail}
            name="memberAddress"
            onChange={memberEmailHandler}
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Description</label>
          <textarea
            className={"spec-textarea mb-description"}
            placeholder={
              authMember?.memberDesc ? authMember.memberDesc : "no description"
            }
            value={memberUpdateInput.memberDesc}
            name="memberDesc"
            onChange={memberDescHandler}
          />
        </div>
      </Box>

      <Box className={"save-box"}>
        <Button
          onClick={handleSubmitButton}
          variant={"contained"}
          sx={{ background: "#00d9ff", color: "black" }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
