declare global {
  interface ProcessClient {
    client: boolean
  }

  const process: {
    client: boolean
  }
}

export {}
