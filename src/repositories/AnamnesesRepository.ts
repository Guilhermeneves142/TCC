import { EntityRepository, Repository } from "typeorm";
import { Anamneses } from "../entities/Anamneses";

@EntityRepository(Anamneses)
class AnamnesesRepository extends Repository<Anamneses>{

}

export { AnamnesesRepository }