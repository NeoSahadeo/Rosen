interface Message {
  id: number,
  message: string,
  classes?: string,
  styles?: string,
  timeout?: number,
  status?: number,
}


export type { Message }
