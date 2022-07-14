using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Insig.Infrastructure.Migrations
{
    public partial class createMountainTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Mountain",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Height = table.Column<int>(type: "int", nullable: false),
                    Difficulty = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Range = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Park = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Shelter = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShelterDistance = table.Column<double>(type: "float", nullable: false),
                    FoodQuality = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AlwaysSnow = table.Column<bool>(type: "bit", nullable: false),
                    LiftAvailable = table.Column<bool>(type: "bit", nullable: false),
                    Trails = table.Column<int>(type: "int", nullable: false),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mountain", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Mountain");
        }
    }
}
