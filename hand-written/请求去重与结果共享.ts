class EveentEmitter {
  constructor(private event: Record<string, any> = {}) {

  }

  on(type: string, cbResolve: any, cbReject: any) {
    if (!this.event[type]) {
      this.event[type] = [[cbResolve, cbReject]]
    } else {
      this.event.push([cbResolve, cbReject])
    }
  }

  emit(type: string, res: any, ansType: string) {
    if (!this.event[type]) return;
    this.event[type].forEach(cbArr => {
      if (ansType === 'resolve') {
        cbArr[0](res)
      } else {
        cbArr[1](res)
      }
    });
  }
}