import React from 'react';
import { IMember } from 'Types/IProject';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import { useSelector, useDispatch } from 'react-redux';
import RoundButton from 'components/RoundButton';
import Loading from 'components/Loading';
import { MdAdd } from 'react-icons/md';
import {
  memberCloseModal,
  memberOpenModal,
  memberRemoveRequest,
} from 'store/modules/project/actions';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import Item from './Item';
import MemberForm from './ProjectMemberForm';

// import { Container } from './styles';

const ProjectUsers: React.FC = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const members = useSelector<ArgosReduxStates, IMember[] | undefined>(
    (state) => state.project.currentProject?.members
  );

  const userId = useSelector<ArgosReduxStates, number | undefined>(
    (state) => state.user.profile?.id
  );

  const loading = useSelector<ArgosReduxStates, boolean>(
    (state) => state.project.loading
  );
  const open = useSelector<ArgosReduxStates, boolean>(
    (state) => state.project.memberOpenModal
  );

  function closeModal() {
    dispatch(memberCloseModal());
  }

  return (
    <>
      <Container>
        <div>
          <RoundButton
            text="Add"
            Icon={MdAdd}
            color="#6081F5"
            onClick={() => dispatch(memberOpenModal())}
          />
        </div>
        <ul>
          {members &&
            members.map((member) => (
              <Item
                key={member.email}
                member={member}
                userId={userId}
                handleDelete={(email) =>
                  dispatch(memberRemoveRequest(email, projectId))
                }
              />
            ))}
        </ul>
      </Container>

      <Loading loading={loading} />

      <MemberForm open={open} onClose={closeModal} />
    </>
  );
};

export default ProjectUsers;
