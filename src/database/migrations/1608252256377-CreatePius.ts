import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePius1608252256377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'pius',
                columns:[
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'message',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'date',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'userId',
                        type: 'varchar',
                        isNullable: true
                    },
                ],
                foreignKeys:[{
                    columnNames: ['userId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }]
            })

        );
    }

    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pius');
    }

}
