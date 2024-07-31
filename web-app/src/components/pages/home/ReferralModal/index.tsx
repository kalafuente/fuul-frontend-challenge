import { CopyToClipboard } from "@/components/common/CopyToClipboard";
import { ProjectInfo } from "@/types/project";
import { Button } from "@mui/material"
import { ProjectContainer, ShareLinkContainer, StyledModal, ModalContent, ModalDescription, ButtonContainer, ModalTitle } from "./ReferralModalStyles";

type ReferralModalProps = {
  handleClose: () => void,
  open: boolean,
  isClientSide: boolean,
  account: string,
  projectInfo: ProjectInfo,
}

const ShareLink = (props: { link: string, account: string }) => {
  return (
    <>
      <span>Here is your referral link:</span>
      <ShareLinkContainer>
        <a href={props.link}>{props.link}</a>
        <CopyToClipboard text={`${window.location.host}/?referrer=${props.account}`} />
      </ShareLinkContainer>
    </>
  );
};
export const ReferralModal = (props: ReferralModalProps) => {
  return <StyledModal
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <ModalContent>
      <ModalTitle id="modal-title">
        Congratulations on Your New NFT!
      </ModalTitle>
      <span>You've minted an amazing NFT. Now, help us grow and earn money!</span>
      <ProjectContainer>
        <p>
          ID: {props.projectInfo.id}
        </p>
        <p>
          Name: {props.projectInfo && props.projectInfo.name}
        </p>
        <p>
          Description: {props.projectInfo.description}
        </p>
      </ProjectContainer>

      <ModalDescription id="modal-description">
        {props.isClientSide ? (
          <ShareLink
            account={props.account}
            link={`${window.location.host}/?referrer=${props.account}`}
          />
        ) : (
          'Loading link...'
        )}
      </ModalDescription>
      <ButtonContainer>
        <Button onClick={props.handleClose} sx={{ padding: '5px', minWidth: '100px' }}>Done</Button>
      </ButtonContainer>
    </ModalContent>
  </StyledModal>
}