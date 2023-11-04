const styles = {
  widget: {
    fontSize: 14,
    borderRadius: 5,
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#5865f2',
    alignItems: 'center',
    padding: 20,
    color: '#ffffff',
  },
  body: {
    backgroundColor: '#1e1f22',
    padding: 20,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1f22',
    minHeight: 30,
    padding: '6px 6px 6px 20px',
    boxShadow: '0 -1px 18px hsla(0, 0%, 0%, 0.2), 0 -1px 0 hsla(0, 0%, 0%, 0.2)',
  },
  footerInfo: {
    color: '#8a8e94',
    opacity: 0.5,
  },
  buttonJoin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353639',
    width: 120,
    height: 30,
    transition: 'opacity .25s ease-out',
    border: '1px solid #212325',
    borderRadius: 4,
    color: '#ffffff',
  }
}

export default styles;