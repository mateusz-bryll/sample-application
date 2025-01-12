import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Person} from "./person.entity";
import {Repository} from "typeorm";
import { Person as IPerson } from '@sample-application/person-model';

@Injectable()
export class AppService {

  constructor(@InjectRepository(Person) private readonly _personRepository: Repository<Person>) {
    _personRepository.save({
      firstName: "John",
      lastName: "Doe",
      email: "john@doe.com",
      phone: '123456789'
    });
  }

  get(id: number): Promise<Person | null> {
    return this._personRepository.findOneBy({id});
  }

  create(person: IPerson): Promise<Person> {
    return this._personRepository.save(person);
  }

  async update(id: number, person: IPerson): Promise<Person | null> {
    const result = await this._personRepository.update(id, person);
    if (result.affected === 0) {
      return null;
    }

    return this.get(id);
  }

  async delete(id: number): Promise<void> {
    await this._personRepository.delete(id);
  }
}
