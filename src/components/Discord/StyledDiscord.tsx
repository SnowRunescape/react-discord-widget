import styled from 'styled-components';
import { StyledDiscordProps } from './types';

const StyledDiscord = styled.div<StyledDiscordProps>`
  font-size: 14px;
  border-radius: 5px;
  overflow: hidden;
  height: ${props => props.height ?? 420}px;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    background-color: #5865f2;
    align-items: center;
    padding: 20px;
    color: #ffffff;
  }

  .body {
    background-color: #1e1f22;
    padding: 20px;
    flex: 1;
    overflow-y: scroll;

    .member {
      display: flex;
      align-items: center;
      gap: 4px;
      padding-left: 10px;
      margin: 6px 0px;


      .name {
        flex: 1;
        color: #8a8e94;
      }

      .game {
        flex: 1;
        text-align: right;
        color: #4e5058;
      }

      img {
        width: 16px;
        height: 16px;
        border-radius: 8px;
      }
    }

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #353639;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1e1f22;
    min-height: 30px;
    padding: 6px 6px 6px 20px;
    box-shadow: 0 -1px 18px hsla(0, 0%, 0%, 0.2), 0 -1px 0 hsla(0, 0%, 0%, 0.2);

    .footerInfo {
      color: #8a8e94;
      opacity: .5;
    }

    .buttonJoin {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #353639;
      width: 120px;
      height: 30px;
      transition: opacity .25s ease-out;
      border: 1px solid #212325;
      border-radius: 4px;
      color: #ffffff;

      &:hover {
        opacity: .6;
      }
    }
  }
`

export default StyledDiscord;