export class Tickets {
  public id: number;
  public subject: string;
  public assignee: string;
  public requestedBy: string;
  public priority: string;
  public status: string;
  public createdDate: string;
  public dueDate: string;

  constructor(
    id: number,
    subject: string,
    assignee: string,
    requestedBy: string,
    priority: string,
    status: string,
    createdDate: string,
    dueDate: string
  ) {
    this.id = id;
    this.subject = subject;
    this.assignee = assignee;
    this.requestedBy = requestedBy;
    this.priority = priority;
    this.status = status;
    this.createdDate = createdDate;
    this.dueDate = dueDate;
  }
}

export class AddUpdateTicket {
  public subject?: string;
  public assignee?: string;
  public requestedBy?: string;
  public priority?: string;
  public status?: string;
  public createdDate?: string;
  public dueDate?: string;

  constructor(
    subject?: string,
    assignee?: string,
    requestedBy?: string,
    priority?: string,
    status?: string,
    createdDate?: string,
    dueDate?: string
  ) {
    this.subject = subject || "";
    this.assignee = assignee || "";
    this.requestedBy = requestedBy || "";
    this.priority = priority || "";
    this.status = status || "";
    this.createdDate = createdDate || "";
    this.dueDate = dueDate || "";
  }
}
export class EditTicket {
  public id: number;
  public subject?: string;
  public assignee?: string;
  public requestedBy?: string;
  public priority?: string;
  public status?: string;
  public createdDate?: string;
  public dueDate?: string;

  constructor(
    id: number,
    subject?: string,
    assignee?: string,
    requestedBy?: string,
    priority?: string,
    status?: string,
    createdDate?: string,
    dueDate?: string
  ) {
    this.id = id;
    this.subject = subject;
    this.assignee = assignee;
    this.requestedBy = requestedBy;
    this.priority = priority;
    this.status = status;
    this.createdDate = createdDate;
    this.dueDate = dueDate;
  }
}