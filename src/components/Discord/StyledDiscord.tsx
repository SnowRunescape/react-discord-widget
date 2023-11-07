import styled from 'styled-components';
import { StyledDiscordProps } from './types';

const StyledDiscord = styled.div<StyledDiscordProps>`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 5px;
  overflow: hidden;
  height: ${props => props.height ?? 420}px;
  display: flex;
  flex-direction: column;
  text-align: left;

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

    .channelName {
      font-size: 18px;
      margin-bottom: 12px;
      color: #ffffff;
    }

    .memberOnlines {
      color: #8a8e94;
    }

    .member {
      display: flex;
      align-items: center;
      gap: 4px;
      padding-left: 10px;
      margin: 6px 0px;

      .memberAvatar {
        width: 16px;
        height: 16px;
        position: relative;
        margin-right: 4px;

        .memberStatus {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          position: absolute;
          bottom: 0;
          right: 0;

          &.memberStatusOnline {
            background-color: #24934f;
          }

          &.memberStatusdle {
            background-color: #af7615;
          }

          &.memberStatusDnd {
            background-color: #da373c;
          }

          &.memberStatusStreaming {
            background-color: #593695;
          }
        }
      }

      .memberName {
        flex: 1;
        color: #8a8e94;
      }

      .memberGame {
        flex: 1;
        text-align: right;
        color: #4e5058;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
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
      text-decoration: none;
      font-weight: normal;
      font-size: 14px;

      &:hover {
        opacity: .6;
      }
    }
  }
`

export default StyledDiscord;
