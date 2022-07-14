using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Insig.IdentityServer.Migrations
{
    public partial class createMountainTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "515c008a-d5fe-45dd-8d06-f982148d3200");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5e3aa0dd-1070-4dd2-99f3-fbe675e3d4cf", "c0b288c2-f825-424d-ab05-9e12ecad9ccb", "consumer", "CONSUMER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5e3aa0dd-1070-4dd2-99f3-fbe675e3d4cf");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "515c008a-d5fe-45dd-8d06-f982148d3200", "16becadf-dd6b-46c5-85ed-d9a94afbfa04", "consumer", "CONSUMER" });
        }
    }
}
