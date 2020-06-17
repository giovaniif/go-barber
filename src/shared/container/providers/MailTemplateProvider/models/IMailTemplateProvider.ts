import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(date: IParseTemplateDTO): Promise<string>;
}
