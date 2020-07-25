import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
  color: white;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    min-height: 120px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 70px;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 250px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
